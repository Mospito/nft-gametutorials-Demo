import { Table, Tag, Space } from 'antd';
import Head from 'next/head'
import Layout from '../components/layout'
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import conyPhoto from '../photos/cony.png'
import Image from 'next/image'

export default function score_board() {
  const columns = [
    {
      title: 'Wallet_ID',
      dataIndex: 'wallet_id',
      key: 'wallet_id',
      render: text => <a>{text}</a>,
    },

    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.wallet_id}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      wallet_id: '0x0755D335655d14CF56cdCFfE66B499E237582AE7',
      score: 9,
      name: 'Foo',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      wallet_id: '0xF43EE49Fccb7Af7fB7781A71A87D850B35bb264b',
      score: 11,
      name: 'Bar',
      tags: ['loser'],
    },
    {
      key: '3',
      wallet_id: '0xDe0b1495C170E5bF011b7651ea1dFa60Efa99613',
      score: 10,
      name: 'Too',
      tags: ['cool', 'teacher'],
    },
  ];


  return (
    <Layout>
    <Head>
        <title>NFT game tutorials</title>
    </Head>
    <div className='md:flex flex-col fixed justify-center items-center h-screen w-screen'>
      <div className='flex flex-row justify-center w-full -mt-52 items-center'>
        <div className='flex flex-col justify-center items-center text-4xl w-1/4 h-1/2 mr-4 p-4 font-bold uppercase tracking-wider shadow-xl bg-sunglow rounded-lg pointer-events-none'>
          <a className='flex justify-center text-2xl font-bold text-black animate-pulse'>Score Board</a>
        </div>
        <div className='-ml-16'>
          <Image src={conyPhoto} width="200%" height="200%" className='' />
        </div>
      </div>
      <div className='w-3/4 bg-white drop-shadow-xl rounded-xl p-4'>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
    </Layout>
  )
}

