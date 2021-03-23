import Navbar from "../Navbar/Navbar";
import LandingPage from "../LandingPage/LandingPage";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import styled from "styled-components";
import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const NavDiv = styled.div`
  width: 100%;
  position: static;
  top: 0;
  overflow: hidden;
  background-color: darkgrey;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin: 10px;
  }

  ul li {
    margin: 10px;
  }
`;

const CountrySelection = styled.div`
  border-style: solid;
  border-color: grey;
  background-color: #fdfffc;
  padding: 4px;
  margin: 0 20px 0 auto;
  color: black;
`;

function App() {
  return (
    <Router>
      <NavDiv>
        <ul>
          <li>
            <Link to="/landingpage">Home</Link>
          </li>
          <li>Country</li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>Sign in</li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </NavDiv>

      {/* <Navbar /> */}
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
