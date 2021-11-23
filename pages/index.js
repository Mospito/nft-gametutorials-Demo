import Head from 'next/head' 
import Layout from '../components/layout' 
import Link from 'next/link'



export default function Home({ token }) {
 
  return (
    <Layout>
    <Head>
      
        <title>NFT game tutorials</title>
    </Head>
         
      <div className = 'flex flex-col fixed justify-center items-center h-screen w-screen'>
        <div className = 'flex flex-col -mt-28 font-bold tracking-widest uppercase text-5xl text-center p-8'>
          <a className = 'animate-pulse'>NFT game tutorials</a>
          <a className = 'animate-pulse mt-8'>Play & Learning</a>   
        </div>
          <div className = 'flex justify-around md:w-96 text-lg mt-8'>
            <Link href = '/connectwallet'>
              <button className = 'w-36 h-14 font-semibold border-blue-600 rounded-lg bg-babyblue hover:bg-whiteblue shadow-lg'>Connect Wallet</button>
            </Link>
            {/* <Link href = '/register'>
              <button className = 'w-36 h-14 font-semibold border-blue-600 rounded-lg bg-babyblue hover:bg-whiteblue shadow-lg'>Register</button> 
            </Link> */}
          </div>  
      </div>
     
     
    </Layout>
  )
}