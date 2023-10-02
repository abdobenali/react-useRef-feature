import React from "react";
import ReferenceValue from "./components/referenceValues";
import OneNode from "./components/referenceNode/OneNode";
import ManyNodes from "./components/referenceNode/ManyNodes";
import RefComponent from "./components/referenceAnotherComponentNode";
const App = () => {
  return (
    <>
      <ReferenceValue />
      <OneNode />
      <ManyNodes />
      <RefComponent />
    </>
  );
};

export default App;
