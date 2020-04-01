import React from "react";
import Login from "./Login";

const isLoggedIn = true;

const currentTime = new Date().getHours();

function App() {
  return ( <div className="container">

  {
//Ternary operator
  /* {isLoggedIn ? <h1>Hello User</h1> : <Login />} */

  //AND operator
  {/* currentTime > 12 && <h1>Why are you still working?</h1> */}
  }
    
    </div>
  );
}

export default App;
