FROM node:alpine AS build

WORKDIR /app

# Kopiere nur package.json und lock-Dateien für besseres Caching
COPY src/package*.json src/pnpm-lock.yaml ./
RUN npm install

# Kopiere den Quellcode, aber nicht node_modules und .next
COPY src ./
# Entferne eventuell mitkopierten node_modules und .next Ordner
RUN rm -rf node_modules .next

# Installiere Dependencies erneut (falls sie entfernt wurden)
RUN npm install

# Build die Anwendung
RUN npm run build

# Stage 2: Production
FROM node:alpine AS production

WORKDIR /app

# Kopiere package.json für Production Dependencies
COPY --from=build /app/package*.json ./

# Installiere nur Production Dependencies
RUN npm install --omit=dev --ignore-scripts

# Kopiere Build-Artefakte
COPY --from=build /app/.next .next
COPY --from=build /app/public public
COPY --from=build /app/next.config.ts ./

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]