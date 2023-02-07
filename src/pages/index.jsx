import Head from 'next/head'
import Navbar from '../components/navbar'
import HomePage from '../components/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Brasil | Volvo Cars - Brasil</title>
      </Head>
      
      <main>
        <Navbar/>
        <HomePage/>
      </main>
    </>
  )
}
