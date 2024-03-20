import React from 'react'

function Page({params}:{params:{name:string}}) {
  return (
    <>
        <h1>Hello {params.name}</h1>
    </>
  )
}

export default Page



