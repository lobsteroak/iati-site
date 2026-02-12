import { Metadata } from "next";
import { CalEmbed } from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Contacto | IATI - Automatização Inteligente",
  description:
    "Agende uma reunião gratuita connosco. Vamos analisar os seus processos e mostrar como a automatização pode ajudar o seu negócio.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Contacto
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Vamos conversar sobre o seu negócio
            </h1>
            <p className="text-lg lg:text-xl text-muted leading-relaxed">
              Agende uma reunião gratuita. Sem compromisso, vamos analisar os
              seus processos e identificar oportunidades de automatização.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Embed + Contact Info */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Calendar Embed */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12">
                <h2 className="text-2xl font-bold mb-6">Agendar Reunião</h2>
                <p className="text-muted mb-8">
                  Escolha o horário que lhe for mais conveniente. A reunião terá
                  duração de aproximadamente 30 minutos.
                </p>

                {/* Cal.com Embed */}
                <div className="bg-white rounded-2xl border border-border h-[500px] overflow-hidden">
                  <CalEmbed />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-6">
                  Outras formas de contacto
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:info@iati.pt"
                        className="text-muted hover:text-foreground transition-colors"
                      >
                        info@iati.pt
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-foreground"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <a
                        href="https://linkedin.com/company/iati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-foreground transition-colors"
                      >
                        /company/iati
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-neutral-50 rounded-2xl">
                <h3 className="font-semibold mb-3">O que esperar da reunião</h3>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Discussão sobre os processos atuais do seu negócio
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Identificação de oportunidades de automatização
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Estimativa de potencial de poupança</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Esclarecimento de dúvidas sobre o processo</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-foreground rounded-2xl text-white">
                <h3 className="font-semibold mb-3">Sem compromisso</h3>
                <p className="text-white/70 text-sm">
                  A primeira reunião é gratuita e sem qualquer compromisso. O
                  nosso objetivo é entender o seu negócio e mostrar como podemos
                  ajudar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
