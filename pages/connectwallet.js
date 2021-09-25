/* eslint-disable jsx-a11y/alt-text */
import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/connectors"
import Image from 'next/image'
import metamaskPhoto from '../photos/metamask.png'
export default function connectwallet() {


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }



  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-start bg-white rounded shadow-lg p-12 mt-12" >
      <Image src={metamaskPhoto} width="200%" height="200%" className=" " />
      <button onClick={connect} className=" text-lg font-bold text-black rounded-lg w-56 bg-blue-600 hover:bg-blue-800 mb-16">Connect to MetaMask</button>
     
      <button onClick={disconnect} className="bg-blue-600 hover:bg-blue-800 py-2 mb-4 text-lg font-bold text-black rounded-lg w-56 border-blue-500 border-opacity-100">Disconnect</button>
    </div>
    {active ? <span className="mt-16">Connected with <b>{account}</b></span> : <span className="mt-16">Not connected</span>}
    </div>
  )
}
