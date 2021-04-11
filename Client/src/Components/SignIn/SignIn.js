import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function SignIn() {
  // fetch("http://localhost:8080/test")
  //   .then((response) => console.log(response.json()))
  //   .then((user) => console.log(user))
  //   .catch(console.log);

  const [data, setData] = useState();

  const fetchedData = async function () {
    let info = fetch("http://localhost:8080/customers")
      .then((response) => response.json())
      .then((res) => setData(res));
    console.log(info);
    return info;
  };

  useEffect(() => {
    const fetchedData = async function () {
      let data = fetch("http://localhost:8080/customers").then((response) =>
        response.json()
      );
      return data;
    };
    fetchedData();
    // fetch("http://localhost:8080/customers")
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
  }, [setData]);

  return (
    <div>
      <h2>Sign In</h2>
      <h1>{data}</h1>

      {/* sign in form */}
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <form>
        <label>
          Password: {}
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignIn;
