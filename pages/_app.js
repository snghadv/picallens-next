import Navbar from '../components/Navbar';
import '../styles/globals.css';
import 'font-awesome/css/font-awesome.min.css';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Analytics />
  </>
}

export default MyApp
