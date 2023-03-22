import React from 'react'
import {Button} from 'antd'
import {history} from 'umi'

export default function user() {
  return (
    <Button type='primary' onClick={() => {
      history.push('/login')
    }}>anniu</Button>
  )
}
