import React, { useState } from 'react';
import { useDispatch } from "react-redux";

function CountPage() {

  let [count, setCount] = useState(0)

  const dispatch = useDispatch()

  const increment = () => {
    setCount(++count);
    dispatch({
      type: "INCREMENT",
      payload: count
    })
  }

  const decrement = () => {
    if (count > 0){
      setCount(--count);
    }
    dispatch({
      type: "DECREMENT",
      payload: count
    })
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CountPage;