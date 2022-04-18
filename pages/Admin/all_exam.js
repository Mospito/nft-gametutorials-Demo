import Head from 'next/head'

import ReactDOM from 'react-dom';
// import Layout from '../components/layout'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Form, Input, Button, Radio } from 'antd';
import conyPhoto from '../../photos/cony.png'
import Image from 'next/image'

const URL = `http://178.128.90.50:4444/quizs`




export default function AllExam() {




    const [data, setData] = useState([])
    const [question, setQuestion] = useState("")
    const [choice1, setChoice1] = useState("")
    const [choice2, setChoice2] = useState("")
    const [choice3, setChoice3] = useState("")
    const [choice4, setChoice4] = useState("")
    const [ans, setAns] = useState("")


    useEffect(() => {
        get_quiz()
    }, [])

    const get_quiz = async () => {


        let quizTMP = await axios.get(URL)
        setData(quizTMP.data)
        console.log(data);
    }



    const render = () => {

        return (data.map((item, index) => (
            <div className="flex flex-col justify-start items-start w-1/3 h-3/4 p-4 bg-white rounded-lg text-left border-2 border-red-800 shadow-md">
                <div className='flex flex-col w-full h-4/5 text-justify overflow-y-auto'>
                    <div className='flex flex-row font-semibold text-justify w-11/12'>
                        <text>{index + 1}.</text>
                        <text className='pl-1'>{item.question}</text>
                    </div>
                    <div className='flex flex-col text-justify w-11/12 mt-2'>
                        <div>
                            <text className='font-semibold'>A.</text>
                            <text className='pl-1'>{item.choice1}</text>
                        </div>
                        <div>
                            <text className='font-semibold'>B.</text>
                            <text className='pl-1'>{item.choice2}</text>
                        </div>
                        <div>
                            <text className='font-semibold'>C.</text>
                            <text className='pl-1'>{item.choice3}</text>
                        </div>
                        <div>
                            <text className='font-semibold'>D.</text>
                            <text className='pl-1'>{item.choice4}</text>
                        </div>
                    </div>


                    <div className='flex flex-row mt-2 text-justify font-semibold w-11/12'>
                        <text className='text-red-700'>Answer:</text>
                        <text className='pl-1'>{item.ans}</text>
                    </div>
                </div>


                <div className='flex flex-row justify-center items-center gap-8 w-full pt-6 h-1/5'>
                    <button className='flex justify-center items-center border-2 border-green-600 h-9 w-20 rounded-lg bg-babygreen hover:bg-whiteblue font-semibold shadow-lg'>Edit</button>
                    <button className='flex justify-center items-center border-2 border-red-500 h-9 w-20 rounded-lg bg-red2 hover:bg-red3 font-semibold shadow-lg'>Delete</button>
                </div>

            </div>

        )))
    }


    return (
        <div className='flex flex-col fixed justify-start items-center h-screen w-screen mt-32'>
            <div className='flex flex-row justify-center w-full items-center -mt-24'>
                <div className='flex flex-col justify-center items-center text-4xl w-1/5 h-14 mr-4 p-4 font-bold uppercase tracking-wider shadow-xl bg-sunglow rounded-lg pointer-events-none'>
                    <a className='flex justify-center text-2xl font-bold text-black animate-pulse'>Edit Exam</a>
                </div>
                <div className='-ml-16 -mt-6'>
                    <Image src={conyPhoto} width="100%" height="100%" className='' />
                </div>
            </div>
            <div className="flex flex-wrap gap-16 justify-center items-center w-4/5 h-2/3 mt-4 p-4 bg-redcony rounded-2xl shadow-md overflow-y-auto">
                {render()}
            </div>

        </div>


    )
}