import { useCallback, useMemo, useRef, useState } from "react";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseMemo from "./components/UseMemo";
import PureComponent01 from "./components/PureComponent01";
import PureComponent02 from "./components/PureComponent02";
import UseRef from "./components/UseRef";

function App() {
  console.log("Render app");
  const [show, setShow] = useState(false);
  const theValue= "Une valeur"
  
  // const onClickPureComponent02 = ()=>{
  //   console.log("Click PureComponent02")
  // }
  // const onClickPureComponent02 = useMemo(()=>{
  //   return ()=>{
  //     console.log("Click PureComponent02")
  //   }
  // },[])

  const onClickPureComponent02 =useCallback(()=>{
        console.log("Click PureComponent02")
  },[])

  const inputRef = useRef<HTMLInputElement>(null)
  const componentRef = useRef<{theValue:()=>string,setFocus:()=>void}>(null)
  const clickInput = ()=>{
    console.log(inputRef.current?.value)
    console.log(inputRef)
    console.log(inputRef.current)
  }
  const clickComponent = ()=>{
    console.log(componentRef)
    console.log(componentRef.current?.theValue())
  }
  const clickComponentFocus = ()=>{
    componentRef.current?.setFocus()
  }

  return (
    <>
      <h1>Hooks</h1>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && (
        <>
          <h2>Show</h2>
          {/* <UseEffect/> */}
        </>
      )}
      <hr />
      <UseReducer/>
      <hr />
      <UseMemo/>
      <hr />
      <PureComponent01 value={theValue}/>
      <hr />
      <PureComponent02 onClick={onClickPureComponent02}/>
      <hr />
      <input type="text" ref={inputRef}/>
      <button onClick={()=>clickInput()}>clickInput</button>
      <hr />
      <UseRef ref={componentRef}/>
      <button onClick={()=>clickComponent()}>clickComponent</button>
      <button onClick={()=>clickComponentFocus()}>clickComponentFocus</button>
    </>
  );
}

export default App;
