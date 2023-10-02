import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8081/api/users';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

    addUser(user) {
        return axios.post(USERS_REST_API_URL, user);
      }
    
      deleteUser(id) {
        return axios.delete(`${USERS_REST_API_URL}/${id}`);
      }
    
      editUser(id, updatedUser) {
        return axios.put(`${USERS_REST_API_URL}/${id}`, updatedUser);
      }
}
export default new UserService();