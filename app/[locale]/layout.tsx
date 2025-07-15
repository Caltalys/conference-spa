import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {getTranslations, getMessages} from 'next-intl/server';

import "../../app/globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ['400', '700', '900']
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Hero');
  return {
    title: t('title'),
    description: t('conference'),
  };
}

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
