import { useEffect, useReducer } from "react";
import "./styles.css";

export default function App() {
  const init = { count: 0 };
  const [state, dispatch] = useReducer(reducer, init);
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 5 };
      case "decreament":
        return { count: state.count - 1 };
    }
  }
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>add</button>
      <button onClick={() => dispatch({ type: "decreament" })}>sub</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
