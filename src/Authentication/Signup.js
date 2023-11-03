import React,{useState,useEffect,useContext} from 'react';
import "./Signup.css";

import axios from "axios";
import userContext from "../context/usercontext";
import { useNavigate } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';

const Signup=()=> {
    const [user, setUser] = useState({
        name:"", email: "", password: "", cpassword: ""
       });
       const {setToken} = useContext(userContext);
       const {name, email, password, cpassword} = user;
       const navigate=useNavigate();
      

       function handleInput(e){
             setUser({...user, [e.target.name]: e.target.value})
       }

       function handleSubmit(e){
        e.preventDefault();
        // validations: 
        if( !name || !email || !password || !cpassword){
            alert("All fields are required");
         }
         else if(password !== cpassword){
             alert("Passwords do not match");
         }
         else{
 
            axios.post("https://instagram-express-app.vercel.app/api/auth/signup" , {name,email,password})
            .then( response => {
                console.log(response.data);
                // from the context
                setToken(response.data.data.token);
 
                // add token to local storage
                localStorage.setItem("token", response.data.data.token);
                localStorage.setItem("mail",user.email);
 
                 alert("Signup successful");

               
               
                 navigate("/Home");
                
                
               
            
            })
 
            .catch( err=> alert("User already exits try to login") )
 
         }
     }





  return (
    <div className='signup'>

    <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
            alt=""
          />
         <form onSubmit={handleSubmit}>
                 <input type="text" className="input-field" placeholder="Enter your name" name = "name"
                    value={user.name} onChange={handleInput}
                 />
                 <input type="text" className="input-field" placeholder="Enter your email" name = "email"
                    value={user.email} onChange={handleInput} 
                 />
                 <input type="password" className="input-field" placeholder="Enter your password" name = "password"
                    value={user.password} onChange={handleInput}
                 />
                 <input type="password" className="input-field" placeholder="Enter your confirm password" name = "cpassword"
                    value={user.cpassword} onChange={handleInput}
                 />
                 <button className="signup-button" type="submit">Signup</button>
            </form>
        </div>
  )
}

export default Signup;