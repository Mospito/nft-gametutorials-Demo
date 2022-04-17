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

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

const style_input = 'bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 block w-full p-2.5'

const style_label = 'block font-medium text-gray-900 dark:text-gray-300 mt-4'
export default function ExamAdmin() {



    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [question, setQuestion] = useState("")
    const [choice1, setChoice1] = useState("")
    const [choice2, setChoice2] = useState("")
    const [choice3, setChoice3] = useState("")
    const [choice4, setChoice4] = useState("")
    const [ans, setAns] = useState("")


    const submit_data = async () => {


        await axios.post(URL, {
            question: question,
            choice1: choice1,
            choice2: choice2,
            choice3: choice3,
            choice4: choice4,
            ans: ans,
        })
            .then(function (response) {
                console.log(response);
                alert("Successfully")
            })
            .catch(function (error) {
                console.log(error);
                alert("Error")
            });



        // console.log(question);
        // console.log(choice1);
    }

    const StyledForm = styled(Form)`
    .ant-form-item {
        margin-bottom: 0px;
        border-radius: 5px;
        font-weight: bold;
    }
    `;

    return (
        <div className='flex flex-col fixed justify-center items-center h-screen w-screen'>
            <div className='flex flex-row justify-center w-full items-center -mt-24'>
                <div className='flex flex-col justify-center items-center text-4xl w-1/5 h-14 mr-4 p-4 font-bold uppercase tracking-wider shadow-xl bg-sunglow rounded-lg pointer-events-none'>
                    <a className='flex justify-center text-2xl font-bold text-black animate-pulse'>Add Exam</a>
                </div>
                <div className='-ml-16 -mt-6'>
                    <Image src={conyPhoto} width="100%" height="100%" className='' />
                </div>
            </div>
            <div className='flex justify-center items-center h-2/3 w-2/4 bg-blue2 rounded-2xl mt-4 shadow-lg'>
                <div className="flex flex-col justify-center w-full p-4">
                    <form action='/Admin/exam_admin' method="post">
                        <div className="flex flex-col justify-center w-full">
                            <label for="Question" className={style_label}>Question</label>
                            <input
                                type="text"
                                id="Question"
                                name="Question"
                                required
                                className={style_input}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-row justify-between w-full mt-4">
                            <div className="flex flex-col w-5/12">
                                <label for="Choice1" className={style_label} >Choice 1</label>
                                <input
                                    type="text"
                                    id="Choice1"
                                    name="Choice1"
                                    required
                                    className={style_input}
                                    onChange={(e) => setChoice1(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col w-5/12">
                                <label for="Choice2" className={style_label}>Choice 2 </label>
                                <input
                                    type="text"
                                    id="Choice2"
                                    name="Choice2"
                                    required
                                    className={style_input}
                                    onChange={(e) => setChoice2(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full mt-4">
                            <div className="flex flex-col w-5/12">
                                <label for="Choice3" className={style_label}>Choice 3 </label>
                                <input
                                    type="text"
                                    id="Choice3"
                                    name="Choice3"
                                    required
                                    className={style_input}
                                    onChange={(e) => setChoice3(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col w-5/12">
                                <label for="Choice4" className={style_label}>Choice 4 </label>
                                <input
                                    type="text"
                                    id="Choice4"
                                    name="Choice4"
                                    required
                                    className={style_input}
                                    onChange={(e) => setChoice4(e.target.value)}
                                />
                            </div>
                        </div>

                        <label className={style_label}>Answer</label>


                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-state"
                            onChange={(e) => setAns(e.target.value)}
                        >
                            <option>{choice1}</option>
                            <option>{choice2}</option>
                            <option>{choice3}</option>
                            <option>{choice4}</option>

                        </select>

                        <div className='flex justify-center items-center mt-8 text-base'>
                            <button type="submit" className="font-bold uppercase w-1/5 h-10 border-4 border-green-800 bg-babygreen rounded-xl hover:bg-bluesea" onClick={submit_data}>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>


    )
}