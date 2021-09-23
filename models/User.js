const url = 'http://localhost:4000/api';

class UserModel {
    static show(id){
        return fetch(`${url}/users/${id}`).then(response=>response.json())
    }

    static update(id,data){
        return fetch(`${url}/users/${id}`,{
            method:'PUT',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json',
            },
        }).then(response=>response.json())
    }

    static destroy(id){
        return fetch(`${url}/users/${id}`,{
            method:'DELETE',
        }).then(response=>response.json())
    }
}

export default UserModel;