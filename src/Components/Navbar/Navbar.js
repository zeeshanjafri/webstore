import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const StyledButton = styled(Button)`
  margin: 0 5px 0 0;
  color: white;
`;

const StyledToolbar = styled(Toolbar)`
  background-color: #403f4c;
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 60px 0;
`;

const CountrySelection = styled.div`
  border-style: solid;
  border-color: grey;
  background-color: #fdfffc;
  padding: 4px;
  margin: 0 20px 0 auto;
  color: black;
`;

const StyledInputBase = styled(InputBase)`
  color: white;
  padding: 5px;
`;

function Navbar() {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Webstore</Typography>
        <SearchBar>
          <SearchIcon />
          <StyledInputBase placeholder="Search..." />
        </SearchBar>
        <CountrySelection>Ca</CountrySelection>
        <StyledButton>Cart</StyledButton>
        <StyledButton>Login</StyledButton>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;

// <NavDiv>
//   <li>Store Name</li>
//   <li>Search Bar</li>
//   <li>Country</li>
//   <li>Cart</li>
//   <li>Sign in</li>
//   <li></li>
// </NavDiv>

// const NavDiv = styled.div`
//   width: 100%;
//   position: fixed;
//   top: 0;
//   overflow: hidden;
//   background-color: darkgrey;
//   display: flex;
//   flex-direction: row;
// `;
