"use client";

import Link from "next/link";
import { AnimatedSection, AnimatedText, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { AnimatedButton } from "@/components/AnimatedButton";
import { LogoMarquee } from "@/components/LogoMarquee";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedPills } from "@/components/AnimatedPills";
import { StatsCounter } from "@/components/StatsCounter";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { FloatingElements } from "@/components/FloatingElements";
import { DashboardCard } from "@/components/DashboardCard";

export default function Home() {
  const testimonials = [
    {
      quote: "A IATI transformou completamente a nossa operação. O que antes levava horas agora é feito automaticamente em segundos.",
      author: "Maria Santos",
      role: "CEO",
      company: "TechStart Portugal",
    },
    {
      quote: "Finalmente conseguimos escalar o negócio sem ter de contratar mais pessoas para tarefas administrativas.",
      author: "João Silva",
      role: "Diretor de Operações",
      company: "LogiPrime",
    },
    {
      quote: "A equipa da IATI percebeu o nosso negócio melhor do que nós próprios. Identificaram oportunidades que nunca tínhamos considerado.",
      author: "Ana Costa",
      role: "Fundadora",
      company: "Retail Plus",
    },
  ];

  const capabilities = [
    "Automatização de Processos",
    "Integrações API",
    "Workflows Inteligentes",
    "Extração de Dados",
    "Notificações Automáticas",
    "Relatórios Automáticos",
    "Gestão de Documentos",
    "CRM Automation",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <AnimatedText>
              <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
                Automatização Inteligente
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Pare de gastar horas em{" "}
                <span className="text-muted-light">trabalho repetitivo</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-lg lg:text-xl text-muted leading-relaxed mb-10 max-w-2xl">
                Identificamos os processos manuais do seu negócio e
                convertemos em workflows automáticos. Poupe tempo, reduza
                erros e deixe a sua equipa focar-se no que realmente importa.
              </p>
            </AnimatedText>
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton href="/contacto" variant="primary">
                  Agendar Reunião Gratuita
                </AnimatedButton>
                <AnimatedButton href="/calculadora" variant="outline">
                  Calcular Poupança
                </AnimatedButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Capabilities Pills */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedText className="text-center mb-8">
            <p className="text-sm font-medium text-muted uppercase tracking-wider">
              O que automatizamos
            </p>
          </AnimatedText>
          <AnimatedPills pills={capabilities} className="justify-center" />
        </div>
      </section>

      {/* Pain Points Section - Bento Grid */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Reconhece estes problemas?
            </h2>
            <p className="text-lg text-muted">
              A maioria das PME portuguesas ainda depende de processos manuais
              que consomem tempo e recursos valiosos.
            </p>
          </AnimatedSection>

          <BentoGrid>
            <BentoCard
              title="Tarefas repetitivas"
              description="A sua equipa passa horas a copiar dados entre sistemas, enviar e-mails manuais ou atualizar folhas de cálculo."
              icon="🔄"
              delay={0}
            />
            <BentoCard
              title="Erros humanos"
              description="Pequenos erros em processos manuais acumulam-se e causam problemas maiores: dados incorretos, clientes insatisfeitos."
              icon="⚠️"
              delay={0.1}
            />
            <BentoCard
              title="Falta de tempo"
              description="Os melhores funcionários acabam sobrecarregados com tarefas administrativas em vez de trabalho estratégico."
              icon="⏰"
              delay={0.2}
            />
            <BentoCard
              title="Processos desconectados"
              description="Informação espalhada por múltiplos sistemas sem integração. Ninguém tem uma visão completa do negócio."
              icon="🔗"
              delay={0.3}
            />
            <BentoCard
              title="Crescimento limitado"
              description="Quer crescer mas não consegue escalar os processos atuais sem contratar mais pessoas."
              icon="📈"
              delay={0.4}
            />
            <BentoCard
              title="Custos elevados"
              description="Gasta recursos em trabalho manual que poderia ser automatizado, impactando diretamente a margem."
              icon="💸"
              delay={0.5}
            />
          </BentoGrid>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Não precisa saber o que automatizar.{" "}
                <span className="text-muted-light">Nós descobrimos por si.</span>
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Ao contrário de outras soluções que esperam que você saiba
                exatamente o que quer, nós analisamos o seu negócio e
                identificamos onde a automatização traz mais valor.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-8">
                É como ter uma consultora de eficiência que também implementa as
                soluções. Perguntamos sobre o seu dia-a-dia, identificamos
                tarefas repetitivas e transformamo-las em workflows automáticos.
              </p>
              <StaggerContainer className="space-y-4">
                {[
                  "Análise completa dos processos existentes",
                  "Identificação de oportunidades de automatização",
                  "Implementação personalizada ao seu negócio",
                  "Suporte contínuo e otimização",
                ].map((item, index) => (
                  <StaggerItem key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <GlassCard className="aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-foreground rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold mb-2">
                    Consultoria + Implementação
                  </p>
                  <p className="text-muted text-sm">Tudo incluído</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Resultados que pode esperar
            </h2>
            <p className="text-lg text-muted">
              Os nossos clientes veem melhorias significativas nas suas operações.
            </p>
          </AnimatedSection>

          <StatsCounter
            stats={[
              { value: 80, suffix: "%", label: "Redução de tempo em tarefas repetitivas" },
              { value: 0, label: "Erros manuais com processos automatizados" },
              { value: 24, suffix: "/7", label: "Funcionamento contínuo dos workflows" },
              { value: 3, suffix: "x", label: "Aumento médio de produtividade" },
            ]}
          />

          {/* Dashboard Preview */}
          <div className="mt-20">
            <DashboardCard />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Como funciona
            </h2>
            <p className="text-lg text-muted">
              Um processo simples e transparente para transformar o seu negócio.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Reunião Inicial",
                description:
                  "Conversamos sobre o seu negócio, processos atuais e identificamos onde pode haver oportunidades de melhoria.",
              },
              {
                step: "02",
                title: "Análise Técnica",
                description:
                  "Fazemos um levantamento detalhado dos workflows existentes e definimos quais podem ser automatizados.",
              },
              {
                step: "03",
                title: "Proposta",
                description:
                  "Apresentamos uma proposta clara com os workflows a implementar, prazos e investimento necessário.",
              },
              {
                step: "04",
                title: "Implementação",
                description:
                  "Desenvolvemos e implementamos os workflows. Após entrega, oferecemos período de garantia e suporte contínuo.",
              },
            ].map((process, index) => (
              <StaggerItem key={index} className="relative">
                <div className="text-6xl font-bold text-gray-100 mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {process.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              O que dizem os nossos clientes
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <TestimonialSlider testimonials={testimonials} />
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Exemplos de automatização
            </h2>
            <p className="text-lg text-muted">
              Alguns dos workflows que implementamos regularmente para os nossos
              clientes.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Gestão de Encomendas",
                description:
                  "Encomenda recebida por e-mail → Dados extraídos automaticamente → Registados no sistema → Fatura gerada → Cliente notificado",
                industry: "E-commerce / Retalho",
              },
              {
                title: "Atualização de Menus",
                description:
                  "Preço do menu definido → Atualizado automaticamente em todas as plataformas de delivery (Glovo, Uber Eats, etc.)",
                industry: "Restauração",
              },
              {
                title: "Relatórios Automáticos",
                description:
                  "Dados recolhidos de múltiplas fontes → Relatório compilado → Enviado aos stakeholders às segundas de manhã",
                industry: "Qualquer Indústria",
              },
              {
                title: "Onboarding de Clientes",
                description:
                  "Novo cliente registado → Contrato gerado → E-mail de boas-vindas → Acesso criado → Reunião agendada automaticamente",
                industry: "Serviços",
              },
            ].map((useCase, index) => (
              <StaggerItem key={index}>
                <GlassCard>
                  <span className="text-xs font-medium text-muted uppercase tracking-wider">
                    {useCase.industry}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <Link
              href="/servicos"
              className="text-sm font-medium text-foreground hover:text-muted transition-colors inline-flex items-center gap-2 group"
            >
              Ver todos os serviços
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-foreground rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Pronto para automatizar o seu negócio?
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
                Agende uma reunião gratuita connosco. Vamos analisar os seus
                processos e mostrar-lhe onde pode poupar tempo e dinheiro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  href="/contacto"
                  variant="secondary"
                  className="bg-white text-foreground hover:bg-white/90"
                >
                  Agendar Reunião Gratuita
                </AnimatedButton>
                <AnimatedButton
                  href="/calculadora"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-foreground"
                >
                  Calcular Poupança
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
