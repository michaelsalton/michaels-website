import './globals.css';
import type { Metadata } from 'next'
import { Header } from './header';
import Navbar from './components/Navbar'
import Head from 'next/head';
import {Poppins} from 'next/font/google'
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"]
  
});

export const metadata: Metadata = {
  title: 'Michael Salton',
  description: 'Michael Salton\'s website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
