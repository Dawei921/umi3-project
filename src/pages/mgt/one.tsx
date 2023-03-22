import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {getTablesInfo} from '@/api/getTables'
import { useEffect, useState } from 'react';
import {useRequest} from 'umi'

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'score',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type='primary'>编辑</Button>
        <Button type='default'>删除</Button>
      </Space>
    ),
  },
];



export default function one() {
    // const [tableData, setTables] = useState<DataType[]>([])
    // 传统写法1
    // useEffect(() => {
    //     getTablesInfo().then((res:any) => {
    //         console.log(res)
    //         setTables(res.data)
    //     })
    // },[])
    // useRequest钩子写法2
    const {data, loading, run} = useRequest(async (val) => {
      const res = await getTablesInfo()
      console.log('res', res)
      console.log(val)
      return res
    }, {manual: true})
    console.log(data)
  return (
    <>
      <Button style={{margin: '10px 10px'}} type='primary' onClick={() => run('232323')}>手动执行获取数据</Button>
      <Table 
    loading={loading}
    columns={columns} 
    dataSource={data?data:[]} />
    </>
  )
}
