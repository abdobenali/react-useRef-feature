import React, { useRef } from "react";

const OneNode = () => {
  const inputRef = useRef(null);
  return (
    <>
      <h2>Manipulating One Node</h2>
      <form>
        <input type="text" ref={inputRef} />
        <button
          onClick={(e) => {
            e.preventDefault();
            inputRef.current.focus();
          }}
        >
          Focus on input
        </button>
      </form>
    </>
  );
};

export default OneNode;
