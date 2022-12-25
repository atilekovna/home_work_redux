import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addNumberActions, deleteAllNumbersActions, setValue } from "../redux/actions/action";

function CountPage() {

  const dispatch = useDispatch()
  const {value, numbers}  = useSelector(state => state.countReducer)

  const changeInput = (event) => {
    dispatch(setValue(+event.target.value))
  }

  const addNumber = () => {
    dispatch(addNumberActions(value))
  }

  const deleteAllNumbers = () => {
    dispatch(deleteAllNumbersActions())
  }



  return (
    <div>
      <h1>Counter</h1>
      <input type="number" placeholder="number" onChange={changeInput} value={value}/>
      <button disabled={!value} onClick={addNumber}>Add</button>
      <button disabled={!numbers.length} onClick={deleteAllNumbers}>Delete all</button>

      {numbers.map((number, index) => <p key = {index}>{number}</p>)}
    </div>
  );
}

export default CountPage;