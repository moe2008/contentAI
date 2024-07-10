import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "@/context/AuthContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Your App Description Here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
