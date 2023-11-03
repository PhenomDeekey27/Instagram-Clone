import React,{useEffect, useState} from 'react'
import "./authentication.css"
// import Login from './Login';
import Signup from "./Signup";
import Login from './Login';
import { useNavigate } from 'react-router-dom';


const Authentication=()=> {
 
  const navigate = useNavigate();
  let token=localStorage.getItem("token");

  useEffect(()=>
  {
    if(token) navigate("/Home");
  
  }
  ,[token])
 
  
    const[active,Setactive]=useState("login");
  
    function handleChange(){
    Setactive(active==="login"?"signup":"login")
    console.log("clicked");
   
    
  }
  


  return (
   <div className='authentication'> 
    <div className='auth-left'>
      <img
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt="Instagram Screenshots"
        />
      </div>
     <div className='auth-right'>
     { active==='signup' ? (<Signup></Signup>) : (<Login></Login>)}
      
     <div className='auth-more'>
          { active==="login" ? 
           ( <span>Don't have an account 
                <button onClick={handleChange}>Signup</button>
            </span>): (<span>Have have an account 
                <button onClick={handleChange}>Login</button>
            </span>)
}
        </div>

     </div>
     

   </div>
  )
}

export default Authentication;
