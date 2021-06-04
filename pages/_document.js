import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href='https://daniel-carrete.vercel.app/images/assets/logo.png'></link>
        </Head>
        <body>
          <Main /> 
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument