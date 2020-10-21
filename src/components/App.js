import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  list = ["Sarath", "chandu", "Mouni", "Manish"];
  render() {
    return (
      <ol key="relativeList">
        this.list.map((relativeName,index) =>
        <li key={`relativeListItem${index + 1}`}>{relativeName}</li>)
      </ol>
    );
  }
}

export default App;
