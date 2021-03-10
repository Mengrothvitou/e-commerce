export default MyApp
import Header from '../components/containers/header'
import '../styles/globals.css'
import Nav from '../components/containers/nav'
import Footer from '../components/containers/footer'
import Layout from  './../components/containers/layout'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Nav/>
      <Layout>          <Component {...pageProps}/>
      </Layout>
      
      
     </> 
  )
  
}


