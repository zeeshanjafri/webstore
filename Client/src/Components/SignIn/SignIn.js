import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./signin.css";

function SignIn() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [details, setDetails] = useState({ name: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(details.name, details.password);

    fetch(`http://localhost:8080/customers/${details.name}`)
      .then((res) => res.json())
      .then((x) => {
        if (
          String(x[0].login) == details.name &&
          String(x[0].password) == details.password
        ) {
          alert("LOGGED IN");
          localStorage.setItem("currentUser", x[0].login);
          window.location = "/LandingPage";
        } else {
          alert("INCORRECT USERNAME/PASSWORD");
        }
      });
  };
  return (
    <div class="signin">
      {/* <h2>{localStorage.getItem('currentUser')}</h2> */}
      <h2>Sign In</h2>
      <form class="login-form" id="myForm" onSubmit={submitHandler}>
        <div class="flex-row">
          <label class="lf--label" for="username">
            <svg x="0px" y="0px" width="12px" height="13px">
              <path
                fill="#B1B7C4"
                d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z"
              />
            </svg>
          </label>
          <input
            id="username"
            class="lf--input"
            placeholder="Username"
            type="text"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          ></input>
        </div>
        <div class="flex-row">
          <label class="lf--label" for="password">
            <svg x="0px" y="0px" width="15px" height="5px">
              <g>
                <path
                  fill="#B1B7C4"
                  d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"
                />
              </g>
            </svg>
          </label>
          <input
            id="password"
            class="lf--input"
            placeholder="Password"
            type="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          ></input>
        </div>
        <input
          class="lf--submit"
          type="submit"
          value="LOGIN"
          id="login"
        ></input>
      </form>
    </div>
  );
}

// const [name, setName] = useState({ name: "", pass: "" });

// const { data, loading } = useFetch(`http://localhost:8080/customers/${name}`);

// var data = "";

// const [state, setState] = useState([]);

// const fetchUser = async () => {
//   const apiCall = await fetch("http://localhost:8080/customers");
//   // const user = await apiCall.json();
//   console.log(apiCall.json());
//   setState(apiCall);
// }

// useEffect(() => {
//   fetchUser();
// }, [state]);

// state.map((postData) => {
//   data = postData;
// });

// return (
//   <div>
//     <p>
//       {}
//     </p>
//   </div>
// );

// const Submit = e => {
//   e.preventDefault()
//   // console.log("SUBMIT", e);
//   fetch("http://localhost:8080/customers")
//     .then(data => data.json())
//     .then(json => setState(json))
//     .then(res => { console.log(res.ok) })

//   // useEffect(() => {
//   //   e.preventDefault()
//   //   console.log("SUMBIT", e);
//   //   fetch("http://localhost:8080/customers")
//   //     .then(res => res.json())
//   //     .then(json => setState(json))
//   //     .then(res => { console.log(res) })
//   //     // .then(resp => console.log("RESP:",JSON.parse(resp)))
//   // }, [state]);
// }

// const getLogin = async () => {
//   const apiCall = fetch("http://localhost:8080/customers");

//   apiCall.then((res) => console.log("res", res));
//   // apiCall.then((res) => setSta);

//   console.log(apiCall);

//   return apiCall;

// }
// console.log("LOGIN");
// const [state, setState] = useState([]);

// async function fetchData(username) {
//   fetch("http://localhost:8080/customers")
//     .then((res) => res.json())
//     .then((res) => setState(res));
// }

// useEffect(() => {
//   fetchData();
// }, [state]);

// return;

// useEffect(() => {
//   fetch("http://localhost:8080/customers")
//     .then((res) => res.json())
//     .then((res) => setState(res));
//   console.log(state);
// }, [state]);
// }

// function getLogin() {
//   var name = document.getElementById('username').value;
//   fetch("http://localhost:8080/customers/" + name)
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// const [state, setState] = useState([]);
// useEffect(() => {
//   // var name = document.getElementById('username');
//   // console.log(name.value);
//   fetch("http://localhost:8080/customers")
//     .then((res) => res.json())
//     .then((res) => setState(res));
//   console.log(state);
//   // state.map((postData) => {
//   //   console.log(postData);
//   // });
// }, [state]);

// var username = document.getElementById('username').value;

// state.map((postData) => {
//   // console.log(postData.login);
//   if (username && postData.login == username) {
//     console.log("postData", postData);
//   }
//   // console.log(postData);
// });
// return (
//   <div>
//     <p>HELLO</p>
//   </div>
// );

// }

export default SignIn;
// export default getLogin;
