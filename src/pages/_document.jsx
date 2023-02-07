import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                <link rel="icon" href="https://play-lh.googleusercontent.com/CEwL-9facH9XHDxPN-b7Y5R3FNRKy_prfnElYthfAiIt2mTRH_kokusCd2cF7hNGDBM" />
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}