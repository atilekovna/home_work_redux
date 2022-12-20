import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function CountPage() {


  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  const increment = () => {
    dispatch({
      type: "INCREMENT",
      count: count
    })
  }

  const decrement = () => {
    dispatch({
      type: "DECREMENT",
      count: count
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