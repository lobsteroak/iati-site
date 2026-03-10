import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Serviço | iaty",
  description:
    "Termos e condições de utilização dos serviços da iaty. Conheça os seus direitos e obrigações.",
};

export default function TermosPage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Termos de Serviço
            </h1>
            <p className="text-muted">
              Última atualização: 10 de março de 2026
            </p>
          </div>

          <div className="max-w-3xl mt-16 space-y-12 text-muted leading-relaxed">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                1. Disposições gerais
              </h2>
              <p className="mb-4">
                Os presentes Termos de Serviço regulam a utilização do website{" "}
                <strong>iaty.pt</strong> e a contratação dos serviços de
                automatização de processos prestados pela iaty, com sede em
                Portugal.
              </p>
              <p>
                Ao aceder a este website ou ao contratar os nossos serviços, o
                utilizador aceita os presentes termos na sua totalidade. Caso não
                concorde com algum dos termos, deverá abster-se de utilizar o
                website ou os serviços.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                2. Serviços
              </h2>
              <p className="mb-4">
                A iaty presta serviços de consultoria e implementação de soluções
                de automatização de processos para pequenas e médias empresas,
                incluindo:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Análise e diagnóstico de processos empresariais
                </li>
                <li>
                  Desenvolvimento e implementação de automações personalizadas
                </li>
                <li>
                  Integração de sistemas e ferramentas
                </li>
                <li>
                  Suporte e manutenção das soluções implementadas
                </li>
              </ul>
              <p className="mt-4">
                Os termos específicos de cada projeto, incluindo âmbito,
                prazos, e valores, são definidos em proposta ou contrato
                individual acordado entre as partes.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                3. Reunião de diagnóstico
              </h2>
              <p>
                A iaty disponibiliza uma reunião inicial de diagnóstico
                gratuita e sem compromisso. Esta reunião tem como objetivo
                analisar os processos do cliente e identificar oportunidades de
                automatização. O agendamento da reunião não constitui qualquer
                vínculo contratual ou obrigação de contratação de serviços.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                4. Obrigações do cliente
              </h2>
              <p className="mb-4">O cliente compromete-se a:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Fornecer informações verdadeiras, completas e atualizadas
                </li>
                <li>
                  Disponibilizar os acessos e informações necessários à execução
                  dos serviços contratados
                </li>
                <li>
                  Não utilizar os serviços para fins ilegais ou que violem
                  direitos de terceiros
                </li>
                <li>
                  Efetuar os pagamentos acordados nos prazos estipulados
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                5. Obrigações da iaty
              </h2>
              <p className="mb-4">A iaty compromete-se a:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Prestar os serviços contratados com diligência e
                  profissionalismo
                </li>
                <li>
                  Manter a confidencialidade de toda a informação do cliente
                </li>
                <li>
                  Comunicar de forma transparente sobre o andamento dos projetos
                </li>
                <li>
                  Prestar suporte técnico conforme acordado
                </li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                6. Propriedade intelectual
              </h2>
              <p className="mb-4">
                Todos os conteúdos do website iaty.pt, incluindo textos,
                imagens, logótipos, design e código, são propriedade da iaty e
                estão protegidos pela legislação portuguesa e europeia sobre
                propriedade intelectual.
              </p>
              <p>
                As soluções de automatização desenvolvidas especificamente para o
                cliente serão propriedade do cliente após a conclusão do projeto
                e o pagamento integral dos serviços, salvo acordo em contrário.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                7. Confidencialidade
              </h2>
              <p>
                Ambas as partes comprometem-se a manter a confidencialidade de
                toda a informação trocada no âmbito da relação comercial. Esta
                obrigação mantém-se em vigor após a cessação da prestação de
                serviços, sem limite temporal, salvo acordo em contrário.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                8. Limitação de responsabilidade
              </h2>
              <p className="mb-4">
                A iaty não se responsabiliza por:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Danos indiretos, consequenciais ou perda de lucros resultantes
                  da utilização dos serviços
                </li>
                <li>
                  Interrupções temporárias do website por motivos de manutenção
                  ou técnicos
                </li>
                <li>
                  Problemas causados por serviços de terceiros integrados nas
                  soluções
                </li>
                <li>
                  Utilização inadequada ou não autorizada das soluções pelo
                  cliente
                </li>
              </ul>
              <p className="mt-4">
                A responsabilidade total da iaty, quando aplicável, está limitada
                ao valor dos serviços contratados.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                9. Pagamentos
              </h2>
              <p>
                As condições de pagamento são definidas na proposta ou contrato
                individual de cada projeto. Salvo acordo em contrário, os
                pagamentos devem ser efetuados no prazo de 30 dias após a emissão
                da fatura. O atraso no pagamento poderá resultar na suspensão dos
                serviços até à regularização do mesmo.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                10. Resolução do contrato
              </h2>
              <p className="mb-4">
                Qualquer uma das partes pode resolver o contrato de prestação de
                serviços mediante comunicação escrita com antecedência mínima de
                30 dias. Em caso de resolução:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  O cliente é responsável pelo pagamento dos serviços já
                  prestados
                </li>
                <li>
                  A iaty entregará ao cliente todo o trabalho realizado até à data
                </li>
                <li>
                  As obrigações de confidencialidade mantêm-se em vigor
                </li>
              </ul>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                11. Proteção de dados
              </h2>
              <p>
                O tratamento de dados pessoais é efetuado em conformidade com o
                Regulamento Geral sobre a Proteção de Dados (RGPD) e a legislação
                portuguesa aplicável. Para mais informações, consulte a nossa{" "}
                <a href="/privacidade" className="text-foreground underline">
                  Política de Privacidade
                </a>
                .
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                12. Lei aplicável e foro
              </h2>
              <p>
                Os presentes Termos de Serviço regem-se pela lei portuguesa.
                Para a resolução de qualquer litígio decorrente da interpretação
                ou execução dos presentes termos, as partes submetem-se à
                jurisdição dos tribunais portugueses competentes.
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                13. Alterações aos termos
              </h2>
              <p>
                A iaty reserva-se o direito de alterar os presentes Termos de
                Serviço a qualquer momento. As alterações entram em vigor após a
                sua publicação nesta página. Recomendamos que consulte esta
                página periodicamente.
              </p>
            </div>

            {/* 14 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                14. Contacto
              </h2>
              <p>
                Para questões relacionadas com estes Termos de Serviço,
                contacte-nos através de{" "}
                <a
                  href="mailto:info@iaty.pt"
                  className="text-foreground underline"
                >
                  info@iaty.pt
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
