import Head from 'next/head';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import 'styles/globals.css';
import 'styles/layout.css';

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Doyu</title>
        <meta name='description' content='description in Head Component'></meta>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
