import React from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Here we pass the value */}
        <UserProvider value="aldhy">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
