import Link from 'next/link'
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>NextJS App123</title>
        <meta></meta>
      </Head>
      <h1>Hello next.js</h1>
      <div>
        <Link href={'/posts'}>Posts</Link>
      </div>
    </>
  )
}

export default Index
