import React, {useState,useEffect} from "react"
import { useParams } from "react-router";
import PostList from '../Posts/PostList'
import AppDataApi from "../../AppDataApi";
const UserContext = React.createContext();

const User = () => {

    const {userId} = useParams();
    const [posts,setPosts] = useState(false);
    const [user,setUser] = useState(false);

    useEffect(()=>{

        async function getUserData(){

            let userData = await AppDataApi.getUserData(userId);
            setUser(userData);
        }
        async function getUserPosts(){

            let postData = await AppDataApi.getUserPosts(userId);
            setPosts(postData);
        }
        
        if(!user)
            getUserData(userId);
        if(!posts)
            getUserPosts();
    },[userId,posts, user])

    return (
        <div className='mt-3'>
            <UserContext.Provider value={{user}}>

            {user ? 
                <h1 className='title is-3'>{user.name}'s posts</h1> : null            
            }

            {posts ? <PostList posts={posts}/> : null}
            </UserContext.Provider>
        </div>
    )
}

export default User;
export {UserContext};
