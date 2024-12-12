import '../styles/globals.css';  // Import global CSS
import Head from 'next/head';     // Optional: for managing meta tags

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SKP News</title> {/* Optionally add title or other meta tags */}
      </Head>
      <Component {...pageProps} /> {/* Render the page component */}
    </>
  );
}

export default MyApp;
