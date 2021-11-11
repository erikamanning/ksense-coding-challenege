import React from "react"
import './UserListItem.css'
import { Link } from "react-router-dom";

const UserListItem = ( {username}) => {

    return (
        <tr className='User'>
            <td>
                <Link to={`/users/${username}`}>{username}</Link>
            </td>
        </tr>
    )
}

export default UserListItem;