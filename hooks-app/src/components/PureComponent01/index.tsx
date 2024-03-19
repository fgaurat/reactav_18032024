import React from 'react'

function PureComponent01({value}) {
    console.log("Render PureComponent01")
  return (
    <>
    <h2>PureComponent01</h2>
    value : {value}
    </>
  )
}

const c = React.memo(PureComponent01)
export default c