
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevent Font Awesome from loading its own CSS
import Header from "../components/header"
import NavBar from "../components/Nav-bar/index"
import Footer from '../components/footer'
import "../style/style.css";



function MyApp({ Component, pageProps }) {
  return (
  <>
        <Header />
        <NavBar />
        <Component {...pageProps} />
        <Footer />


        
  
  </>
  )
}

// Only export with wrapper if using Redux
// export default wrapper.withRedux(MyApp)
export default MyApp

