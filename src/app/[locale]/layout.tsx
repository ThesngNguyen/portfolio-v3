import type { Metadata } from "next";
import { Concert_One } from "next/font/google";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from 'next-intl';

const concertOne = Concert_One({
  weight: "400",
  variable: "--font-concert-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThesngNguyeenx",
  description: "Just me and mine portfolio xD",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ 
    locale: string 
  }>;
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<LocaleLayoutProps>) {

  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${concertOne.className} antialiased h-screen`}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
} 
