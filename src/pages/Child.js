import React from 'react'

export default function Child({derive}) {
  return (
    <div>
        <span>{derive.symbol}</span>
    </div>
  )
}
