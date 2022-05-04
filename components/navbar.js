import { Select } from 'antd'
import Link from 'next/link'

const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}

const Navbar = () => (
    <nav className='grid grid-cols-3 gap-4 items-center bg-gradient-to-r from-green-500 to-blue-400 p-4 shadow-xl'>
        <Link href='/'>
            <div className='md:flex'>
                <a className='flex flex-col items-center divide-y-2 divide-white'>
                    <span className='text-xl text-white font-bold uppercase tracking-wide pb-1 text-center'>
                        NFT game tutorials
                    </span>
                    <span className='text-sm text-white font-bold uppercase tracking-wide text-center pt-2'>
                        Prince of Songkla University Phuket Campus
                    </span>
                </a>
            </div>
        </Link>

        <div className='flex justify-center items-center w-full lg:inline-flex lg:flex-grow lg:w-auto'>
            <div className='lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-center flex flex-col justify-center lg:h-auto border-red-200'>
                <Link href='/'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 mr-2 rounded text-white font-bold items-center justify-center hover:bg-blue hover:text-white'>
                        Home
                    </a>
                </Link>
                <Link href='/subject'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 mr-2 rounded text-white font-bold items-center justify-center hover:bg-blue hover:text-white'>
                        Subject
                    </a>
                </Link>
                <Link href='/testsubject'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 mr-2 rounded text-white font-bold items-center justify-center hover:bg-blue hover:text-white'>
                        Exam
                    </a>
                </Link>
                <Link href='/items'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 mr-2 rounded text-white font-bold items-center justify-center hover:bg-blue hover:text-white'>
                        Items
                    </a>
                </Link>
                <Link href='/gameplay'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 mr-2 text-center rounded text-white font-bold items-center justify-center hover:bg-blue hover:text-white'>
                        Game Play
                    </a>
                </Link>

                <Link href='/tokens_economics'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 mr-2 text-center rounded text-white font-bold items-center justify-center hover:bg-blue hover:text-white'>
                        Tokens Economics
                    </a>
                </Link>

                <Link href='https://dune.com/embeds/655538/1217964/5fff586c-ce60-4224-b659-41ab4818dcff'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 mr-2 text-center rounded text-white font-bold items-center justify-center hover:bg-blue hover:text-white'>
                        FindNFT
                    </a>
                </Link>


                {/* <Link href='/#'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2  rounded text-white font-bold items-center justify-center hover:bg-blue hover:text-white'>
                        LOG OUT
                    </a>
                </Link> */}
            </div>
        </div>


        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto cursor-pointer'>
                <Link href='/Admin/login_admin'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 mr-8 rounded text-white font-bold items-center justify-center hover:bg-blue hover:text-white'>
                        Admin
                    </a>
                </Link>
            </div>
        </div>


    </nav>
)

export default Navbar