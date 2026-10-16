import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unifamec.vercel.app"),
  title: "Unifamec | Sua escolha começa aqui",
  description:
    "Graduações, Graduação Tecnológica e Pós-Graduação na Unifamec. Inscreva-se e comece a construir o futuro que você quer.",
  openGraph: {
    title: "Unifamec | Sua escolha começa aqui",
    description:
      "Graduações, Graduação Tecnológica e Pós-Graduação na Unifamec. Inscreva-se e comece a construir o futuro que você quer.",
    url: "https://unifamec.vercel.app",
    siteName: "Unifamec",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/banner.png",
        alt: "Unifamec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unifamec | Sua escolha começa aqui",
    description:
      "Graduações, Graduação Tecnológica e Pós-Graduação na Unifamec. Inscreva-se e comece a construir o futuro que você quer.",
    images: ["/images/banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${inter.variable} `}>
      <head>
        {/* Without JS the scroll-reveal never fires, so show everything */}
        <noscript>
          <style>{`.reveal,.reveal.reveal-clip-up>*,.reveal .reveal-child{opacity:1!important;transform:none!important;filter:none!important;clip-path:none!important}.page-loader{display:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
