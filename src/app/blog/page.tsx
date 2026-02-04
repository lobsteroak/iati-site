import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | IATI - Automatização Inteligente",
  description:
    "Artigos sobre automatização, produtividade e transformação digital para PME portuguesas.",
};

// This would typically come from a CMS or MDX files
const posts = [
  {
    slug: "o-que-e-automatizacao-de-processos",
    title: "O que é automatização de processos e como pode ajudar o seu negócio",
    excerpt:
      "Descubra como a automatização de processos pode transformar a forma como o seu negócio opera, poupando tempo e reduzindo erros.",
    date: "2024-02-01",
    category: "Guias",
    readTime: "5 min",
  },
  {
    slug: "5-sinais-precisa-automatizacao",
    title: "5 sinais de que o seu negócio precisa de automatização",
    excerpt:
      "Está a gastar demasiado tempo em tarefas repetitivas? Conheça os sinais que indicam que está na altura de automatizar.",
    date: "2024-01-25",
    category: "Produtividade",
    readTime: "4 min",
  },
  {
    slug: "automatizacao-restaurantes",
    title: "Automatização para restaurantes: um guia prático",
    excerpt:
      "Da gestão de menus à integração com plataformas de delivery, descubra como automatizar os processos do seu restaurante.",
    date: "2024-01-18",
    category: "Indústrias",
    readTime: "7 min",
  },
  {
    slug: "roi-automatizacao-como-calcular",
    title: "Como calcular o ROI da automatização no seu negócio",
    excerpt:
      "Aprenda a medir o retorno do investimento em automatização e a justificar o projeto internamente.",
    date: "2024-01-10",
    category: "Guias",
    readTime: "6 min",
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Recursos e artigos sobre automatização
            </h1>
            <p className="text-lg lg:text-xl text-muted leading-relaxed">
              Guias práticos, casos de estudo e dicas para ajudar o seu negócio
              a ser mais eficiente através da automatização.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {["Todos", "Guias", "Produtividade", "Indústrias", "Casos de Estudo"].map(
              (category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    category === "Todos"
                      ? "bg-foreground text-white"
                      : "bg-neutral-100 text-muted hover:bg-neutral-200"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group p-8 bg-neutral-50 rounded-2xl hover:bg-neutral-100 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-muted uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-muted-light">·</span>
                  <span className="text-xs text-muted">{post.readTime}</span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-muted transition-colors">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-muted text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">
                    {formatDate(post.date)}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-foreground hover:text-muted transition-colors inline-flex items-center gap-1"
                  >
                    Ler artigo
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border-2 border-border rounded-full hover:border-foreground transition-colors">
              Carregar mais artigos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Fique a par das novidades
            </h2>
            <p className="text-muted mb-8">
              Receba artigos e dicas sobre automatização diretamente no seu
              email. Sem spam, prometemos.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="O seu email"
                required
                className="flex-1 px-4 py-3 rounded-full border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:border-foreground transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-foreground text-white rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                Subscrever
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
