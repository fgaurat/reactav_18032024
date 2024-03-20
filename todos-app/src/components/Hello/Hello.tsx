import { useState } from "react"

function Hello() {

    const[count,setCount]=useState(0)
  return (
    <>
    HelloWorld
    <br />
    <p>
    count : {count}
    </p>
    
    <button onClick={() => setCount(c =>c+1)}>inc</button>

    </>
  )
}

export default Hello