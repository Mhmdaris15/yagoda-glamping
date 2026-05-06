import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YAGODA Glamping · Глэмпинг на берегу Невы",
  description:
    "Глэмпинг «YAGODA» — отдых на природе у воды в Шлиссельбурге. Три домика, баня на дровах, банный чан у каждого, банкетный зал и река в трёх минутах.",
  keywords: "глэмпинг, glamping, yagoda, ягода, шлиссельбург, нева, отдых на природе, домики, баня",
  openGraph: {
    title: "YAGODA Glamping · На берегу Невы",
    description: "Глэмпинг в Шлиссельбурге — три домика, баня, ресторан, мероприятия.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${mono.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <SmoothScroll>
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
