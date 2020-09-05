import React from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";

/*
  Implementing render props pattern on react app
  Use to share function from counter to other components
*/

function App() {
  return (
    <div className="App">
      {/* Using Props */}
      <Counter
        render={(count, increment) => (
          <ClickCounter count={count} increment={increment} />
        )}
      />

      <Counter
        render={(count, increment) => (
          <HoverCounter count={count} increment={increment} />
        )}
      />

      {/* Using Children */}
      {/* <Counter>
        {(count, increment) => (
          <HoverCounter count={count} increment={increment} />
        )}
      </Counter> */}
    </div>
  );
}

export default App;
