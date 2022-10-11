import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

function App() {
  // useSelector -> read variable from reducer and wee need the count reducer
  const { count } = useSelector((state) => state.counter);

  // we can call any action, from any reducer with useDispatch
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}

export default App;
