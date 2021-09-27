import React from 'react';
import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom';



const Navbar = () =>
{
   return (
       <>
       <NavLink exact activeClassName = "active_class" to = '/'>About Us</NavLink>
       <NavLink exact activeClassName = "active_class" to = '/contact'>Contact Us</NavLink>
       <NavLink exact activeClassName = "active_class" to = '/User/vaibhav/sachdeva'>User</NavLink>
       <Link to = '/contact/name'>Cname</Link>
         
       </>
   )
};
export default Navbar;


// if u use navlink instead of link u have a another functionality of active-class 