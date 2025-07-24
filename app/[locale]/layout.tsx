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
  const t = await getTranslations({ locale, namespace: 'Footer' });

  const siteName = t('conferenceName');
  const description = t('conferenceDescription');
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kmcdanang2025.com';

  return {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description: description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: siteName,
      description: description,
      url: '/',
      siteName: 'KMC 2025',
      images: [
        {
          url: '/logo.png', // Đường dẫn tương đối với metadataBase
          width: 512, // TODO: Cập nhật chiều rộng thực tế của logo
          height: 512, // TODO: Cập nhật chiều cao thực tế của logo
          alt: 'KMC 2025 Conference Logo',
        },
      ],
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteName,
      description: description,
      images: [`/logo.png`], // Đường dẫn tương đối với metadataBase
    },
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
