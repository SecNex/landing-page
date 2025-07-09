import {
	Client,
	PageObjectResponse,
	RichTextItemResponse,
	BlockObjectResponse,
	PartialBlockObjectResponse,
} from "@notionhq/client";

// Überprüfe Umgebungsvariablen nur im Server-Kontext
if (typeof window === "undefined") {
	if (!process.env.NOTION_API_KEY) {
		throw new Error("NOTION_API_KEY ist nicht definiert");
	}

	if (!process.env.NOTION_DATABASE_ID) {
		throw new Error("NOTION_DATABASE_ID ist nicht definiert");
	}
}

// Initialisiere den Client nur mit den notwendigen Berechtigungen
export const notion = new Client({
	auth: process.env.NOTION_API_KEY,
});

// Stelle sicher, dass databaseId immer definiert ist
export const databaseId = process.env.NOTION_DATABASE_ID || "";

export const milestonesDatabaseId =
	process.env.NOTION_MILESTONES_DATABASE_ID || "";

type FileObject = {
	url: string;
	expiry_time: string;
};

export type BlogPost = PageObjectResponse & {
	cover?: {
		type: "file";
		file: FileObject;
	} | null;
	created_time: string;
	properties: {
		Name: {
			type: "title";
			title: RichTextItemResponse[];
			id: string;
		};
		Description: {
			type: "rich_text";
			rich_text: RichTextItemResponse[];
			id: string;
		};
		Author: {
			type: "people";
			people: Array<{
				id: string;
				name: string;
				avatar_url?: string;
			}>;
			id: string;
		};
		Tags: {
			type: "multi_select";
			multi_select: Array<{
				id: string;
				name: string;
				color: string;
			}>;
		};
		"Reading Time": {
			type: "number";
			number: number | null;
			id: string;
		};
		Published: {
			type: "checkbox";
			checkbox: boolean;
			id: string;
		};
	};
};

export type NotionMilestone = PageObjectResponse & {
	properties: {
		Title: {
			type: "title";
			title: RichTextItemResponse[];
			id: string;
		};
		Description: {
			type: "rich_text";
			rich_text: RichTextItemResponse[];
			id: string;
		};
		Status: {
			type: "status";
			status: {
				id: string;
				name: string;
				color: string;
			};
			id: string;
		};
	};
};

// Füge Rate-Limiting und Fehlerbehandlung hinzu
export async function getBlogPosts(startCursor?: string) {
	try {
		const response = await notion.databases.query({
			database_id: databaseId,
			start_cursor: startCursor,
			filter: {
				property: "Published",
				checkbox: {
					equals: true,
				},
			},
		});

		return response;
	} catch (error) {
		console.error("Fehler beim Abrufen der Blog-Posts:", error);
		return { results: [], has_more: false };
	}
}

export async function getBlogPostBySlug(slug: string): Promise<
	| (BlogPost & {
			blocks: (BlockObjectResponse | PartialBlockObjectResponse)[];
	  })
	| null
> {
	try {
		const response = (await notion.pages.retrieve({
			page_id: slug,
		})) as BlogPost;

		// Überprüfe, ob der Beitrag veröffentlicht ist
		if (!response.properties.Published.checkbox) {
			return null;
		}

		const blocks = await notion.blocks.children.list({
			block_id: slug,
		});

		return {
			...response,
			blocks: blocks.results,
		};
	} catch (error) {
		console.error("Error fetching blog post:", error);
		return null;
	}
}

export async function getDatabase() {
	try {
		const response = await notion.databases.query({
			database_id: databaseId,
			page_size: 100,
			filter: {
				property: "Published",
				checkbox: {
					equals: true,
				},
			},
			sorts: [
				{
					property: "Date",
					direction: "descending",
				},
			],
		});

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return response.results.map((page: any) => {
			const post = page as BlogPost;
			const cover = post.cover?.type === "file" ? post.cover.file.url : null;

			return {
				id: post.id,
				title: post.properties.Name.title[0]?.plain_text || "No Title",
				author: post.properties.Author.people[0]?.name || "Anonymous",
				slug: post.id,
				cover: cover,
			};
		});
	} catch (error) {
		console.error("Fehler beim Abrufen der Blog-Posts:", error);
		return [];
	}
}

function mapStatus(status: string): "In Progress" | "Done" | "Not Started" {
	switch (status.toLowerCase()) {
		case "in progress":
			return "In Progress";
		case "done":
			return "Done";
		case "not started":
			return "Not Started";
		default:
			return "Not Started";
	}
}

export async function getMilestonesFromNotion() {
	try {
		const response = await notion.databases.query({
			database_id: milestonesDatabaseId,
			page_size: 100,
			sorts: [
				{
					property: "Due Date",
					direction: "ascending",
				},
			],
			filter: {
				property: "Public",
				checkbox: {
					equals: true,
				},
			},
		});

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return response.results.map((page: any) => {
			const m = page as NotionMilestone;
			return {
				title:
					m.properties.Name &&
					m.properties.Name.type === "title" &&
					m.properties.Name.title[0]?.plain_text
						? m.properties.Name.title[0].plain_text
						: "",
				description:
					m.properties.Description &&
					m.properties.Description.type === "rich_text" &&
					m.properties.Description.rich_text[0]?.plain_text
						? m.properties.Description.rich_text[0].plain_text
						: "",
				status: mapStatus(m.properties.Status.status.name),
			};
		});
	} catch (error) {
		console.error("Fehler beim Abrufen der Milestones:", error);
		return [];
	}
}
