import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import solidityPhoto from '../photos/Solidity_logo.svg'
import conyPhoto from '../photos/cony.png'

export default function StartTest({ token }) {

    return (
        <Layout>
            <Head>
                <title>NFT game tutorials</title>
            </Head>

            <div className='md:flex flex-row fixed justify-center items-center h-screen w-screen'>
                <div className='flex flex-col w-72 h-1/2 bg-redcony shadow-2xl rounded-xl'> 
                    <div className='flex justify-center items-center -mt-12 w-full'>
                        <div className='flex justify-center items-center rounded-full h-24 w-24 bg-white shadow-lg'>
                            <Image src={solidityPhoto} width="70%" height="70%" className=''/>
                        </div>
                    </div>    
                    <div className='text-xl mt-7 font-bold text-center pt-4 tracking-wider leading-relaxed'>
                        พร้อมที่จะรับ Items ใหม่ ๆ แล้วหรือยัง ?
                    </div>
                    <div className='text-xl font-bold text-center pt-4 tracking-wider leading-relaxed'>
                        ถ้าพร้อมแล้วเราไปทำแบบทดสอบกันเลย ..
                    </div>
                    <div className='flex w-full justify-center items-center mt-14'>
                        <Link href='test'>
                            <a className='flex justify-center items-center w-36 h-14 bg-sunglow 
                            text-2xl text-center font-semibold border-4 border-yellow-500 rounded-lg
                            hover:bg-redcony focus:outline-none'>Start</a>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='flex mt-28'>
                        <Image src={conyPhoto} width="300%" height="300%" className=''/>
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
