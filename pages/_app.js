import React from 'react'
import Head from 'next/head';
import '../styles/globals.css'
import Navbar from '../components/containers/nav'
import Layout from  './../components/containers/layout'
import Footer from './../components/containers/footer'
import {useRouter} from 'next/router'
import {ToastProvider} from 'react-toast-notifications'
import {FormContextProvider} from './../context/FormContext'
import {ProductContextProvider} from './../context/ProductContext'
import {FavoriteContextProvider} from './../context/FavoriteContext'
import {SearchContextProvider} from './../context/SearchContext'
import CssBaseline from "@material-ui/core/CssBaseline";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <SearchContextProvider>
    <ProductContextProvider>
      <FavoriteContextProvider>
      <ToastProvider>

        <div>
        <CssBaseline />
          <Head>
            <title>Next Store</title>
            <link rel="icon" href="/logo2.jpg"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            crossorigin="anonymous">
            </script>
            <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Neuton:wght@700&family=Rationale&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Rationale&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Ranga:wght@700&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet"/>
          </Head>

            {
              router.pathname===`/` ||router.pathname===`/login`? (<span/>):<Navbar/>
            }
          <FormContextProvider>
            <Layout>          
              <Component {...pageProps}/>
              {
              router.pathname===`/`||router.pathname===`/login`||router.pathname===`/shops`||router.pathname===`/Favorite`? (<span/>):<Footer/>
            }
    
    
            
      
            </Layout>
          </FormContextProvider>
          
        </div> 
        </ToastProvider>
      </FavoriteContextProvider>
    </ProductContextProvider>
    </SearchContextProvider>
  )
  
}
export default MyApp;


