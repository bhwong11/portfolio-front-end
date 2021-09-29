const url = 'https://bryanthwong-portfolio-backend.herokuapp.com/api/';

class Auth{
    static register(data){
        return fetch(`${url}/register`,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json',
            }
        }).then(response=>response.json())
    }

    static login(data){
        return fetch(`${url}/login`,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response=>response.json())
    }
}

export default Auth