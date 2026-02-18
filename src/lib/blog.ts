import fs from "node:fs";
import path from "node:path";

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content_markdown: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  thumbnail: string | null;
  thumbnail_alt_text: string | null;
  metadescription: string;
  language_code: string;
  source: "manual" | "arvow";
  id?: string | null;
  campaign_id?: string;
  campaign_name?: string;
  batch_id?: string;
  keyword_seed?: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".json"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    return JSON.parse(raw) as BlogPost;
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as BlogPost;
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function calculateReadTime(markdown: string): string {
  const wordCount = markdown.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min`;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
