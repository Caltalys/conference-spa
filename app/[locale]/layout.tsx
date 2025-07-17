import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getTranslations, getMessages} from 'next-intl/server';

import "../../app/globals.css";
import React from "react";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ['400', '700', '900']
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hero' });
  return {
    title: t('title'),
    description: t('conference'),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const messages = await getMessages();
  // Awaiting params is necessary in dev mode when using dynamic APIs.
  const { locale } = await params;
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
