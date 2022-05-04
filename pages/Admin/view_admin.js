import Head from 'next/head'
import ReactDOM from 'react-dom';
// import Layout from '../components/layout'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Form, Input, Button, Radio } from 'antd';
import EditExamPhoto from '../../photos/utensils-pencil-svgrepo-com.svg'
import AddExamPhoto from '../../photos/file-document-svgrepo-com.svg'
import conyPhoto from '../../photos/cony.png'
import Image from 'next/image'
import Layout from '../../components/layout';
import Link from 'next/link'

const URL = `http://178.128.90.50:4444/quizs`




export default function ViewAdmin() {
    return (
        <Layout>
            <Head>
                <title>NFT game tutorials</title>
            </Head>
            <div className='md:flex flex-col fixed justify-start items-center h-screen w-screen'>
                <div className='flex flex-row justify-center w-full items-center'>
                    <div className='flex flex-col justify-center items-center text-4xl w-1/4 h-1/2 mr-4 p-4 font-bold uppercase tracking-wider shadow-xl bg-sunglow rounded-lg pointer-events-none'>
                        <a className='flex justify-center text-2xl font-bold text-black animate-pulse'>Admin Management</a>
                    </div>
                    <div className='-ml-16'>
                        <Image src={conyPhoto} width="200%" height="200%" className='' />
                    </div>
                </div>

                <div className='flex flex-row justify-center items-center w-full h-1/2 gap-32 mt-4 mr-20'>
                    <Link href='/Admin/exam_admin'>
                        <a className='flex flex-col w-52 h-56 bg-red3 shadow-2xl rounded-xl transition duration-700 
            ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                            <div className='flex justify-center items-center -mt-12 w-full'>
                                <div className='flex justify-center items-center rounded-full h-24 w-24 bg-white shadow-lg'>
                                    <Image src={AddExamPhoto} width="70%" height="70%" />
                                </div>
                            </div>
                            <div className='text-xl font-bold text-center pt-14 text-gray-700 tracking-wider leading-relaxed'>
                                ADD EXAMS
                            </div>
                        </a>
                    </Link>

                    <Link href='/Admin/all_exam'>
                        <a className='flex flex-col w-52 h-56 bg-whiteblue shadow-2xl rounded-xl transition duration-700 
            ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                            <div className='flex justify-center items-center -mt-12 w-full'>
                                <div className='flex justify-center items-center rounded-full h-24 w-24 bg-white shadow-lg'>
                                    <Image src={EditExamPhoto} width="58%" height="58%" />
                                </div>
                            </div>
                            <div className='text-xl font-bold text-center pt-14 text-gray-700 tracking-wider leading-relaxed'>
                                EDIT EXAMS
                            </div>
                        </a>
                    </Link>
                </div>


            </div>



        </Layout>

    )
}