import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import {Locale, NextIntlClientProvider, useMessages} from 'next-intl';
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

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
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
  params: { locale: Locale };
}>) {
  const messages = await getMessages();
  return (
    <html lang={(await params).locale} className="scroll-smooth">
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
