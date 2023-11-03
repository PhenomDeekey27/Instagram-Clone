import React, {useState, useContext} from "react";
import axios from "axios";
import userContext from "../context/usercontext";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Homepage from "../Homepage/Homepage";

const Login = () => {
    const [user, setUser] = useState({
     email: "", password: ""
    })
    const [error,Seterror]=useState(false)
    const[errormsg,Seterrormsg]=useState();
   
 
    const {setToken} = useContext(userContext);
   
 
    const {email, password} = user;

    const navigate=useNavigate();
    
   function handleInput(e){
    setUser({...user, [e.target.name]: e.target.value})
}

function handleSubmit(e){
  e.preventDefault();
  // validations: 
  if(  !email || !password ){
      alert("All fields are required");
   }
   else{

      axios.post("https://instagram-express-app.vercel.app/api/auth/login/" , {email,password})
      .then( response => {
           console.log(response.data);
          
           // from the context
           setToken(response.data.data.token);
           // add token to local storage
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("mail",user.email)
          alert("Login successful");
          
          navigate("/home")
        

      })

      .catch( (err)=> {
         alert(err.response.data.message);
         Seterror(true);
         Seterrormsg(err.response.data.message)
      })

   }

}

return (
    <div className='login'>
    <img
   src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
   alt=""
 />
 {
   error&&
 <div style={{color:"red",textAlign:"center"}}>
   <p>{errormsg}</p>
   
 </div>


}

{/* {
   login && 
   <div style={{color:"green",textAlign:"center"}}>
      <p>Login Successful</p>
      {Seterror(false)}
   </div>
} */}

  <form onSubmit={handleSubmit}>
                 
                 <input type="text" className="input-field" placeholder="Enter your email" name = "email"
                    value={user.email} onChange={handleInput} 
                 />
                 <input type="password" className="input-field" placeholder="Enter your password" name = "password"
                    value={user.password} onChange={handleInput}
                 />
                 
                 <button className="login-button" type="submit">Login</button>
            </form>


</div>

)

}
export default Login;