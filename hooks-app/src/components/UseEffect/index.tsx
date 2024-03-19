import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [count,setCount] = useState(0)
    console.log("render UseEffect")
    useEffect(()=>{
        const interv = setInterval(()=>{
            setCount(c => c+1)
            console.log("inc")
        },1000)

        return ()=>{
            clearInterval(interv)
        }
    },[count])


  return (
    <>
    <h2>UseEffect</h2>
    count : {count}
    </>

  )
}

export default UseEffect