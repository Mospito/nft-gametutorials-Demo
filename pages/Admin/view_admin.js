import Head from 'next/head'

import ReactDOM from 'react-dom';
// import Layout from '../components/layout'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Form, Input, Button, Radio } from 'antd';

const URL = `http://178.128.90.50:4444/quizs`




export default function ViewAdmin() {




    return (


        <div className='flex flex-start items-start drop-shadow-2xl pt-5' >


            View Admin
        </div>


    )
}