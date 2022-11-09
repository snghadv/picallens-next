import Navbar from '../components/Navbar';
import '../styles/globals.css';
import 'font-awesome/css/font-awesome.min.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
