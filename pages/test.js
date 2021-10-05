import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Test({ token }) {

    return (
        <Layout>
            <Head>
                <title>NFT game tutorials</title>
            </Head>

            <div className='md:flex flex-col fixed -mt-10 justify-center items-center h-screen w-screen'>
                <div className='flex flex-col w-4/5 h-3/4 p-4 resize-y border-4 border-red-400 bg-redcony rounded-3xl shadow-xl'>
                    <div className='flex w-full h-full'>
                        ทดสอบ Solidity
                    </div>
                    <div className='flex justify-end items-end'>
                            <a className='flex justify-center items-center w-36 h-14 bg-sunglow
                                text-2xl text-center font-semibold border-4 border-yellow-500 rounded-lg
                                hover:bg-redcony focus:outline-none'>Next</a>
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
