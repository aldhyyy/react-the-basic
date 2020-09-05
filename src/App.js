import React from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

/*
  High Order Component Patter
  Use to share function from other components to 
*/

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter name="Viswas" />
    </div>
  );
}

export default App;
