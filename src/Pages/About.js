import React, { Component, Suspense } from "react";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";

// This will make lazy loading component
const Header = React.lazy(() => import("../components/Header"));

class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Suspense fallback={<Loading />}>
          <Header />
        </Suspense>
        <h1>About Page</h1>
      </div>
    );
  }
}

export default About;
