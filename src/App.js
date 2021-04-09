import React,{useEffect,useState} from 'react';
import './App.css';
import {LazyLoadImage} from 'react-lazy-load-image-component';


function App() {

  const [info,setInfo]=useState([]);
  useEffect(()=>{
    tryr();
  },[]);
 
  const tryr =async () =>{
   const response=await fetch('https://jsonplaceholder.typicode.com/posts');
  const data=await response.json();
    console.log(data);
    
    setInfo(data);
  }

  return (
  <div>
    {info.map(infop =>(
      <div className="image">
      <LazyLoadImage src={`https://avatars.dicebear.com/api/human/${infop.title}.svg`} key={infop.id}/>

      </div>
    )

    )
    }
  </div>);
}

export default App;
