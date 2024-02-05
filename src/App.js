import { useState, useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("ihs");

  useEffect(() => {
    console.log("component mount edildi");
  }, []);

  useEffect(() => {
    console.log("number state guncellendi");
  }, [number]);
  //array bos birakilirsa tum degisimleri; number,name yazilirsa her ikisini kontrol eder.
  //ayri ayri useEffect ler kullanilirsa ayri ayri kontrol eder
  return (
    <div className="App">
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)} >Up</button>
      <br />
      <h2>{name}</h2>
      <button onClick={() => setName("brky")} >Change</button>
    </div>
  );
}

export default App;
