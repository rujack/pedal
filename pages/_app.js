import Router from "next/router";
import nProgress from "nprogress";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "nprogress/nprogress.css";
import Layout from "../components/Layout";
// import { useEffect } from "react";

function MyApp({ Component, pageProps,router }) {

//   useEffect(()=>{
//     Router.push('/maintenance')
//   },[])

  nProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
  });

  if (router.pathname.startsWith("/maintenance")) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
