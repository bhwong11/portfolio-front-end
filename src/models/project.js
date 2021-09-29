const url = 'https://bryanthwong-portfolio-backend.herokuapp.com/api';

class ProjectModel{
    static all(){
        return fetch(`${url}/projects`).then(response=>response.json());
    }
    static show(id){
        return fetch(`${url}/projects/${id}`).then(response=>response.json());
    }
    static create(data){
        return fetch(`${url}/projects`,{
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json',
            }
        })
    }
    static update(id,data){
        return fetch(`${url}/projects/${id}`,{
            method:'PUT',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json',
            }
        })
    }
    static destroy(id){
        return fetch(`${url}/projects/${id}`,{
            method:'DELETE'
        }).then(response=>response.json())
    }
}

export default ProjectModel;