import React,{useState,useMemo} from "react";
import ReactDOM from "react-dom/client";

function Counter()
{

    const [count,setCount] = useState(0);
    const [number,setNumber] = useState("");


    function Fib(number)
    {
         if(number<=1)
            return number;

         return Fib(number-1)+Fib(number-2);

    }

    const result = useMemo(()=>Fib(number),[number]);
    

    return(
      <>
        <div className="count">
        <h1>Counter is:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increament</button>
        <button onClick={()=>setCount(count-1)}>Decreament</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </div>

        <div className="fibb">
          <h1>Fib is:{result}</h1>
          <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
          {/* <button onClick={(e)=>setNumber(e.target.value)}>Search</button> */}
        </div>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter/>);