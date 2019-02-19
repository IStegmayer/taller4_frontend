class Auth {
    // constructor() {
    //     this.authenticated = false;
    // }

    async login(data) {
        return await fetch('http://127.0.0.1:5000/api/login', {
            method: 'POST',
            body: data,
          }).then(response => response.json())
          .then(response => 
            {
                // console.log(response);
                if (response['error']){
                    return response['error'];
                } else {
                    return true;
                }
            })
    }

}

export default new Auth();
