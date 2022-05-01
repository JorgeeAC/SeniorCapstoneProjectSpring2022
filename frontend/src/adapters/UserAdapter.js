
const backendUrl = "http://127.0.0.1:8000/api";
const usersRoute = backendUrl + '/users';

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


    static logIn(credentials){
        return fetch(usersRoute+`/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials)
        });
    }

    static getLoggedInUser(){
        return fetch(usersRoute+`/logged-in`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("access_key")
            }
        });
    }

    static getMechanicFromUserId(id){
        return fetch(backendUrl+'/mechanics/'+id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}