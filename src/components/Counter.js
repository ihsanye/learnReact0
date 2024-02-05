import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1)
    }
    //onclick icine fonksiyon da yazabiliriz bu sekilde
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count - 1)}>- Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={increase}>+ Increase</button>
        </div>
    )
}

export default Counter