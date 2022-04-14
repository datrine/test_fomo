import 'w3-css'

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, ...pageProps }) {
    return <>
      <Component {...pageProps} />
    </>
}

export default MyApp;