const url = 'https://bryanthwong-portfolio-backend.herokuapp.com/api';

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