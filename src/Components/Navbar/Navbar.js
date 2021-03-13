import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
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
