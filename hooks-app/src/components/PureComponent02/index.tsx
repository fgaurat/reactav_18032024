import React, { memo } from 'react'

function PureComponent02({onClick}) {
    console.log("Render PureComponent02")
  return (
    <>
    <h2>PureComponent02</h2>
    <button onClick={onClick}>Click</button>
    </>
  )
}


const c = memo(PureComponent02)
export default c