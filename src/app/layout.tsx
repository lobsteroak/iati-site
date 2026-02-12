import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "IATY | Automatização Inteligente para o seu Negócio",
  description:
    "Identificamos e automatizamos os processos repetitivos do seu negócio. Poupe tempo, reduza custos e aumente a produtividade com workflows inteligentes.",
  keywords: [
    "automatização",
    "automação",
    "workflows",
    "inteligência artificial",
    "PME",
    "Portugal",
    "produtividade",
    "eficiência",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
