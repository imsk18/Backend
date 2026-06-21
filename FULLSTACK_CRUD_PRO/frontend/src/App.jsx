import { useState,useEffect } from 'react'
import axios from "axios"


function App() {

  const [iplData, setiplData] = useState([
    {
      winnerTeam:"rcb",
      session:"2029"
    },
    {
      winnerTeam:"rcb",
      session:"2029"
    },
    {
      winnerTeam:"rcb",
      session:"2029"
    }
  ]);

  // console.log("hello");


  function fetchAllInfo(){
     axios.get("http://localhost:3000/api/fetch")
    .then((res)=>{
      console.log(res.data.iplInfo);
      
      setiplData(res.data.iplInfo)
    })
  }

  

  useEffect(()=>{
    fetchAllInfo()
   
  },[])

  function submitHandler(e){
    e.preventDefault()
    // console.log("clickd");
    
    const {winnerList, session} = e.target.element
    // console.log(winnerList.value,session.value);
    

  }

  return (
    <>
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <input name='winnerList' type="text" placeholder='team name'/>
        <input name='session' type="text"  placeholder='session'/>
        <button>create</button>
        
      </form>
    </div>
     
    <div className="info-container">
      {iplData.map((iplData)=>{
        return <div className="info">
          <h2>{iplData.winnerList}</h2>
          <h4>{iplData.session}</h4>
        </div>

      })}
     
    </div>

    
    </>
  )
}

export default App
