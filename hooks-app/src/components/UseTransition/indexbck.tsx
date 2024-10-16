import React, { useState, useTransition } from "react";

const longWork = (t: number = 300): Promise<void> => {
  return new Promise((resolve) => {
    console.log("start longWork");
    setTimeout(() => {
      console.log("end longWork");
      resolve();
    }, t);
  });
};

const toUpper = async (v: string) => {
  await longWork(2000);
  return v.toUpperCase();
};

function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [upperB, setBUpperB] = useState("");
  const isStartTranstion = true;
  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(e.target.value);
  };
  const handleChangeB = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setB(e.target.value);
    
    if(!isStartTranstion){ 
      const result = await toUpper(e.target.value);
      setBUpperB(result);
    }
    else{
      startTransition(() => {
        (async () => {
          const result = await toUpper(e.target.value);
          setBUpperB(result);
        })();
      });

    }



  };

  return (
    <div>
      <h2>UseTransition</h2>
      {isStartTranstion?"StartTranstion":"Not StartTranstion"}
      <br />
      <input type="text" value={a} onChange={handleChangeA} />
      <br />
      <input type="text" value={b} onChange={handleChangeB} />
      <br />a : {a}
      <br />b : {b}
      <br />
      upperB : {isPending ? "en cours..." : upperB}
    </div>
  );
}

export default UseTransition;
