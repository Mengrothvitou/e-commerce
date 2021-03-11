export default MyApp
import Header from '../components/containers/header';
import '../styles/globals.css'
import Navbar from '../components/containers/nav'
import Layout from  './../components/containers/layout'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Layout>          
        <Component {...pageProps}/>
      </Layout>
      
      
    </div> 
  )
  
}


