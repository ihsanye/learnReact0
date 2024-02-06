import { useState, useEffect } from 'react';

function Counter() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("component mount edildi");

        const interval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000);

        return () => clearInterval(interval);
        //toggle edildiginde sayac tekrar sifirdan baslar
    }, []);

    useEffect(() => {
        console.log("number state guncellendi");
    }, [number]);

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={() => setNumber(number + 1)} >Up</button>
        </div>
    );
}
export default Counter