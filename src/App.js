import './App.css';
//import React from "react"
import Header from './components/Header'

const name = "ihs";
const last = "yeni";
const isLoggedIn = false;

function App() {
  //return React.createElement("div", null, "Hello");
  return (
    <div className="xyz">

      <h1>{name} {last}</h1>
      <h2>{isLoggedIn && `Merhaba ben ${name + " " + last}`}</h2>
      <h2>{!isLoggedIn && "Giris Yapmadiniz."}</h2>
      <h3>
        {isLoggedIn ? `Hosgeldin ${name + last}` : "Islem Basarisiz"}
      </h3>
    </div>

  );
}

export default App;
