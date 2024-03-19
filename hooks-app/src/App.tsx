import { useState } from "react";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";

function App() {
  console.log("Render app");
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Hooks</h1>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && (
        <>
          <h2>Show</h2>
          <UseEffect/>
        </>
      )}
      <hr />
      <UseReducer/>
    </>
  );
}

export default App;
