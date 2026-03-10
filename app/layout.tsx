import type { Metadata } from "next";
import { Playfair_Display, Inter, Public_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YAGODA Glamping | Глэмпинг на берегу реки",
  description:
    "Глэмпинг «YAGODA» — комфортный отдых на природе в Шлиссельбурге. Уютные домики, SPA, банкетный зал, мероприятия на берегу реки.",
  keywords: "глэмпинг, glamping, yagoda, ягода, шлиссельбург, отдых на природе, домики",
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
        className={`${playfair.variable} ${inter.variable} ${publicSans.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="relative flex min-h-screen flex-col overflow-x-hidden transition-colors duration-300">
          {children}
        </div>
      </body>
    </html>
  );
}
