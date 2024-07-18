import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextAuthProvider } from "@/providers/auth";
import { Header } from "@/components/ui/header";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
});

export const metadata: Metadata = {
  title: "DevLinker | Desenvolvedores qualificados, soluções eficientes",
  description:
    "Plataforma que visa unir desenvolvedores freelancers a clientes reais!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />
          {children}
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  );
}
