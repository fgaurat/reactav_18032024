import React, { forwardRef, useImperativeHandle, useRef } from "react";

function UseRef(props,ref) {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useImperativeHandle(ref,() => {
    return {
     theValue:()=>inputRef.current?.value,
     setFocus:()=>inputRef.current?.focus(),
    };
  })
  
  return (
    <>
      <h2>UseRef</h2>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default forwardRef(UseRef);
