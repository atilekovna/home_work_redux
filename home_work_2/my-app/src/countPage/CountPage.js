import React from 'react';
import { useDispatch, useSelector } from "react-redux";

function CountPage() {
  const  dispatch = useDispatch();
  const state = useSelector(state => state);

  const changeInputFirst = (event) => {
    dispatch({
      type: "FIRST_VALUE",
      payload: +event.target.value
    })
  }

  const changeInputSecond = (event) => {
    dispatch({
      type: "SECOND_VALUE",
      payload: +event.target.value
    })
  }


  const plus = () => {
    dispatch({
      type: "PLUS"
    })
  }

  const minus = () => {
    dispatch({
      type: "MINUS"
    })
  }

  const multiply = () => {
    dispatch({
      type: "MULTIPLY"
    })
  }

  const divide = () => {
    dispatch({
      type: "DIVIDE"
    })
  }


  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className='input'>
        <input onChange={changeInputFirst} type="number" placeholder="0"/>
        <p className='error-message'>{!state.firstValue ? 'поле пусто' : ''}</p>
      </div>

      <div className='input'>
        <input onChange={changeInputSecond} type="number" placeholder="0"/>
        <p className='error-message'>{!state.secondValue ? 'поле пусто' : ''}</p>
      </div>

      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>

      <p>{state.result}</p>
    </div>
  );
}

export default CountPage;