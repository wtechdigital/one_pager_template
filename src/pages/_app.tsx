import React from 'react';
import "../globals.css";
import type { AppProps } from 'next/app';
import Header from '../components/shared/header';
import Footer from '../components/shared/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
      <Component {...pageProps} />
    <Footer />
    </>
  );
}

export default MyApp;