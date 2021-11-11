import React from "react"
import { v4 as uuidv4 } from 'uuid';
import Post from './Post'

const PostList = () => {

    const posts = [
        {
            title:'Favorite Dogs'
        },
        {
            title:'Favorite Cats'
        },
        {
            title:'Favorite Birds'
        }
    ]


    return (
        <div>
            Posts:

            <ul>
                {posts.map(post=>(<Post key={uuidv4()} title={post.title}/>))}
            </ul>

        </div>
    )
}

export default PostList;