import Layout from '../components/layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    <ToastContainer />
  </div>
}

export default MyApp
