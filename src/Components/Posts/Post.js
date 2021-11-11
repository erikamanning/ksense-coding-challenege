import React, {useContext} from "react"
import {UserContext} from '../Users/User'
import { getRandImage } from "../../imageHelpers"

const Post = ({post}) => {

    const {user} = useContext(UserContext);
    const randImage = getRandImage();

    return (

        <div className="card mb-2">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={randImage} alt='rand-scenery'/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4 is-capitalized">{post.title}</p>
                        <p className="subtitle is-6">@{user.username}</p>
                    </div>
                </div>
                <div className="content">
                    {post.body}
                </div>
            </div>
        </div>

    )
}

export default Post;