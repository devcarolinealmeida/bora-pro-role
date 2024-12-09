import type { Metadata } from "next";
import { Asap, Asap_Condensed } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Footer } from "../sections/Footer/page";
import Header from "../sections/Header/page";

const asap = Asap({
  variable: "--font-asap",
  subsets: ["latin"],
});

const asap_conds_900 = Asap_Condensed({
  variable: "--font-asap-condens-900",
  weight: "900",
  subsets: ["latin"],
});
const asap_conds_700 = Asap_Condensed({
  variable: "--font-asap-condens-700",
  weight: "700",
  subsets: ["latin"],
});
const asap_conds_500 = Asap_Condensed({
  variable: "--font-asap-condens-500",
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bora pro rolê",
  description: "Somos Camila e João, um casal de namorados que vive em Turim, na Itália. Aqui mostramos nossas vidas de estudante, viagens, pedais, fatos e curiosidades que encontramos na Itália e, futuramente, pelo mundo todo. E aí, bora pro rolê?",
  openGraph: {
    title: 'Bora pro rolê',
    description: "Somos Camila e João, um casal de namorados que vive em Turim, na Itália. Aqui mostramos nossas vidas de estudante, viagens, pedais, fatos e curiosidades que encontramos na Itália e, futuramente, pelo mundo todo. E aí, bora pro rolê?",
    images: ['/public/bora_pro_role-joao-e-cami.jpg']

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="relative">
      <body
        className={twMerge(
          asap.variable,
          asap_conds_900.variable,
          asap_conds_700.variable,
          asap_conds_500.variable,
          "antialiased bg-black"
        )}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
