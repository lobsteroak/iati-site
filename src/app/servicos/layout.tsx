import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | iaty - Automatização Inteligente",
  description:
    "Descubra os nossos serviços de automatização: análise de processos, implementação de workflows e suporte contínuo para o seu negócio.",
};

export default function ServicosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
