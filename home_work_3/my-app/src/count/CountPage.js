import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { counterActions, deleteAllActions, setValue } from "../redux/actions/action";

function CountPage() {

  const dispatch = useDispatch()
  const {value, numbers}  = useSelector(state => state.countReducer)

  const changeInput = (event) => {
    dispatch(setValue(+event.target.value))
  }

  const counterNum = () => {
    dispatch(counterActions(value))
  }

  const deleteAll = () => {
    dispatch(deleteAllActions())
  }



  return (
    <div>
      <h1>Counter</h1>
      <input type="number" placeholder="number" onChange={changeInput} value={value}/>
      <button disabled={!value} onClick={counterNum}>add</button>
      <button disabled={!numbers.length} onClick={deleteAll}>delete</button>

      {numbers.map((number, index) => <p key = {index}>{number}</p>)}
    </div>
  );
}

export default CountPage;