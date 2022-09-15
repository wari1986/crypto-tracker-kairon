import Head from "next/head";
import Navbar from "./Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="px-4">
      <Head>
        <title>Crypto tracker</title>
        <meta name="description" content="Crypto token tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=''>
        <Navbar />
      </header>
      <main className=''>{children}</main>
    </div>
  );
};

export default Layout;
