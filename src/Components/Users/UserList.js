import React from "react"
import UserListItem from './UserListItem'
import { v4 as uuidv4 } from 'uuid';
import { Outlet } from "react-router-dom";

const UserList = ({users}) => {

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>User</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user)=>(<UserListItem key={(uuidv4())} username={user}/>))}
                </tbody>
            </table>
            <Outlet/>
        </div>
    )
}

export default UserList;