import { useState } from 'react'

function InputExample() {
    const [name, setName] = useState('');
    const [last, setLast] = useState('');
    const onChangeLast = (event) => setLast(event.target.value);
    return (
        <div>Name <br />
            <input value={name} onChange={(event) => setName(event.target.value)}></input>
            <br />
            Lastname<br />
            <input value={last} onChange={onChangeLast}></input>
            <br /> {name} {last}
        </div>
    )
}

export default InputExample