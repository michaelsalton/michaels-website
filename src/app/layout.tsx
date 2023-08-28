import './/globals/globals.css';
import type { Metadata } from 'next'
import Head from 'next/head';
import Navbar from './navbar/Navbar'
import {Poppins} from 'next/font/google'
import Link from 'next/link';

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
        <link rel="icon" href=".//images/favicon.ico" sizes="any" />
      </Head>
      <Navbar/>
      <body className={poppins.className}>
        {children}
        <div style={{
              position: 'fixed',
              left: '50%',
              bottom: '0',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Link href="#about">
                <h5 style={{ 
                  color: 'white',
                  paddingBottom: '45%'
                  }}>see more</h5>
              </Link>
            </div>
      </body>
    </html>
  );
}
