import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";


function App() {
  const [test,setData] = useState(null)
  useEffect(
    function(){
      fetch('http://localhost:4000/jsontest')
      .then(response=>{
        console.log(response)
        return response.json()
      }
        )
      .then(data=>
        {
          setData(data)
        })
    },[])
  return (
    <div className="App">
      {
         test?(
          <h1>{test.test}</h1>
        ):(
          <h3>loading...</h3>
        )
      }
    </div>
  );
}

export default App;
