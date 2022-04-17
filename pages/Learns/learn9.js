import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Learn({ token }) {

    return (
        <Layout>
            <Head>
                <title>NFT game tutorials</title>
            </Head>

            <div className='md:flex flex-row fixed -mt-10 justify-center items-center h-screen w-screen'>
                <div className='flex flex-row w-4/5 h-3/4 p-4 border-4 border-yellow-700 bg-sunglow rounded-3xl shadow-xl'>
                    <div className='flex flex-row w-full h-full'>
                    <iframe width="1020" height="520" src="https://www.youtube.com/embed/XwsPexj0Lcg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                        {/* <h1 className='text-2xl text-center font-semibold '>ความเป็นมาของ Solidity</h1> <br />
                        <h2>solidity เป็นภาษาสำหรับการสร้าง Smart Contract
                            เป็นภาษาที่ได้รับอิทธิพลมาจาก C ++, Python
                            และ JavaScript ที่สำคัญเลยก็คือเป็นภาษาชนิดที่
                            statically typed และเป็นภาษาแบบ Object Oriented (OO)
                            เพราะว่ามีคุณสมบัติของการสืบทอดและการทำ struct เป็นต้น
                        </h2> <br />
                        <h1 className='text-xl font-semibold'>ชนิดของตัวแปร (Value Types)</h1> <br/>
                        <li>Booleans : bool (true and false)</li>
                        <li>Integers : int/uint อันนี้เราสามารถกำหนดขนาดที่เราจะใช้ได้โดยมีขนาดตั้งแต่ 
                            8-256 bits เช่น int8 และ uint16 และถ้าหากเราไม่ได้ได้ระบุขนาดของ bits 
                            ก็จะมีขนาด 256 โดยอัตโนมัติ เช่น int หรือ uint นั้นหมายความว่ามีค่าเท่ากับ int256 
                            หรือ uint256
                        </li>
                        <li>
                            Bytes : bytes มีขนาดตั้งแต่ 1–32 bytes เช่น bytes8 หรือ bytes32แต่ถ้าเราไม่กำหนดขนาดก็จะเป็น array dynamic size
                        </li>
                        <li>
                            Strings : string อันนี้ไม่มีให้กำหนดขนาดของ bytes หมายความว่าจะมองเป็น array dynamic size ซึ่งมีความแตกต่างจากการใช้ 
                            bytes ที่มีการกำหนดขนาดตรงที่จำนวนของ gas ที่ใช้ strings จะใช้ gas มากว่านิดหน่อย
                        </li>
                        <li>
                            Address : address มีค่าอยู่ที่ 20 byte ตามขนาดของ Ethereum address
                        </li> */}
                    </div>
                    <div className='flex justify-end items-end'>
                        <Link href='/../starttest'>
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
