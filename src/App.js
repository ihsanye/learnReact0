import './App.css';
//import React from "react"
import Header from './components/Header'
import User from './components/User'

function App() {
  //return React.createElement("div", null, "Hello");
  return (
    <div className="xyz">
      <User name="ihs" last="yeni" isLoggedIn={true} age={25} friends={["sefa", "berkay", "ihsan"]} />
    </div>
  );
}

export default App;
