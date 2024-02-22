import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
 

  useEffect(()=>{
    fetch("http://localhost:3000/user")
    .then((response)=>{
      return response.json()
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
