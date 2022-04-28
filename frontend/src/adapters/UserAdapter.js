// Used for all backend calls regarding User.

const backendUrl = "http://127.0.0.1:8000/api";
const usersRoute = backendUrl + '/users'

export default class UserAdapter {

    static createUser(userCredentials){
        return fetch(usersRoute, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userCredentials)
        });
    }

}