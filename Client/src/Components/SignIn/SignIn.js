import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function SignIn() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/customers")
      .then((res) => res.json())
      .then((res) => setState(res));
    console.log(state);
  }, []);

  return (
    <div>
      <h2>Sign In</h2>
      <h1>{}</h1>

      {/* sign in form */}
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" id="password" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignIn;
