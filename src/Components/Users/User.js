import React from "react"
import { useParams } from "react-router";
import PostList from '../Posts/PostList'

const User = () => {

    const {username} = useParams();
    console.log('username: ', username);

    return (
        <div>
            <h1>{username}'s posts</h1>
            <PostList />
        </div>
    )
}

export default User;