## method 1


#### App.js
```js
import React, { createContext, useState } from "react";
import Login from "./Login";

export const LoginContext = createContext({});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {loggedIn ? <h1> Logged In</h1> : <h1> Logged Out</h1>}
      <Login />
    </LoginContext.Provider>
  );
};

export default App;



```

#### Login.js

```js
import React from "react";
import { useContext } from "react";
import { LoginContext } from "./App.js";

const App = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <>
      <h1>You are at Login page</h1>
      <button
        onClick={() => {
          setLoggedIn(!loggedIn);
        }}
      >
        Login
      </button>

    </>
  );
};

export default App;

```


## Method 2

using a separate file for context itself, to reduce confusion

#### app.js

```js
import React, { createContext, useState } from "react";
import Login from "./Login";
import { LoginContext } from "./Context";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {loggedIn ? <h1> Logged In</h1> : <h1> Logged Out</h1>}
      <Login />
    </LoginContext.Provider>
  );
};

export default App;

```

#### login.js

```js
import React from "react";
import { useContext } from "react";
import {LoginContext} from "./Context"

const App = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <>
      <h1>You are at Login page</h1>
      <button
        onClick={() => {
          setLoggedIn(!loggedIn);
        }}
      >
        Login
      </button>

    </>
  );
};

export default App;

```


#### Context.js

```js
import { createContext } from "react";

export const LoginContext = createContext({});

```
