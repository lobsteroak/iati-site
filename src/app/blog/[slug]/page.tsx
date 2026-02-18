import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado | iaty",
    };
  }

  return {
    title: `${post.title} | iaty Blog`,
    description: post.metadescription || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Article Header */}
      <section className="pt-32 lg:pt-40 pb-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Voltar ao blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-muted uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-muted-light">·</span>
            <span className="text-xs text-muted">{post.readTime} de leitura</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="text-sm text-muted">
            Publicado a {formatDate(post.date)}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <article className="prose prose-neutral max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted prose-p:leading-relaxed prose-li:text-muted prose-strong:text-foreground prose-strong:font-semibold">
            {post.content_markdown.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-12 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold mt-8 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="text-muted ml-4">
                    {paragraph.replace("- ", "")}
                  </li>
                );
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <p key={index} className="font-semibold text-foreground">
                    {paragraph.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (paragraph.trim() === "") {
                return null;
              }
              return (
                <p key={index} className="text-muted leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold mb-4">
              Quer saber como a automatização pode ajudar o seu negócio?
            </h2>
            <p className="text-muted mb-8">
              Agende uma reunião gratuita connosco. Vamos analisar os seus
              processos e identificar oportunidades de automatização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contacto">Agendar Reunião</Button>
              <Button href="/calculadora" variant="outline">
                Calcular Poupança
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
