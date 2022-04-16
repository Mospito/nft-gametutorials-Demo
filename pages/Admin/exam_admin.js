import Head from 'next/head'

import ReactDOM from 'react-dom';
// import Layout from '../components/layout'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Form, Input, Button, Radio } from 'antd';

const URL = `http://178.128.90.50:4444/quizs`

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

const style_input = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

const style_label = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
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


        <div class='flex flex-col items-center drop-shadow-2xl pt-5' >


            <div class=' h-2/4 w-2/4 bg-babygreen rounded-lg pt-5 mb-6'>

                <div class="mb-6  w-2/4">
                    <form action='/Admin/exam_admin' method="post">
                        <label for="Question" className={style_label}>Question</label>
                        <input
                            type="text"
                            id="Question"
                            name="Question"
                            required
                            className={style_input}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        <label for="Choice1" className={style_label} >Choice1</label>
                        <input
                            type="text"
                            id="Choice1"
                            name="Choice1"
                            required
                            className={style_input}
                            onChange={(e) => setChoice1(e.target.value)}
                        />
                        <label for="Choice2" className={style_label}>Choice2 </label>
                        <input
                            type="text"
                            id="Choice2"
                            name="Choice2"
                            required
                            className={style_input}
                            onChange={(e) => setChoice2(e.target.value)}
                        />
                        <label for="Choice3" className={style_label}>Choice3 </label>
                        <input
                            type="text"
                            id="Choice3"
                            name="Choice3"
                            required
                            className={style_input}
                            onChange={(e) => setChoice3(e.target.value)}
                        />
                        <label for="Choice4" className={style_label}>Choice4 </label>
                        <input
                            type="text"
                            id="Choice4"
                            name="Choice4"
                            required
                            className={style_input}
                            onChange={(e) => setChoice4(e.target.value)}
                        />

                        <label  className={style_label}>Answer </label>
                     

                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                                onChange={(e) => setAns(e.target.value)}
                        >
                            <option>{choice1}</option>
                            <option>{choice2}</option>
                            <option>{choice3}</option>
                            <option>{choice4}</option>
                            
                        </select>

                        <button type="submit" class="" onClick={submit_data}>Submit</button>
                    </form>
                </div>
            </div>
        </div>


    )
}