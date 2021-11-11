import React, { useState,useEffect } from "react"
import UserListItem from './UserListItem'
import { v4 as uuidv4 } from 'uuid';
import { Outlet } from "react-router-dom";
import AppDataApi from "../../AppDataApi";

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{

        async function getUserData(){

            let userData = await AppDataApi.getUsers();
            setUsers(userData);
        }
        getUserData();
    },[])


    return (
        <div className="mt-3">
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>User</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user)=>(<UserListItem key={(uuidv4())} username={user.name} userId={user.id}/>))}
                </tbody>
            </table>
            <Outlet/>
        </div>
    )
}

export default UserList;