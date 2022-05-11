```jsx
import React, { useState } from "react";
import Data from "./Data";

const App = () => {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);
  const [obj, setObj] = useState({
    first: "",
    last: "",
  });

  function add() {
    setCount(count + 1);
    setCount(count + 1);

    /*
     * via above two statements, count will be updated only once,
     * if we want to udpate twice then we have to use previous state.
     * If the new state is computed using the previous state,
     * you can pass a function to setState. The function will receive the previous value,
     * and return an updated value.
     */

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);

    // OR

    setCount(function (prev) {
      return prev + 1;
    });
    setCount(function (prev) {
      return prev + 1;
    });
  }

  function sub() {
    setCount((prev) => prev - 1);
  }

  const updateArray = (newValue) => {
    // same as add function but mind the syntax
    setArray((prev) => [...prev, newValue]);
    setArray((prev) => [...prev, newValue]);
  };

  const updateObj = (newValue) => {
    setObj((prev) => ({ ...prev, last: newValue }));
  };

  return (
    <>
      <h1> count : {count}</h1>
      <button onClick={add}> Add </button>
      <button onClick={sub}> sub </button>
    </>
  );
};
export default App;

```
