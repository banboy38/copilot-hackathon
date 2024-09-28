import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(true)

  return(
    <div className={isDark?`dark`:``}>
      <Component setIsDark={setIsDark} isDark={isDark} {...pageProps} />
    </div>
  )
}
