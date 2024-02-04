import './App.css';
//import React from "react"
import Header from './components/Header'

const name = "ihs";

function App() {
  //return React.createElement("div", null, "Hello");
  return (
    <div className="xyz">
      <h1>Hello React</h1>
      <Header />
      <label htmlFor="name">
        Name:
        <input id="name" type="text"></input>
      </label>
    </div>

  );
}

export default App;
