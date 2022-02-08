import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'



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



            <div className='md:flex flex-col fixed -mt-10 justify-center items-center h-screen w-screen'>
                <div className='flex flex-col w-4/5 h-3/4 p-4 border-4 border-yellow-700 bg-sunglow rounded-3xl shadow-xl overflow-auto touch-pan-x'>
                    <h1 className='text-xl font-bold'>
                        Tokens Economics
                    </h1>
                    <table class="border-separate border border-slate-400 hover:border-collapse">
                        <thead>
                            <tr>
                                <th class="border border-slate-300 ...">Name</th>
                                <th class="border border-slate-300 ...">Angel sale</th>
                                <th class="border border-slate-300 ...">Seed sale</th>
                                <th class="border border-slate-300 ...">Reserves</th>
                                <th class="border border-slate-300 ...">DEX Liquidity</th>
                                <th class="border border-slate-300 ...">Advisor</th>
                                <th class="border border-slate-300 ...">Team</th>
                                <th class="border border-slate-300 ...">Company</th>
                                <th class="border border-slate-300 ...">Ecosystem Fund</th>
                                <th class="border border-slate-300 ...">Private Sale</th>
                                <th class="border border-slate-300 ...">IDO</th>
                                <th class="border border-slate-300 ...">Marketing</th>
                                <th class="border border-slate-300 ...">Platform Development</th>
                                <th class="border border-slate-300 ...">Airdrop</th>
                                <th class="border border-slate-300 ...">Listing Pancakesqp</th>
                                <th class="border border-slate-300 ...">Play to Earn</th>
                                <th class="border border-slate-300 ...">Public Sale</th>
                                <th class="border border-slate-300 ...">Staking Reward</th>
                                <th class="border border-slate-300 ...">Total Supply</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-slate-300 ...">Bomb Crypto</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">12%</td>
                                <td class="border border-slate-300 ...">5%</td>
                                <td class="border border-slate-300 ...">3%</td>
                                <td class="border border-slate-300 ...">25%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">6%</td>
                                <td class="border border-slate-300 ...">6%</td>
                                <td class="border border-slate-300 ...">2%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">1%</td>
                                <td class="border border-slate-300 ...">20%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">20%</td>
                                <td class="border border-slate-300 ..."></td>

                            </tr>

                            <tr>
                                <td class="border border-slate-300 ...">Axie Infinity(AXS)</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">7%</td>
                                <td class="border border-slate-300 ...">21%</td>
                                <td class="border border-slate-300 ...">0%</td>
                                <td class="border border-slate-300 ...">8%</td>
                                <td class="border border-slate-300 ...">4%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">20%</td>
                                <td class="border border-slate-300 ...">11%</td>
                                <td class="border border-slate-300 ...">29%</td>
                                <td class="border border-slate-300 ...">270M</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 ...">Thetan Arena</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">9%</td>
                                <td class="border border-slate-300 ...">5%</td>
                                <td class="border border-slate-300 ...">5%</td>
                                <td class="border border-slate-300 ...">21%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">10%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">19%</td>
                                <td class="border border-slate-300 ...">10%</td>
                                <td class="border border-slate-300 ...">21%</td>
                                <td class="border border-slate-300 ...">420M</td>
                            </tr>

                            <tr>
                                <td class="border border-slate-300 ...">CCAR</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">4$</td>
                                <td class="border border-slate-300 ...">10%</td>
                                <td class="border border-slate-300 ...">12%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">4%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">6%</td>
                                <td class="border border-slate-300 ...">8%</td>
                                <td class="border border-slate-300 ...">1%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">47%</td>
                                <td class="border border-slate-300 ...">8%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">100M</td>
                            </tr>

                            <tr>
                                <td class="border border-slate-300 ...">Moo monster</td>
                                <td class="border border-slate-300 ...">3%</td>
                                <td class="border border-slate-300 ...">5.25%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">8%</td>
                                <td class="border border-slate-300 ...">15%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">24.50%</td>
                                <td class="border border-slate-300 ...">9.25%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">12.50%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">19.00%</td>
                                <td class="border border-slate-300 ...">3.50%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">170M</td>
                            </tr>

                            <tr>
                                <td class="border border-slate-300 ...">Morning Moon</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">15%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">15%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">10%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">10%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">50%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">200M</td>
                            </tr>

                            <tr>
                                <td class="border border-slate-300 ...">Fishing town</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">9%</td>
                                <td class="border border-slate-300 ...">6%</td>
                                <td class="border border-slate-300 ...">6%</td>
                                <td class="border border-slate-300 ...">6%</td>
                                <td class="border border-slate-300 ...">15%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">7%</td>
                                <td class="border border-slate-300 ...">8%</td>
                                <td class="border border-slate-300 ...">9%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">20%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">14%</td>
                                <td class="border border-slate-300 ...">100M</td>
                            </tr>

                            <tr>
                                <td class="border border-slate-300 ...">Dice Kingdom</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">12%</td>
                                <td class="border border-slate-300 ...">5%</td>
                                <td class="border border-slate-300 ...">17%</td>
                                <td class="border border-slate-300 ...">20%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">6%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">40%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">100M</td>
                            </tr>

                            <tr>
                                <td class="border border-slate-300 ...">Sandbox</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">17.18%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">10%</td>
                                <td class="border border-slate-300 ...">19%</td>
                                <td class="border border-slate-300 ...">25.82%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">4%</td>
                                <td class="border border-slate-300 ...">12%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">12%</td>
                                <td class="border border-slate-300 ...">0</td>
                                <td class="border border-slate-300 ...">3000M</td>
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
