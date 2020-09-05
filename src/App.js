import React from "react";
import "./App.css";
import PortalExample from "./components/PortalExample";

function App() {
  return (
    <div className="App">
      {/* This PortalExample will not mount on root but will be mount on portal-root*/}
      <PortalExample />
    </div>
  );
}

export default App;
