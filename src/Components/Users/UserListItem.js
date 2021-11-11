import React from "react"
import './UserListItem.css'
import { useNavigate } from "react-router-dom";

const UserListItem = ( {username,userId}) => {

    const navigate = useNavigate();

    const handleClick = () => {

        navigate(`/users/${userId}`);
    }

    return (
        <tr className='User' onClick={handleClick}>
            <td>
                {username}
            </td>
        </tr>
    )
}

export default UserListItem;