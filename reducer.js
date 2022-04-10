import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === "increment")
    return { ...state, count: state.count + 1 }

  else if (action.type === "toggle")
    return { ...state, showText: !state.showText }

  else return state;
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <>
      <h1>
        {state.count}
      </h1>
      <button onClick={() => {
        dispatch({ type: "increment" });
        dispatch({ type: "toggle" });
      }}> click here to increment</button>
      {
        state.showText &&
        <p>this is text</p>
      }
    </>
  );
}

export default App;
