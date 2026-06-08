import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'Hero'});
  
  return {
    title: `Taha Dülger | ${t('title1')}`,
    description: t('description'),
    alternates: {
      languages: {
        'en': '/en',
        'tr': '/tr',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const locales = ['en', 'tr'];
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="px-4 pb-14 pt-28 sm:px-6 sm:pt-32">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
