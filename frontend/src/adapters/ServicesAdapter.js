const backendUrl = "http://127.0.0.1:8000/api";
const servicesRoute=backendUrl + '/services';


export default class ServicesAdapter {
    static getServices() {
        return fetch(servicesRoute, {
            method: 'GET', 
            headers: { 'Content-Type': 'application/json' } 
        });
    }
}
