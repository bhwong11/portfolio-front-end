const url = 'http://localhost:4000/api';

class MailModel{
    static send(data){
        return fetch(`${url}/mail/send`,{
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json',
            }
        })
    }
}

export default MailModel;