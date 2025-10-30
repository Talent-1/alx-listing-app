import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Card from './components/common/Card';
import { SITE_TITLE } from './constants';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button className={`px-4 py-2 rounded ${className ?? ''}`} {...props}>
      {children}
    </button>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <main className="min-h-screen p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">ALX Listing App</h1>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Sample Listing" description="A nice place to stay" imageSrc="/assets/house-placeholder.jpg" />
          <Card title="Sample Listing 2" description="Cozy and clean" />
          <Card title="Sample Listing 3" description="Great location" />
        </section>

        <footer className="mt-10">
          <Button className="bg-blue-600 text-white">View More</Button>
        </footer>
      </main>
    </>
  );
};

export default Home;
