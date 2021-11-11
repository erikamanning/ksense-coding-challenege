import axios from "axios";
const API_URL = 'https://jsonplaceholder.typicode.com/'

class AppDataApi{

    static async getUsers(){
        try{

            let resp = await axios.get(`${API_URL}users`);
            return resp.data;
        }
        catch(error){
            console.log('ERROR: ', error);
        }
    }
    static async getUserData(userId){
        try{

            let resp = await axios.get(`${API_URL}users/${userId}`);
            return resp.data;
        }
        catch(error){
            console.log('ERROR: ', error);
        }
    }
    static async getUserPosts(userId){
        try{

            let resp = await axios.get(`${API_URL}users/${userId}/posts`);
            return resp.data;
        }
        catch(error){
            console.log('ERROR: ', error);
        }
    }

}

export default AppDataApi;