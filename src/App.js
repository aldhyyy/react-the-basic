import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      {/* Wrapper all component with error boundary */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* Wrapper each component with error boundary */}
      <ErrorBoundary>
        <Hero heroName="Batman" />{" "}
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman" />{" "}
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
