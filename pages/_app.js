import 'w3-css'
//import './custom.scss';
//import "../comps/temp/src/pages/documentation/charts/chart-columns/custom.scss"

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, ...pageProps }) {
    return <>
      <Component {...pageProps} />
    </>
}

export default MyApp;