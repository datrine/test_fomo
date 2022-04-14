import 'w3-css'

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, ...pageProps }) {
  console.log("hjghh")
    return <>
      <Component {...pageProps} />
    </>
}

export default MyApp;