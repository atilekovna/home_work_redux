import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeInputFirst, changeInputSecond, divide, minus, multiply, plus } from "../../store/counterSlice";

function CountPage(props) {

  const dispatch = useDispatch()
  const {result} = useSelector(state => state.countReducer);


  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className='input'>
        <input onChange={(e) => dispatch(changeInputFirst(e.target.value))} type="number" placeholder="0"/>
      </div>

      <div className='input'>
        <input onChange={(e) => dispatch(changeInputSecond(e.target.value))} type="number" placeholder="0"/>
      </div>

      <button onClick={() => dispatch(plus())}>+</button>
      <button onClick={() => dispatch(minus())}>-</button>
      <button onClick={() => dispatch(multiply())}>*</button>
      <button onClick={() => dispatch(divide())}>/</button>

      <p>{result}</p>
    </div>
  );
}

export default CountPage;
