import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setValue, counterActions } from "../redux/actions/action";


function CountPage() {

  const dispatch = useDispatch()
  const {value, numbers}  = useSelector(state => state.countReducer)

  const changeInput = (event) => {
    dispatch(setValue(+event.target.value))
  }

  const counterNum = () => {
    dispatch(counterActions(value))
  }


  return (
    <div>
      <h1>Counter</h1>
      <input type="number" placeholder="number" onChange={changeInput} value={value}/>
      <button onClick={counterNum}>add</button>

      {numbers.map((number) => <p>{number}</p>)}
    </div>
  );
}

export default CountPage;