import "../styles/global.css";

import { OptionsContextProvider } from "../components/state";

function MyApp({ Component, pageProps }) {
  return (
    <OptionsContextProvider>
      <Component {...pageProps} />;
    </OptionsContextProvider>
  );
}

export default MyApp;
