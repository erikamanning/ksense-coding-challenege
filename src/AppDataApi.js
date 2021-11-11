import axios from "axios";
const API_URL = 'https://jsonplaceholder.typicode.com/'

class AppDataApi{

    static async getUsers(){
        try{

            let resp = await axios.get(`${API_URL}users`);
            console.log('RESPONSE: ', resp);
            return resp.data;
        }
        catch(error){
            console.log('ERROR: ', error);
        }
    }

}

export default AppDataApi;