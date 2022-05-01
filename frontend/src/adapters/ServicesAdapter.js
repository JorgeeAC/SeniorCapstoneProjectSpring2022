const backendUrl = "http://127.0.0.1:8000/api";
const servicesRoute=backendUrl + '/services';
const jobsRoute=backendUrl + '/jobs';


export default class ServicesAdapter {
    static getServices() {
        return fetch(servicesRoute, {
            method: 'GET', 
            headers: { 'Content-Type': 'application/json' } 
        });
    }

    static getCurrentJob() {
        return fetch(jobsRoute+'/current-job', {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("access_key")
             }
        })
    }

    static getJobRequests() {
        return fetch(backendUrl+'/jobs-requests', {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
             }
        })
    }

    static createJobRequest(body){
        return fetch(backendUrl+'/jobs-requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("access_key")
            },
            body: JSON.stringify(body)
        })
    }

    static claimJobRequest(body){
        return fetch(jobsRoute, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("access_key")
            },
            body: JSON.stringify(body)
        })
    }
}
