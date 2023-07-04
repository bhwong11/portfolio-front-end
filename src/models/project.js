//api no longer working do to heroku not supporting free tier
//update to firebase
const url = 'https://bryanthwong-portfolio-backend.herokuapp.com/api';

class ProjectModel{
    static all(){
        return fetch(`${url}/projects`).then(
            response=>response.json(),
            _=>({
                "projects": [
                {
                "_id": "6153a39d82b7f9fa0a770b7b",
                "title": "R. Bergen Art Portfolio",
                "description": "(Django, Python, Postgresql, DTL, Javascript, Twilio API, AllAuth)\nArt portfolio for St. Paul Artist Ransom Bergen where users can view artworks, products, login to leave reviews, and chat live with the artist.\n",
                "liveLink": "https://artist-ransom-bergen.herokuapp.com/",
                "github": "https://github.com/bhwong11/artist-profile",
                "image": "https://i.imgur.com/TzIhwxd.png",
                "__v": 0
                },
                {
                "_id": "6153a50c82b7f9fa0a770b81",
                "title": "Wayfarer",
                "description": "(Django, Python, Postgresql, DTL, Javascript) \t\t\t\t\t\nA travel application where users can log in to leave posts about their experience in a city.\n",
                "liveLink": "https://travel-wayfarer.herokuapp.com/",
                "github": "https://github.com/bhwong11/wayfarer",
                "image": "https://i.imgur.com/fTq64JW.png",
                "__v": 0
                },
                {
                "_id": "6153a55b82b7f9fa0a770b87",
                "title": "Projectly",
                "description": "(Express, Node.js, MongoDB, Mongoose, bootstrap 5, javascript, Sass ) A project management application where users can create accounts, tasks, and groups of tasks, with a timer on how long to complete a task. Completed in a team of 2 within one week.",
                "liveLink": "https://projectlybryant.herokuapp.com/",
                "github": "https://github.com/bhwong11/Projectly",
                "image": "https://i.imgur.com/9VTBSBG.png",
                "__v": 0
                },
                {
                "_id": "6153a5b982b7f9fa0a770b90",
                "title": "Pokemon Pet Game",
                "description": "(JavaScript, HTML, CSS, JQuery, animate.css, Pokemon Web API) A game where a user needs to prevent a pet from fainting by pushing buttons at certain time intervals",
                "liveLink": "https://bhwong11.github.io/tomagotchigame/",
                "github": "https://github.com/bhwong11/tomagotchigame",
                "image": "https://i.imgur.com/x44VFGe.png",
                "__v": 0
                },
                {
                "_id": "617334a5ecd6dd3a2ede6358",
                "title": "Quiz App",
                "description": "(Reactjs, Redux, Nodejs, Typescript,  MongoDB, NoSql)A quiz game where users can play trivia quiz games of various difficulty, save scores, and see top ranking players. ",
                "liveLink": "https://quiz-bryant-wong.netlify.app/",
                "github": "https://github.com/bhwong11/react-quiz",
                "image": "https://i.imgur.com/D2YVV9L.png",
                "__v": 0
                },
                {
                "_id": "61ef1178e98c0be14de77ab3",
                "title": "Ecommerce Store",
                "description": "(Reactjs, TypeScript, Redux, React Stripe, GraphQL, Nodejs, Express, MongoDB)\n\nAn Ecommerce Store where users can buy products and leave reviews, and admin users can create products and product categories",
                "liveLink": "https://epic-snyder-8d233b.netlify.app/",
                "github": "https://github.com/bhwong11/ecommerce-frontend",
                "image": "https://i.imgur.com/nc8Kws9.png",
                "__v": 0
                }
                ]
                })
        );
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