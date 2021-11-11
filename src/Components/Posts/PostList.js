import React from "react"
import { v4 as uuidv4 } from 'uuid';
import Post from './Post'

const PostList = ({posts}) => {

    return (
        <div>
            {posts.map(post=>(<Post key={uuidv4()} post={post}/>))}
        </div>
    )
}

export default PostList;