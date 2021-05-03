import {useState} from 'react';

function Counter() {
  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>
        this is {counter}
      </h1>
      <button onClick={handleClick}>
        increase
      </button>
    </>
  )
}

export default Counter;