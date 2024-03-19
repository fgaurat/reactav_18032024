import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state:{count:number}, action:{type:string}) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>UseReducer</h2>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>      
    </>
  );
}

export default UseReducer;
