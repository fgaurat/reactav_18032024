import { useState } from 'react'

function App() {
  console.log("Render app")
  const [show, setShow] = useState(false)

  return (
    <>
     <h1>Hooks</h1>
     <button onClick={}>Show</button>
      {show && <h2>Show</h2>}
     
    </>
  )
}

export default App
