/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import solidityPhoto from '../photos/Solidity_logo.svg'
import conyPhoto from '../photos/cony.png'
import lockPhoto from '../photos/lock.png'

export default function Lesson({ token }) {

    return (
        <Layout>
            <Head>
                <title>NFT game tutorials</title>
            </Head>
            <div className='flex flex-col fixed justify-start items-center h-screen w-screen'>
                <div className='flex flex-row justify-center w-full items-center '>
                    <div className='flex flex-col justify-start items-center text-4xl w-2/5 p-4 mr-6 font-bold uppercase tracking-wider shadow-xl bg-sunglow rounded-lg'>
                        <a>NFT game tutorials</a>
                        <a className='flex justify-center mt-4 text-2xl font-bold  animate-pulse'>" เลือกบทเรียนที่สนใจได้เลยครับ "</a>
                    </div>
                    <div className='-ml-20'>
                        <Image src={conyPhoto} width="200%" height="200%" className='' />
                    </div>
                </div>

                <div className='md:flex flex-row justify-start items-start w-3/4 '>
                    <a className='flex flex-row justify-center items-center w-56 h-16 bg-sunglow shadow-xl rounded-xl'>
                        <div className='flex -ml-3'>
                            <Image src={solidityPhoto} width="50%" height="50%" className='' />
                        </div>
                        <div className='flex ml-2 text-xl font-bold text-center tracking-wider leading-relaxed'>
                            Solidity 101
                        </div>
                    </a>
                </div>

                <div className='md:grid gap-4 grid-cols-3 justify-items-center mt-8 w-3/5 p-4'>
                    <Link href='/Learns/learn1'>
                        <a className='flex flex-row justify-center items-center w-56 h-16 bg-white border-4 border-blue-900 shadow-xl rounded-xl 
                            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                            <div className='flex text-xl font-bold text-center tracking-wider text-blue-900'>บทที่ 1</div>
                        </a>
                    </Link>

                    <Link href='/Learns/learn2'>
                        <a className='flex flex-row justify-center items-center w-56 h-16 bg-white border-4 border-blue-900 shadow-xl rounded-xl 
                            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                            <div className='flex ml-3 text-xl font-bold text-center tracking-wider text-blue-900'>บทที่ 2</div>
                        </a>
                    </Link>

                    <Link href='/Learns/learn3'>
                        <a className='flex flex-row justify-center items-center w-56 h-16 bg-white border-4 border-blue-900 shadow-xl rounded-xl 
                            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                            <div className='flex ml-3 text-xl font-bold text-center tracking-wider text-blue-900'>บทที่ 3</div>
                        </a>
                    </Link>

                    <Link href='/Learns/learn4'>
                        <a className='flex flex-row justify-center items-center w-56 h-16 bg-white border-4 border-blue-900 shadow-xl rounded-xl 
                            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                            <div className='flex ml-3 text-xl font-bold text-center tracking-wider text-blue-900'>บทที่ 4</div>
                        </a>
                    </Link>

                    <Link href='/Learns/learn5'>
                        <a className='flex flex-row justify-center items-center w-56 h-16 bg-white border-4 border-blue-900 shadow-xl rounded-xl 
                            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                            <div className='flex ml-3 text-xl font-bold text-center tracking-wider text-blue-900 '>บทที่ 5</div>
                        </a>
                    </Link>

                    <Link href='/Learns/learn6'>
                        <a className='flex flex-row justify-center items-center w-56 h-16 bg-white border-4 border-blue-900 shadow-xl rounded-xl 
                            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                            <div className='flex ml-3 text-xl font-bold text-center tracking-wider text-blue-900'>บทที่ 6</div>
                        </a>
                    </Link>


                    <Link href='/Learns/learn7'>
                        <a className='flex flex-row justify-center items-center w-56 h-16 bg-white border-4 border-blue-900 shadow-xl rounded-xl 
                            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                            <div className='flex ml-3 text-xl font-bold text-center tracking-wider text-blue-900'>บทที่ 7</div>
                        </a>
                    </Link>

                    <Link href='/Learns/learn8'>
                        <a className='flex flex-row justify-center items-center w-56 h-16 bg-white border-4 border-blue-900 shadow-xl rounded-xl 
                            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                            <div className='flex ml-3 text-xl font-bold text-center tracking-wider text-blue-900'>บทที่ 8</div>
                        </a>
                    </Link>

                    <Link href='/Learns/learn9'>
                        <a className='flex flex-row justify-center items-center w-56 h-16 bg-white border-4 border-blue-900 shadow-xl rounded-xl 
                            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                            <div className='flex ml-3 text-xl font-bold text-center tracking-wider text-blue-900 '>บทที่ 9</div>
                        </a>
                    </Link>
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
