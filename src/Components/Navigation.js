import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/support">Contact</NavLink>
          <NavLink to="/patch">Patch</NavLink>
       </div>
    );
}
 
export default Navigation;