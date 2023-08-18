import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-semibold">Michael Salton</h1>
        <h3 className="text-2xl font-semibold">Software Engineer</h3>
      </main>
    </div>
  );
}
