import Router from 'next/router' 
import nProgress from 'nprogress';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "nprogress/nprogress.css";
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  nProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', (url)=>{
    nProgress.start()
  })
  Router.events.on('routeChangeComplete', (url)=>{
    nProgress.done()
  })
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
