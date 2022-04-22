import 'w3-css'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function MyApp({ Component, ...pageProps }) {
  console.log("hjghh")
    return <>
      <Component {...pageProps} />
    </>
}

export default MyApp;