import Navbar from '../components/Navbar';
import '../styles/globals.css';
import 'font-awesome/css/font-awesome.min.css';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="shortcut icon" href="/logo192.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo192.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo192.svg" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo192.svg" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Analytics />
  </>
}

export default MyApp
