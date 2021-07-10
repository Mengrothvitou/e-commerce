import React, {useState, useEffect} from 'react';
 export default function Example(){
    const [count,setCount] = useState(0);
    function sum(){
        setCount(count+1)
    }
    useEffect(()=> {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={sum}>
                Click me
            </button>
        </div>
    );
}