import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Learn({ token }) {

    return (
        <Layout>
            <Head>
                <title>NFT game tutorials</title>
            </Head>

            <div className='md:flex flex-row fixed -mt-10 justify-center items-center h-screen w-screen'>
                <div className='flex flex-row w-4/5 h-3/4 p-4 border-4 border-yellow-700 bg-sunglow rounded-3xl shadow-xl'>
                    <div className='flex flex-row w-full h-full'>

                    <iframe  width="1020" height="520" src="https://www.youtube.com/embed/vPswMNKxaLM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                    <div className='flex justify-end items-end'>
                        <Link href='/'>
                            <a className='flex justify-center items-center w-36 h-14 bg-redcony
                                text-2xl text-center font-semibold border-4 border-red-400 rounded-lg
                                hover:bg-sunglow focus:outline-none'>Next</a>
                        </Link>
                    </div>
                    
                </div>

            </div>


        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    // console.log("token from cookie: ",cookie.get("token"))
    // console.log('req: ', req.headers)
    return { props: { token: req.cookies.token || "" } };
}
