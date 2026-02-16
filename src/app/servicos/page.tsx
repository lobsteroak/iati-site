"use client";

import Link from "next/link";
import { IATYEngineCard } from "@/components/IATYEngineCard";

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Serviços
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Automatização à medida do seu negócio
            </h1>
            <p className="text-lg lg:text-xl text-muted leading-relaxed">
              Desde a identificação de oportunidades até à implementação com
              tecnologia proprietária. O <strong>IATY Engine</strong> é o nosso motor de
              automação que transforma processos manuais em workflows de alta performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-16">
            {/* Service 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">
                  Fase 1
                </span>
                <h2 className="text-3xl font-bold tracking-tight mt-2 mb-6">
                  Consultoria e Análise
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Começamos por compreender profundamente o seu negócio.
                  Analisamos os processos existentes, identificamos tarefas
                  repetitivas e mapeamos oportunidades de automatização.
                </p>
                <ul className="space-y-3">
                  {[
                    "Reunião de descoberta para entender o seu dia-a-dia",
                    "Mapeamento de processos e workflows existentes",
                    "Identificação de bottlenecks e ineficiências",
                    "Relatório com recomendações prioritizadas",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
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
                      <span className="text-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-3xl p-12 border border-border">
                <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Entendemos antes de agir
                </h3>
                <p className="text-muted text-sm">
                  Não propomos soluções genéricas. Cada recomendação é baseada
                  na realidade específica do seu negócio.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <IATYEngineCard />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-sm font-medium text-muted uppercase tracking-wider">
                  Fase 2
                </span>
                <h2 className="text-3xl font-bold tracking-tight mt-2 mb-6">
                  Implementação de Workflows
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Desenvolvemos e implementamos os workflows através do IATY Engine,
                  a nossa tecnologia proprietária. Trabalhamos de forma iterativa,
                  com entregas incrementais para garantir que tudo funciona como esperado.
                </p>
                <ul className="space-y-3">
                  {[
                    "Execução através do IATY Engine, o nosso motor proprietário",
                    "Integração com sistemas existentes (ERP, CRM, etc.)",
                    "Testes rigorosos antes de ir para produção",
                    "Documentação completa de cada automatização",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
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
                      <span className="text-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">
                  Fase 3
                </span>
                <h2 className="text-3xl font-bold tracking-tight mt-2 mb-6">
                  Suporte e Manutenção
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Após a implementação, continuamos ao seu lado. Monitorizamos
                  os workflows, fazemos ajustes necessários e garantimos que
                  tudo continua a funcionar perfeitamente.
                </p>
                <ul className="space-y-3">
                  {[
                    "Período de garantia após cada implementação",
                    "Monitorização proativa dos workflows",
                    "Ajustes e otimizações contínuas",
                    "Suporte técnico dedicado",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
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
                      <span className="text-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-3xl p-12 border border-border">
                <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Parceiro a longo prazo
                </h3>
                <p className="text-muted text-sm">
                  Não desaparecemos após a entrega. Estamos cá para garantir o
                  sucesso contínuo das suas automatizações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Modelo de investimento
            </h2>
            <p className="text-lg text-muted">
              Um modelo transparente e alinhado com os resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-neutral-50 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">
                Implementação por Workflow
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Pagamento único por cada workflow desenvolvido. O valor depende
                da complexidade e do número de integrações necessárias.
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                  Proposta detalhada antes de começar
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                  Sem surpresas no final
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                  Garantia incluída
                </li>
              </ul>
            </div>

            <div className="p-8 bg-neutral-50 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">
                Subscrição de Manutenção
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Mensalidade para garantir o funcionamento contínuo dos workflows
                e acesso a suporte técnico.
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                  Monitorização 24/7
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                  Ajustes e otimizações incluídos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                  Suporte prioritário
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Indústrias que servimos
            </h2>
            <p className="text-lg text-muted">
              Trabalhamos com empresas de diversos setores. Se tem processos
              manuais, conseguimos ajudar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Restauração",
                examples: "Menus, reservas, delivery",
              },
              {
                name: "E-commerce",
                examples: "Encomendas, inventário, envios",
              },
              {
                name: "Serviços",
                examples: "Onboarding, faturas, relatórios",
              },
              {
                name: "Indústria",
                examples: "Produção, qualidade, logística",
              },
              {
                name: "Imobiliário",
                examples: "Leads, contratos, visitas",
              },
              {
                name: "Saúde",
                examples: "Marcações, registos, comunicação",
              },
              {
                name: "Retalho",
                examples: "Stock, preços, fornecedores",
              },
              {
                name: "Outros",
                examples: "Qualquer setor com processos manuais",
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-border"
              >
                <h3 className="font-semibold mb-1">{industry.name}</h3>
                <p className="text-muted text-sm">{industry.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-foreground rounded-3xl p-12 lg:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Vamos falar sobre o seu negócio?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
              Agende uma reunião gratuita. Sem compromisso, vamos analisar os
              seus processos e identificar oportunidades de automatização.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-white text-gray-900 hover:bg-white/90 transition-all duration-200"
            >
              Agendar Reunião Gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
