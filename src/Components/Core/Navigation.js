import React from "react"
import { Outlet, Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {


        return (
            <div className='mt-0'>
                <nav className='Navigation pb-4 mt-0'>
                    <Link to="/home">Home</Link> |{' '}
                    <Link to="/users">Users</Link>
                </nav>
              <Outlet />
            </div>
        )
    
}

export default Navigation;