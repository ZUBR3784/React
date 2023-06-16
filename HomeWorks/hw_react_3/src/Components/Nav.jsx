import React from 'react'

import { NavLink } from "react-router-dom";

// activeClassName / activeStyle
function Nav() {
  return (
    <>
      <NavLink to="/"> Home</NavLink>
      <NavLink
        to="/posts">
       All posts
      </NavLink>
      <NavLink
        to="/posts/:id"  
      >
        My post
      </NavLink>
    </>
  );
}

export default Nav;