import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter()
{

    const [count,setCount] = useState(0);
    

    return(
        <>
        <h1>Counter is:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increament</button>
        <button onClick={()=>setCount(count-1)}>Decreament</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter/>);