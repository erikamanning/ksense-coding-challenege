import React, { useEffect } from "react"
import UserListItem from './UserListItem'
import { v4 as uuidv4 } from 'uuid';
import { Outlet } from "react-router-dom";
import AppDataApi from "../../AppDataApi";

const UserList = ({users}) => {

    let userData;

    useEffect(()=>{

        async function getUserData(){

            let userData = await AppDataApi.getUsers();
            console.log('USERLIST -- userData: ', userData);
        }

        getUserData();

    },[])


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