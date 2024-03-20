"use client"
import React, { useState } from 'react'

function Count() {
    const[count,setCount]=useState(0)
  return (
    <>
    <h1>Count</h1>
    {count}
    <button onClick={() => setCount(c =>c+1)}>Inc</button>
    </>
  )
}

export default Count