import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { notFound } from "next/navigation";

// This would typically come from a CMS or MDX files
const posts: Record<
  string,
  {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    content: string;
  }
> = {
  "o-que-e-automatizacao-de-processos": {
    title: "O que é automatização de processos e como pode ajudar o seu negócio",
    excerpt:
      "Descubra como a automatização de processos pode transformar a forma como o seu negócio opera, poupando tempo e reduzindo erros.",
    date: "2024-02-01",
    category: "Guias",
    readTime: "5 min",
    content: `
## O que é automatização de processos?

A automatização de processos consiste em utilizar tecnologia para executar tarefas repetitivas que tradicionalmente seriam feitas manualmente. Em vez de um funcionário passar horas a copiar dados de um sistema para outro, ou a enviar e-mails de confirmação um a um, um workflow automático faz esse trabalho de forma instantânea e sem erros.

## Por que é importante para PME portuguesas?

Portugal tem milhares de pequenas e médias empresas que ainda dependem de processos manuais para as suas operações diárias. Isto representa um custo significativo:

- **Tempo perdido**: Funcionários gastam horas em tarefas que poderiam ser automatizadas
- **Erros humanos**: Processos manuais são propensos a erros de digitação, esquecimentos e inconsistências
- **Escalabilidade limitada**: Para crescer, precisam de contratar mais pessoas em vez de otimizar processos

## Exemplos práticos de automatização

### 1. Gestão de encomendas
Uma loja online recebe uma encomenda → O sistema automaticamente:
- Verifica o stock
- Gera a fatura
- Notifica o armazém
- Envia email de confirmação ao cliente
- Atualiza o CRM

### 2. Relatórios automáticos
Em vez de compilar dados de múltiplas fontes todas as semanas:
- Os dados são recolhidos automaticamente
- O relatório é gerado
- É enviado aos stakeholders por email
- Tudo sem intervenção humana

### 3. Onboarding de clientes
Quando um novo cliente se regista:
- Contrato gerado automaticamente
- Email de boas-vindas enviado
- Acesso ao sistema criado
- Reunião de kick-off agendada

## Como começar?

O primeiro passo é identificar as tarefas repetitivas do seu negócio. Pergunte-se:

1. Que tarefas fazemos todos os dias/semanas que são sempre iguais?
2. Onde é que gastamos mais tempo em trabalho administrativo?
3. Que erros acontecem com frequência por causa de processos manuais?

Depois de identificar estas oportunidades, o próximo passo é avaliar quais trazem mais valor quando automatizadas. Nem todas as tarefas justificam o investimento em automatização.

## Conclusão

A automatização de processos não é apenas para grandes empresas. Com as ferramentas certas e um parceiro experiente, qualquer PME pode beneficiar de workflows automáticos que poupam tempo, reduzem erros e permitem focar no que realmente importa: fazer crescer o negócio.
    `,
  },
  "5-sinais-precisa-automatizacao": {
    title: "5 sinais de que o seu negócio precisa de automatização",
    excerpt:
      "Está a gastar demasiado tempo em tarefas repetitivas? Conheça os sinais que indicam que está na altura de automatizar.",
    date: "2024-01-25",
    category: "Produtividade",
    readTime: "4 min",
    content: `
## Será que está na altura de automatizar?

Muitas empresas continuam a fazer as coisas "como sempre fizeram", sem perceberem quanto tempo e dinheiro estão a perder. Aqui estão 5 sinais claros de que o seu negócio beneficiaria de automatização.

## 1. A sua equipa faz sempre as mesmas tarefas

Se os seus funcionários passam uma parte significativa do dia a fazer tarefas repetitivas - copiar dados, enviar os mesmos emails, atualizar folhas de cálculo - está a desperdiçar talento humano em trabalho que uma máquina faz melhor.

**Exemplo:** Alguém passa 2 horas por dia a processar encomendas manualmente. São 10 horas por semana, 40 horas por mês. Com automatização, esse tempo pode ser reduzido para minutos.

## 2. Erros acontecem com frequência

Processos manuais são propensos a erros. Um número mal copiado, um email esquecido, uma fatura com o valor errado. Estes pequenos erros acumulam-se e podem custar caro.

**Sinal de alerta:** Se precisa de rever trabalho feito para "apanhar" erros, está a gastar tempo a dobrar.

## 3. Não consegue escalar sem contratar

Quando o negócio cresce, precisa de mais pessoas para fazer o mesmo trabalho? Isso é um sinal de que os seus processos não são eficientes.

Com automatização, consegue:
- Processar mais encomendas sem contratar
- Servir mais clientes com a mesma equipa
- Crescer sem aumentar proporcionalmente os custos

## 4. A informação está espalhada por todo o lado

Dados no Excel, emails no Outlook, notas no papel, informação no CRM... Se tem de consultar múltiplos sítios para ter uma visão completa do negócio, precisa de integração e automatização.

## 5. Trabalha ao fim de semana para "pôr as coisas em dia"

Se você ou a sua equipa precisam de trabalhar fora de horas para manter as coisas a funcionar, algo está errado. Tarefas rotineiras devem ser automatizadas para libertar tempo para trabalho estratégico.

## O que fazer a seguir?

Se reconheceu o seu negócio em pelo menos 2 destes sinais, está na altura de considerar seriamente a automatização. O primeiro passo é fazer um levantamento das tarefas repetitivas e calcular quanto tempo gastam nelas.

Pode usar a nossa calculadora de ROI para ter uma ideia do potencial de poupança, ou agendar uma reunião connosco para uma análise mais detalhada.
    `,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return {
      title: "Artigo não encontrado | iaty",
    };
  }

  return {
    title: `${post.title} | iaty Blog`,
    description: post.excerpt,
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

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
            {post.content.split("\n").map((paragraph, index) => {
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
