import Head from 'next/head'

import ReactDOM from 'react-dom';
// import Layout from '../components/layout'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Form, Input, Button, Radio } from 'antd';

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

       return (data.map((item,index) => (

        <li key={index}>
            {item.question}
        </li>
       )))
    }


    return (


        <div className='flex flex-col items-center drop-shadow-2xl pt-5' >

        
            {render()}
        </div>


    )
}