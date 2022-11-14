import '../styles/globals.css';
import { LayOut, SlideBar } from './components';

function MyApp({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  );
}

export default MyApp;
