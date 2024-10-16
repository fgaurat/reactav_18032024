import React, { useDeferredValue, useMemo, useState, useTransition } from "react";

function UseDeferredValue() {

  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input);
  // const deferredInput = input;


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  return (
    <div>
      <h2>UseDeferredValue</h2>
      <input
        value={input}
        onChange={handleChange}
        placeholder="Value..."
      />
      <List deferredInput={deferredInput} />
    </div>
  );
}


function List({ deferredInput }:{deferredInput:string}) {
  // Simulons une opération coûteuse

  const list = useMemo(() => {
    console.log('Calcul des résultats pour:', deferredInput);
    const result = [];
    // Simulons un traitement long
    for (let i = 0; i < 50000; i++) {
        result.push(`${deferredInput} - ${i}`);
    }
    return result;
  }, [deferredInput]);

  return (
    <ul>
      {list.length > 0 && list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}



export default UseDeferredValue;