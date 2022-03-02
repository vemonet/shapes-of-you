import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body style={{display: "flex", flexDirection: "column", minHeight: '100vh',
            backgroundColor: '#f5f6f7', // ligther grey
            // backgroundColor: '#eceff1', // darker grey
        }}>
          <NavBar />
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    )
  }
}
