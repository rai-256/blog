import { Geist, Geist_Mono } from 'next/font/google';
import 'app/globals.css';
import { SiteHeader } from 'components/SiteHeader.js';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="vsc-initialized relative">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
