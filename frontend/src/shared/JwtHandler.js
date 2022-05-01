export default class JWTHandler {

    static storeJwtToken(jwtToken){
        localStorage.setItem('access_key', jwtToken.access);
        localStorage.setItem('refresh_key', jwtToken.refresh)
    }

    static deleteJWTToken(){
        localStorage.removeItem('access_key');
        localStorage.removeItem('refresh_key')
    }
}