import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import solidityPhoto from '../photos/Solidity_logo.svg'
import conyPhoto from '../photos/cony.png'

export default function TestSubject({ token }) {

    return (
        <Layout>
            <Head>
                <title>NFT game tutorials</title>
            </Head>
            <div className='flex flex-row justify-center w-full items-center'>
                <div className='flex flex-col justify-start items-center text-4xl w-2/5 p-4 mr-6 font-bold uppercase tracking-wider shadow-xl bg-sunglow rounded-lg'>
                    <a>NFT game tutorials</a>
                    <a className='flex justify-center mt-4 text-2xl font-bold  animate-pulse'>เลือกวิชาที่จะทำแบบทดสอบได้เลยครับ</a>
                </div>
                <div className='-ml-20'>
                    <Image src={conyPhoto} width="200%" height="200%" className=''/>
                </div>
            </div>
            <div className='md:flex flex-row fixed justify-start items-start pl-20 pt-20  h-screen w-screen'>
                <Link href='/testlesson'>
                    <a className='flex flex-col w-56 h-28 bg-redcony shadow-2xl rounded-xl transition duration-700 
            ease-in-out transform hover:-translate-y-1 hover:scale-110'> 
                        <div className='flex justify-center items-center -mt-12 w-full'>
                            <div className='flex justify-center items-center rounded-full h-24 w-24 bg-white shadow-lg'>
                                <Image src={solidityPhoto} width="70%" height="70%" className=''/>
                            </div>
                        </div>    
                        <div className='text-xl font-bold text-center pt-4 tracking-wider leading-relaxed'>
                            Solidity 101
                        </div>
                    </a>
                </Link>
            </div>

        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    // console.log("token from cookie: ",cookie.get("token"))
    // console.log('req: ', req.headers)
    return { props: { token: req.cookies.token || "" } };
}
