import { NextRequest, NextResponse } from "next/server";
import { slugify, calculateReadTime, type BlogPost } from "@/lib/blog";

const GITHUB_OWNER = "lobsteroak";
const GITHUB_REPO = "iati-site";
const GITHUB_BRANCH = "main";
const CONTENT_PATH_PREFIX = "content/blog";

interface ArvowPayload {
  id: string;
  title: string;
  content: string;
  content_markdown: string;
  tags: string[];
  thumbnail: string;
  thumbnail_alt_text: string;
  metadescription: string;
  keyword_seed: string;
  language_code: string;
  campaign_id: string;
  campaign_name: string;
  batch_id: string;
}

export async function POST(request: NextRequest) {
  const secret = request.headers.get("X-SECRET");
  const expectedSecret = process.env.ARVOW_WEBHOOK_SECRET;

  if (!expectedSecret) {
    console.error("ARVOW_WEBHOOK_SECRET not configured");
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 }
    );
  }

  if (secret !== expectedSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: ArvowPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!payload.title || !payload.content_markdown) {
    return NextResponse.json(
      { error: "Missing required fields: title, content_markdown" },
      { status: 400 }
    );
  }

  const slug = slugify(payload.title);
  const readTime = calculateReadTime(payload.content_markdown);
  const date = new Date().toISOString().split("T")[0];
  const category = payload.tags?.[0] || "Artigos";

  const post: BlogPost = {
    title: payload.title,
    slug,
    excerpt: payload.metadescription || payload.content_markdown.slice(0, 200),
    content_markdown: payload.content_markdown,
    date,
    category,
    readTime,
    tags: payload.tags || [],
    thumbnail: payload.thumbnail || null,
    thumbnail_alt_text: payload.thumbnail_alt_text || null,
    metadescription: payload.metadescription || "",
    language_code: payload.language_code || "pt",
    source: "arvow",
    id: payload.id,
    campaign_id: payload.campaign_id,
    campaign_name: payload.campaign_name,
    batch_id: payload.batch_id,
    keyword_seed: payload.keyword_seed,
  };

  const fileContent = JSON.stringify(post, null, 2);
  const filePath = `${CONTENT_PATH_PREFIX}/${slug}.json`;

  try {
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) {
      throw new Error("GITHUB_TOKEN not configured");
    }

    // Check if file already exists (need SHA for updates)
    let existingSha: string | undefined;
    const getResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`,
      {
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    if (getResponse.ok) {
      const existing = await getResponse.json();
      existingSha = existing.sha;
    }

    // Create or update the file
    const putResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `blog: add "${post.title}"`,
          content: Buffer.from(fileContent).toString("base64"),
          branch: GITHUB_BRANCH,
          ...(existingSha ? { sha: existingSha } : {}),
        }),
      }
    );

    if (!putResponse.ok) {
      const err = await putResponse.text();
      console.error("GitHub API error:", err);
      throw new Error(`GitHub API returned ${putResponse.status}`);
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://iaty.pt";
    const publishedUrl = `${siteUrl}/blog/${slug}`;

    return NextResponse.json({ url: publishedUrl }, { status: 200 });
  } catch (error) {
    console.error("Failed to publish post:", error);
    return NextResponse.json(
      { error: "Failed to commit post to repository" },
      { status: 500 }
    );
  }
}
