import { useEffect, useState } from 'react'
import '../styles/globals.css'
import isMobile from 'ismobilejs';

export default function App({ Component, pageProps }) {

  const [mobileCheck, setMobileCheck] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMobileCheck(isMobile(window.navigator).any)
    }
  }, [])

  return <Component mobileCheck={mobileCheck} {...pageProps} />
}
