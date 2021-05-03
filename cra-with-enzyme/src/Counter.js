import {useState} from 'react';

function Counter() {
  const [counter, setCouner] = useState(0);

  function handleClick() {
    setCouner(counter+1);
  }

 return (
   <>
   <h1>{counter}</h1>
   <button onClick={handleClick}>click on me</button>
  </>
 )
}

export default Counter;
