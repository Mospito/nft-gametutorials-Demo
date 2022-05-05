/* eslint-disable jsx-a11y/alt-text */
import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/connectors"
import Image from 'next/image'
import metamaskPhoto from '../photos/metamask.png'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from "axios"


const URL = `http://178.128.90.50:4444/users`

export default function connectwallet() {



  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { active, account, library, connector, activate, deactivate } = useWeb3React()



  async function connect() {

    try {
      await activate(injected)

      alert("Connect Success!!");




    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {

      deactivate()

      alert("Disconnect Success!!");
    } catch (ex) {
      console.log(ex)
    }
  }

  const PostAccout = async () => {

    try {


      await axios.post(URL,
        {
          wallet_id: account,
          stage_course: "0",
          stage_quiz: "0",
          score: "0"
        })
        .then(response => {
          console.log(response);
        });

      alert("Register Suscess")
    }
    catch {
      alert("User Error")
    }

  }






  return (
    <div className="flex flex-col items-center justify-center">

      <div className="flex flex-col justify-start bg-white rounded-xl shadow-lg p-12 mt-12" >
        <Image src={metamaskPhoto} width="200%" height="200%" className=" " />


        <button onClick={connect} className=" text-lg font-bold text-black rounded-lg w-60 h-10 bg-babygreen hover:bg-egg shadow-md">Connect to MetaMask</button>

        <button onClick={PostAccout} className="text-lg font-bold text-black rounded-lg w-60 h-10 bg-sunglow hover:bg-sunglow2 shadow-md mt-6">Register with MetaMask</button>

        <button onClick={disconnect} className="text-lg font-bold text-black rounded-lg w-60 h-10 border-2 border-red-500 hover:bg-red3 shadow-md mt-6">Disconnect</button>
      </div>

      <div  className="flex items-center justify-center w-1/3 h-16 border-2 border-green-500 bg-white rounded-xl mt-10 shadow-md">
        {active ? <span className="pl-4">Connected with <b>{account}</b></span> : <span>Not connected</span>}
      </div>


    </div>

  )
}
