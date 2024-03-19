import React, { useReducer } from "react";

const initialState = { count: 0, name: "fred" };

function reducer(
  state: { count: number; name: string },
  action: { type: string }
) {
  switch (action.type) {
    case "increment":
      return { ...state,count: state.count + 1 };
    case "decrement":
      return { ...state,count: state.count - 1 };
    default:
      throw new Error();
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>UseReducer</h2>
      Bonjour {state.name}
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

export default UseReducer;
