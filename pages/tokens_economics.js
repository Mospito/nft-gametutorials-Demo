import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import conyPhoto from '../photos/cony.png'
import Image from 'next/image'


export default function Learn({ token }) {

    return (
        <Layout>
            <Head>
                <title>NFT game tutorials</title>
            </Head>

            {/* <div className='md:flex flex-col fixed -mt-10 justify-center items-center h-screen w-screen'>
                <div className='flex flex-col w-4/5 h-3/4 p-4 border-4 border-yellow-700 bg-sunglow rounded-3xl shadow-xl overflow-auto touch-pan-x'> */}
            {/* <div className='flex flex-col'>
                        <h1 className='text-xl'>ประเมินมูลค่าเหรียญด้วย  ARK Investment </h1>
                        <h1>แบ่งเป็น 3 Layers</h1>
                        <div class="pyramid">
                            <div class="pyramid__section">
                                <text>ประเมินมูลค่าทรัพย์สิน</text>
                            </div>
                            <div class="pyramid__section">
                                <text>พฤกติกรรมการซื้อขาย</text>
                            </div>
                            <div class="pyramid__section">
                                <text className=''>พื้นฐานของเหรียญ</text>
                            </div>
                        </div>
                    </div>



                    <div>
                        <text>
                            Layers 1 พื้นฐานของเหรียญ
                        </text>
                        <br></br>
                        <text>
                            ระบบเหรียญ: Semi-Oracle
                        </text>
                        <br></br>
                        <text>Fishing Town มี 2 เหรียญ คือ $FHTN(เหรียญหลัก) $GIL(เหรียญในระบบเศรษฐกิจของเกม) BEP-20 BSC chain</text>
                        <br></br>
                        <text>$FHTN </text>
                        <li>มีเหรียญทั้งหมด 100,000,000 เหรียญ ใช้ในการทำ Transaction ต่าง ๆ ภายในเกมเช่น การสร้างเบ็ด , การนำไป Stacking , ใช้ซื้อเบ็ดตกปลา</li>
                        <text>$GIL </text>
                        <li>การได้รับ ได้มาจากการตกปลา (EARN)
                            การใช้งานเหรียญ คราฟเบ็ด, อัพเกรดเบ็ด, ซื้ออาหารภายในเกม
                        </li>
                        <text>Audited</text>
                        <li>CERTIK</li>
                        <li>INSPEX</li>
                        <li>PECKSHIELD</li>
                        <text>สมาชิกในชุมชน(อ้างอิงข้อมูลใน Discord 24/01/2022)</text>
                        <li>21748 คน</li>
                    </div>

                    <div>
                        <text>
                            Layers 2 พฤกติกรรมการซื้อขาย
                        </text>
                        <text>
                            เหรียญ $GIL
                        </text>
                        <li>ราคาสูงสุด 0.95 บาท / GIL ประมาณการซื้อขายสูงสุด 17.32 ล้าน</li>
                        <li>ปัจจุบัน ณ 23/01/2022 ราคา 0.41 บาท / GIL ประมาณการซื้อขายสูงสุด 1.62 ล้าน</li>
                        <li>ลดลงมากกว่า 50%</li>
                    </div> */}
            {/* <div className='flex justify-end items-end'>
                        <Link href='/'>
                            <a className='flex justify-center items-center w-36 h-14 bg-redcony
                                text-2xl text-center font-semibold border-4 border-red-400 rounded-lg
                                hover:bg-sunglow focus:outline-none'>Next</a>
                        </Link>
                    </div> */}



            <div className='md:flex flex-col fixed -mt-4 justify-center items-center h-screen w-screen'>
                <div className='flex flex-row justify-center w-full items-center'>
                    <div className='flex flex-col justify-center items-center text-4xl w-1/4 h-1/2 mr-4 p-4 font-bold uppercase tracking-wider shadow-xl bg-sunglow rounded-lg'>
                        <a className='flex justify-center text-2xl font-bold animate-pulse'>Tokens Economics</a>
                    </div>
                    <div className='-ml-16'>
                        <Image src={conyPhoto} width="200%" height="200%" className='' />
                    </div>
                </div>
                <div className='flex flex-col w-11/12 h-3/4 pl-8 pr-8 overflow-auto -mt-1'>
                    <table className="border-separate border-4 border-yellow-600 bg-sunglow2 rounded-xl">
                        <thead>
                            <tr>
                                <th className="border-2 border-yellow-500 text-sm font-semibold rounded-tl-lg">Name</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Angel sale</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Seed sale</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Reserves</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">DEX Liquidity</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Advisor</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Team</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Company</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Ecosystem Fund</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Private Sale</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">IDO</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Marketing</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Platform Development</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Airdrop</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Listing Pancakesqp</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Play to Earn</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Public Sale</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold">Staking Reward</th>
                                <th className="border-2 border-yellow-500 text-sm font-semibold rounded-tr-lg">Total Supply</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">Bomb Crypto</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">12%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">5%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">3%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">25%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">6%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">6%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">2%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">1%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">20%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">20%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center"></td>

                            </tr>

                            <tr>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">Axie Infinity(AXS)</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">7%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">21%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">8%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">4%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">20%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">11%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">29%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">270M</td>
                            </tr>
                            <tr>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">Thetan Arena</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">9%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">5%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">5%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">21%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">10%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">19%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">10%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">21%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">420M</td>
                            </tr>

                            <tr>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">CCAR</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">4$</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">10%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">12%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">4%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">6%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">8%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">1%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">47%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">8%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">100M</td>
                            </tr>

                            <tr>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">Moo monster</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">3%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">5.25%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">8%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">15%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">24.50%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">9.25%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">12.50%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">19.00%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">3.50%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">170M</td>
                            </tr>

                            <tr>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">Morning Moon</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">15%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">15%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">10%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">10%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">50%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">200M</td>
                            </tr>

                            <tr>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">Fishing town</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">9%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">6%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">6%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">6%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">15%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">7%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">8%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">9%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">20%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">14%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">100M</td>
                            </tr>

                            <tr>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">Dice Kingdom</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">12%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">5%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">17%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">20%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">6%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">40%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">100M</td>
                            </tr>

                            <tr>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center rounded-bl-lg">Sandbox</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">17.18%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">10%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">19%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">25.82%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">4%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">12%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">12%</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center">0</td>
                                <td className="border-2 border-yellow-500 text-sm font-medium text-center rounded-br-lg">3000M</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>




            {/* </div>

            </div> */}


        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    // console.log("token from cookie: ",cookie.get("token"))
    // console.log('req: ', req.headers)
    return { props: { token: req.cookies.token || "" } };
}
