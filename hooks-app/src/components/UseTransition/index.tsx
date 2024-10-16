import React, { useState, useTransition } from "react";

const longWorkAsync = (t: number = 300): Promise<void> => {
  return new Promise((resolve) => {
    console.log("start longWork");
    setTimeout(() => {
      console.log("end longWork");
      resolve();
    }, t);
  });
};

const longWork = (t=300)=>{
  console.log("start longWork")
  const end = Date.now()+t
  while(Date.now()<end){}
  console.log("end longWork")
}


function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [a, setA] = useState("");
  const [listA, setListA] = useState<string[]>([]);

  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(e.target.value);
    setListA([]);
    startTransition(() => {
    for(let i = 0; i < 10000; i++){
      setListA((prev) => [...prev, e.target.value]);
    }
    });
  };


  return (
    <div>
      <h2>UseTransition</h2>
      <br />
      <input type="text" value={a} onChange={handleChangeA} />
      <br />
      <ul>
        {isPending && <li>en cours...</li>}
        {}
        {listA.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseTransition;
