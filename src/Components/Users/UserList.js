import React from "react"
const { uuid } = require('uuidv4');

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
                    {users.map((user)=>{console.log('User: ', user)})}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;