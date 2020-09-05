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
      {/* this props will be pass to HOCComponent not in HoverCounter component */}
      <HoverCounter name="Viswas" />
    </div>
  );
}

export default App;
