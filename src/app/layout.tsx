import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamadou Ali Abdoul-Latif | Développeur Full-Stack Web & Mobile",
  description:
    "Développeur Full-Stack avec 5+ ans d'expérience. Sites web, e-commerce, SaaS, applications mobiles. Expertise Fintech & Paiement. Disponible freelance remote.",
  keywords: [
    "développeur full-stack",
    "développeur web",
    "développeur freelance",
    "création site web",
    "e-commerce",
    "application mobile",
    "SaaS",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "fintech",
    "paiement",
    "Hamadou",
    "Abdoul-Latif",
  ],
  authors: [{ name: "Hamadou Ali Abdoul-Latif" }],
  openGraph: {
    title: "Hamadou Ali Abdoul-Latif | Développeur Full-Stack Web & Mobile",
    description:
      "Sites web, e-commerce, SaaS, applications mobiles et solutions Fintech sur mesure. Disponible freelance remote.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamadou Ali Abdoul-Latif | Développeur Full-Stack Web & Mobile",
    description:
      "Sites web, e-commerce, SaaS, applications mobiles. Expertise Fintech. Disponible freelance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
 ${inter.variable}      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
