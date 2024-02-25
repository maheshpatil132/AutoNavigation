'use client'
import React from 'react'

const ClientButton = () => {
    const sayhello = ()=>{
        console.log("hello from mahesh");
    }
  return (
    <div>
        <button onClick={sayhello}>Click Here</button>
    </div>
  )
}

export default ClientButton