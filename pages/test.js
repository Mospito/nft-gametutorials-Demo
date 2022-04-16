import Head from 'next/head'

import Layout from '../components/layout'
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const URL = `http://178.128.90.50:4444/quizs`
const URL_USERS = `http://178.128.90.50:4444/users`

export default function Test({ token }) {


    const [quizs, setQuizs] = useState([])
    const [quiz, setQuiz] = useState({})

    const quest = [{
        "id": 1,
        "question": "Which technologies does blockchain use?",
        "choice1": "Peer-to-peer networking",
        "choice2": "Asymmetric cryptography",
        "choice3": "Cryptographic hashing",
        "choice4": "All of the above",
        "ans": "All of the above",
        "created_at": "2022-01-17T09:54:01.000+07:00",
        "updated_at": "2022-01-17T09:54:01.000+07:00"
    }
 ]

    const questions = [
        {
            questionText: 'Which technologies does blockchain use?',
            answerOptions: [
                { answerText: 'Peer-to-peer networking', isCorrect: false },
                { answerText: 'Asymmetric cryptography', isCorrect: false },
                { answerText: 'Cryptographic hashing', isCorrect: false },
                { answerText: 'All of the above', isCorrect: true },
            ],
        },
        {
            questionText: 'In which programming language is Smart Contracts written?',
            answerOptions: [
                { answerText: 'Java', isCorrect: false },
                { answerText: 'Solidity', isCorrect: true },
                { answerText: 'Python', isCorrect: false },
                { answerText: 'C++', isCorrect: false },
            ],
        },
        {
            questionText: 'Which type of language is solidity?',
            answerOptions: [
                { answerText: 'object oriented language', isCorrect: true },
                { answerText: 'procedure oriented language', isCorrect: false },
                { answerText: 'low level language', isCorrect: false },
                { answerText: 'scripting language', isCorrect: false },
            ],
        },
        {
            questionText: 'Which among the following is true with respect to solidity programming language?',
            answerOptions: [
                { answerText: 'Solidity uses interpreter to run', isCorrect: false },
                { answerText: 'Solidity smart contracts can store more data', isCorrect: false },
                { answerText: 'the file extension of solidity files is .sl', isCorrect: false },
                { answerText: 'Solidity is a statically typed language', isCorrect: true },
            ],
        },
    ];




    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    let tmpCurr = 0;

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            alert('Your scored is ' + score + 'out of' + questions.length)
        }
    };

    const EventAnswerOptionClick = (choiceEvent) => {
        if (quest[currentQuestion].ans === choiceEvent ) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quest.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            // alert('Your scored is ' + score + 'out of' + quest.length)
        }
    };


    useEffect(() => {
        getQuizs()
    }, [])


    const getQuizs = async () => {

        let quiz = await axios.get(URL)
        console.log(quiz);
        setQuizs(quiz.data)

    }

    const printQuizs = () => {

        // console.log(quizs);
        // alert(quizs.map((item,index) => item.question))

        quizs.map((item) => quest.push(item))

    }

    return (
        <Layout>
            <Head>
                <title>NFT game tutorials</title>
            </Head>

            <div className='md:flex flex-col fixed -mt-10 justify-center items-center h-screen w-screen'>
                <div className='flex flex-col w-3/5 h-3/4 p-4 resize-y border-4 border-red-400 bg-redcony rounded-3xl shadow-xl'>
                    <div className='flex w-full h-full'>
                        {/* <a>
                            ทดสอบ Solidity
                        </a>
                        <br></br> */}
                        {printQuizs()}


                        <div className='flex flex-col w-full p-2'>
                            {showScore ? (
                                <div className='flex justify-center items-center font-bold text-5xl h-full animate-pulse'>
                                    <text>You scored {score} out of {quest.length}</text>
                                </div>
                            ) : (
                                <>
                                    <div className='flex flex-col mt-4'>
                                        <div className='font-bold text-3xl'>
                                            <a>Question : {currentQuestion + 1}</a>/{quest.length}
                                        </div> <br></br>
                                        {/* <div className='font-bold text-xl'>{questions[currentQuestion].questionText}</div> */}
                                        <div className='font-bold text-xl'>{quest[currentQuestion].question}</div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-8 gap-y-12 mt-10 '>
                                        {/* {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                            <button key={index} className='h-28 ring-yellow-500 ring-offset-yellow-400 
                                                                ring-offset-4 ring-8 rounded-lg text-lg 
                                                                bg-redcony hover:bg-sunglow' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                                     {answerOption.answerText}
                                            </button>
                                        ))} */}


                                        <button className='h-28 ring-yellow-500 ring-offset-yellow-400 
                                                                ring-offset-4 ring-8 rounded-lg text-lg 
                                                                bg-redcony hover:bg-sunglow' onClick={() => EventAnswerOptionClick(quest[currentQuestion].choice1)}>
                                            {quest[currentQuestion].choice1}
                                        </button>

                                        <button className='h-28 ring-yellow-500 ring-offset-yellow-400 
                                                                ring-offset-4 ring-8 rounded-lg text-lg 
                                                                bg-redcony hover:bg-sunglow' onClick={() => EventAnswerOptionClick(quest[currentQuestion].choice2)}>
                                            {quest[currentQuestion].choice2}
                                        </button>

                                        <button className='h-28 ring-yellow-500 ring-offset-yellow-400 
                                                                ring-offset-4 ring-8 rounded-lg text-lg 
                                                                bg-redcony hover:bg-sunglow' onClick={() => EventAnswerOptionClick(quest[currentQuestion].choice3)}>
                                            {quest[currentQuestion].choice3}
                                        </button>

                                        <button className='h-28 ring-yellow-500 ring-offset-yellow-400 
                                                                ring-offset-4 ring-8 rounded-lg text-lg 
                                                                bg-redcony hover:bg-sunglow' onClick={() => EventAnswerOptionClick(quest[currentQuestion].choice4)}>
                                            {quest[currentQuestion].choice4}
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                    </div>
                    <div className='flex justify-end items-end mb-2 mr-2'>
                        <a className='flex justify-center items-center w-36 h-14 bg-sunglow
                                text-2xl text-center font-semibold border-4 border-yellow-500 rounded-lg
                                hover:bg-redcony focus:outline-none'>Next</a>
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
