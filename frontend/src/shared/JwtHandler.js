export default class JWTHandler {

    static storeJwtToken(jwtToken){
        localStorage.setItem('access_key', jwtToken.access);
        localStorage.setItem('refresh_key', jwtToken.refresh)
    }
}