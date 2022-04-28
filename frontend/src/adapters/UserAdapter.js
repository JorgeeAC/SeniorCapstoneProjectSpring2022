
const backendUrl = "http://127.0.0.1:8000/api";
const usersRoute = backendUrl + '/users';

/**
 * JWT_ADD: In all requests you want secure. Send the JSON token in the header.
 * Example:
*   headers: {
*       'Content-Type': 'application/json',
*       'Authorization': localStorage.getItem('authkey')
*    }
* 
 */


export default class UserAdapter {

    static createUser(userCredentials){
        return fetch(usersRoute, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userCredentials)
        });
    }

    static getUser(userId){
        return fetch(usersRoute+`/${userId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
    }

}