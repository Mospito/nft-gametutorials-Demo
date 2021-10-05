import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import conyPhoto from '../photos/cony.png'
import swordPhoto from '../photos/sword.png'

export default function Subject({ token }) {

    return (
        <Layout>
            <Head>
                <title>NFT game tutorials</title>
            </Head>
            <div className='flex flex-col justify-center w-full h-full items-center'>
                <div className='flex flex-row justify-center w-full items-center'>
                    <div className='flex flex-col justify-start items-center text-4xl w-1/3 p-4 mr-6 font-bold  tracking-wider shadow-xl bg-redcony rounded-lg'>
                        <a classname='uppercase'>NFT game tutorials</a>
                        <a className='flex justify-center mt-4 text-2xl font-bold animate-pulse'>" Items ของคุณ "</a>
                    </div>
                    <div className='-ml-20'>
                        <Image src={conyPhoto} width="200%" height="200%" className='' />
                    </div>
                </div>
                <div className='flex justify-start items-start overflow-y-auto w-3/4 h-96'>
                <table className='table-fixed border-collapse border-4 border-red-400 w-full h-full m-10'>
                    <thead>
                        <tr className='text-xl h-20 font-semibold bg-white'>
                            <th className='w-1/3 border-4 border-red-400'>Items</th>
                            <th className='w-1/3 border-4 border-red-400'>ชื่อ</th>
                            <th className='w-1/4 border-4 border-red-400'>คุณสมบัติ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center text-lg font-medium bg-white'>
                            <td className='border-4 border-red-400'>
                                <Image src={swordPhoto} width="200%" height="200%" className='' />
                            </td>
                            <td className='border-4 border-red-400'>Sword</td>
                            <td className='border-4 border-red-400 text-left pl-12'>
                                <li>ATK +10</li>
                                <li>Rank : common</li>
                                <li>Effect : none</li>
                                <li>ID : 584xxxxx</li>
                            </td>
                        </tr>
                        {/* <tr className='text-center text-lg font-medium h-40  bg-white'>
                            <td className='border-4 border-red-400'></td>
                            <td className='border-4 border-red-400'></td>
                            <td className='border-4 border-red-400'></td>
                        </tr>
                        <tr className='text-center text-lg font-medium h-40  bg-white'>
                            <td className='border-4 border-red-400'></td>
                            <td className='border-4 border-red-400'></td>
                            <td className='border-4 border-red-400'></td>
                        </tr>
                        <tr className='text-center text-lg font-medium h-40  bg-white'>
                            <td className='border-4 border-red-400'></td>
                            <td className='border-4 border-red-400'></td>
                            <td className='border-4 border-red-400'></td>
                        </tr>
                        <tr className='text-center text-lg font-medium h-40  bg-white'>
                            <td className='border-4 border-red-400'></td>
                            <td className='border-4 border-red-400'></td>
                            <td className='border-4 border-red-400'></td>
                        </tr> */}
                    </tbody>
                </table>
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
