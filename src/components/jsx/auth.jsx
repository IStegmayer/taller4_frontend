export default class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(data) {
        fetch('http://127.0.0.1:5000/api/login', {
            method: 'POST',
            body: data,
          }).then(response => response.json())
          .then(response => 
            {
                if (response['error']){
                    return response['error'];
                } else {
                    this.authenticated = true;
                    return true;
                }
            })
    }

    logout() {
        this.authenticated = false;
    }

    isAuthenticated() {
        return this.authenticated;
    }

    //TODO: aca pongo los datos del loco?
}
