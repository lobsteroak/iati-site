import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | iaty",
  description:
    "Política de privacidade da iaty. Saiba como recolhemos, utilizamos e protegemos os seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Política de Privacidade
            </h1>
            <p className="text-muted">
              Última atualização: 10 de março de 2026
            </p>
          </div>

          <div className="max-w-3xl mt-16 space-y-12 text-muted leading-relaxed">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                1. Responsável pelo tratamento
              </h2>
              <p>
                O responsável pelo tratamento dos dados pessoais recolhidos
                através do website <strong>iaty.pt</strong> é a iaty, com sede
                em Portugal, contactável através do email{" "}
                <a
                  href="mailto:info@iaty.pt"
                  className="text-foreground underline"
                >
                  info@iaty.pt
                </a>
                .
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                2. Dados pessoais que recolhemos
              </h2>
              <p className="mb-4">
                Recolhemos apenas os dados pessoais estritamente necessários para
                a prestação dos nossos serviços:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Dados de contacto:</strong> nome, email e,
                  opcionalmente, número de telefone, recolhidos quando agenda uma
                  reunião ou nos contacta.
                </li>
                <li>
                  <strong>Dados de navegação:</strong> informações técnicas como
                  endereço IP, tipo de browser e sistema operativo, recolhidos
                  automaticamente através de cookies essenciais ao funcionamento
                  do site.
                </li>
                <li>
                  <strong>Dados de utilização:</strong> informações sobre como
                  utiliza o nosso website, como páginas visitadas.
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                3. Finalidade do tratamento
              </h2>
              <p className="mb-4">
                Os seus dados pessoais são tratados para as seguintes
                finalidades:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Responder a pedidos de contacto e agendamento de reuniões
                </li>
                <li>
                  Prestar os serviços de automatização contratados
                </li>
                <li>
                  Enviar comunicações relacionadas com os serviços prestados
                </li>
                <li>
                  Melhorar o funcionamento e a experiência do website
                </li>
                <li>
                  Cumprir obrigações legais e regulamentares
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                4. Base legal do tratamento
              </h2>
              <p className="mb-4">
                O tratamento dos seus dados pessoais baseia-se nas seguintes
                bases legais, nos termos do Regulamento Geral sobre a Proteção de
                Dados (RGPD):
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Consentimento:</strong> quando nos fornece os seus
                  dados voluntariamente (ex.: agendamento de reunião).
                </li>
                <li>
                  <strong>Execução de contrato:</strong> quando o tratamento é
                  necessário para a prestação dos serviços solicitados.
                </li>
                <li>
                  <strong>Interesse legítimo:</strong> para melhoria do website e
                  dos serviços prestados.
                </li>
                <li>
                  <strong>Obrigação legal:</strong> quando exigido por lei
                  portuguesa ou europeia.
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                5. Partilha de dados
              </h2>
              <p className="mb-4">
                Não vendemos, alugamos ou partilhamos os seus dados pessoais com
                terceiros para fins de marketing. Os seus dados podem ser
                partilhados com:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Prestadores de serviços:</strong> entidades que nos
                  auxiliam na prestação dos serviços (ex.: alojamento web,
                  plataforma de agendamento), vinculados por acordos de
                  confidencialidade.
                </li>
                <li>
                  <strong>Autoridades públicas:</strong> quando exigido por lei
                  ou ordem judicial.
                </li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                6. Cookies
              </h2>
              <p>
                O nosso website utiliza apenas cookies essenciais ao seu
                funcionamento. Estes cookies não recolhem informações pessoais
                identificáveis e são necessários para garantir a navegação e as
                funcionalidades básicas do site. Não utilizamos cookies de
                publicidade ou de rastreamento de terceiros.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                7. Conservação dos dados
              </h2>
              <p>
                Os seus dados pessoais são conservados apenas durante o período
                necessário para as finalidades para que foram recolhidos, ou
                conforme exigido por lei. Os dados de contacto recolhidos através
                de agendamentos são conservados durante a relação comercial e
                eliminados no prazo máximo de 2 anos após o último contacto,
                salvo obrigação legal em contrário.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                8. Os seus direitos
              </h2>
              <p className="mb-4">
                Nos termos do RGPD, tem os seguintes direitos relativamente aos
                seus dados pessoais:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Direito de acesso:</strong> obter confirmação sobre o
                  tratamento dos seus dados e aceder aos mesmos.
                </li>
                <li>
                  <strong>Direito de retificação:</strong> solicitar a correção
                  de dados inexatos ou incompletos.
                </li>
                <li>
                  <strong>Direito ao apagamento:</strong> solicitar a eliminação
                  dos seus dados, quando aplicável.
                </li>
                <li>
                  <strong>Direito à limitação:</strong> solicitar a restrição do
                  tratamento dos seus dados.
                </li>
                <li>
                  <strong>Direito à portabilidade:</strong> receber os seus dados
                  num formato estruturado e de leitura automática.
                </li>
                <li>
                  <strong>Direito de oposição:</strong> opor-se ao tratamento dos
                  seus dados em determinadas circunstâncias.
                </li>
              </ul>
              <p className="mt-4">
                Para exercer qualquer um destes direitos, contacte-nos através de{" "}
                <a
                  href="mailto:info@iaty.pt"
                  className="text-foreground underline"
                >
                  info@iaty.pt
                </a>
                . Responderemos no prazo máximo de 30 dias.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                9. Segurança dos dados
              </h2>
              <p>
                Implementamos medidas técnicas e organizativas adequadas para
                proteger os seus dados pessoais contra acesso não autorizado,
                perda, destruição ou alteração. O nosso website utiliza
                encriptação SSL/TLS para proteger a transmissão de dados.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                10. Reclamações
              </h2>
              <p>
                Se considerar que o tratamento dos seus dados pessoais viola o
                RGPD, tem o direito de apresentar uma reclamação junto da
                Comissão Nacional de Proteção de Dados (CNPD), a autoridade de
                controlo portuguesa, através do website{" "}
                <a
                  href="https://www.cnpd.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline"
                >
                  www.cnpd.pt
                </a>
                .
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                11. Alterações a esta política
              </h2>
              <p>
                Reservamo-nos o direito de atualizar esta Política de
                Privacidade a qualquer momento. Quaisquer alterações serão
                publicadas nesta página com a data de atualização revista.
                Recomendamos que consulte esta página periodicamente.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                12. Contacto
              </h2>
              <p>
                Para questões relacionadas com esta política ou com o tratamento
                dos seus dados pessoais, contacte-nos através de{" "}
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
