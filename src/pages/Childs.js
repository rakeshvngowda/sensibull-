import React from 'react'
import Child from './Child'

export default function Childs({derivatives}) {
  return (
    derivatives.map((derive)=> {
      return <Child derive={derive} key={derive.token}/>
    })
  )
}
