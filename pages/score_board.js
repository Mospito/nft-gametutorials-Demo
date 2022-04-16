import { Table, Tag, Space } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';


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
    <div className=' w-3/4 h-3/4 mt-20 ml-40 bg-white drop-shadow-xl rounded-md'>
   
        <Table columns={columns} dataSource={data} />
  

    </div>

  )
}