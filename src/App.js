import { useState } from 'react';

function App() {
  const [name, setName] = useState("ihs");
  const [age, setAge] = useState(25);
  const [friends, setFriends] = useState(['ihs', 'sfa', 'brky']);
  const [address, setAddress] = useState({ city: "Ankara", zip: 6830 });
  console.log(name, age);
  //herhangi bir state guncellendigi anda alttaki islem(render) bastan yapilir, dolayisiyla deger guncellenir

  return (
    <div className="App">
      <h1>Merhaba! {name} {age}</h1>
      <button onClick={() => setName('sefa')}>Change Name</button>
      <button onClick={() => setAge(18)}>Change Age</button>
      <hr />
      <h3>Friends</h3>
      {
        friends.map((friend, index) => (
          <div key={index}>{friend}</div>
        ))
      }
      <button onClick={() => setFriends([...friends, "yeni"])}>Add friend</button>

      <h3>Address</h3>
      <div>{address.city} {address.zip} </div>
      <button onClick={() => setAddress({ ...address, zip: 6999 })}>Address update</button>

      {/* degistirmek yerine eklemek icin objectleri array haline getirmemiz gerek "[{ }]" seklinde */}

    </div>
  );
}

export default App;
