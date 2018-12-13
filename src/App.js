import React, { Component } from "react";
import Tasks from "./components/Tasks";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Tasks />
      </div>
    );
  }
}

export default App;
