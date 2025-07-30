// app/[locale]/layout.tsx

import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Roboto_Serif } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import "../../app/globals.css";

// --- Font Definitions (No changes) ---
const robotoSanserif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ['400', '600', '700', '900']
});

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ['400', '600', '700', '900']
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const locales = ['en', 'vi'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Params = Promise<{ locale: string }>;

type Props = {
  children: React.ReactNode;
  params: Params;
};

// --- Improved Metadata Generation ---
export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  // Fetch translations from multiple namespaces if needed
  const { locale } = await params
  const t = await getTranslations({ locale });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kmcdanang2025.com';
  
  const siteName = t('ConferenceInfo.conferenceNameValue');
  const description = t('Register.attendanceDescription');
  const ogImageUrl = `${siteUrl}/logo.png`;

  // IMPROVEMENT: Move JSON-LD creation here
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: t('ConferenceInfo.conferenceNameValue'),
    startDate: t('ConferenceInfo.timeValue'), 
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      address: t('ConferenceInfo.locationValue'),
    },
    image: [ogImageUrl],
    description: description,
    organizer: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
  };

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
      siteName: siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200, // IMPROVEMENT: Use recommended dimensions
          height: 630,
          alt: `Logo for ${siteName}`,
        },
      ],
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteName,
      description: description,
      images: [ogImageUrl],
    },
    // FIX: Inject JSON-LD using the 'other' property in metadata
    other: {
        'application/ld+json': JSON.stringify(jsonLdData),
    },
  };
}


// --- Improved RootLayout ---
export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = await params
  // IMPROVEMENT: This validation is good, but ideally should be in middleware for edge cases.
  // For now, it's fine to keep it here as a safeguard.
  if (!locales.includes(locale)) {
    notFound();
  }
  
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${robotoSans.variable} ${robotoSanserif.variable} ${robotoMono.variable} scroll-smooth`}>
      {/* FIX: Removed manual <head> and <script> tags */}
      <body
        className="font-serif antialiased"
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}