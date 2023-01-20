// import '../styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import '../styles/globals.css'

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default App;