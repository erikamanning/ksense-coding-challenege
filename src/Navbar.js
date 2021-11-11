import React from "react"
import { NavLink } from "react-router-dom";

const Navbar = () => {


    return (
        <div>
            <span>Hello i am the navbar</span>
            <NavLink to='/'>
                Users
            </NavLink>
        </div>
    )
}

export default Navbar;