import React from 'react'
import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from '@mui/material';
import axios from "axios";
import userContext from '../../context/usercontext';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';


const Sidenav=()=> {
  const {token,setToken} = useContext(userContext)
  const navigate = useNavigate();

  async function handleLogout(){
    try{
       const response = await   axios.delete("https://instagram-express-app.vercel.app/api/auth/logout",{
              headers: {
                  authorization:  `Bearer ${token}`
              }
          })
          console.log("Logout",response.data)
          setToken(null)
         
          // remove token from local storage 
          localStorage.removeItem("token");
          localStorage.clear();
          navigate("/")
    }
      catch(e){
          console.log(e)
      }
}

  
  return (
    <div className='Sidenav'>
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <div className='sidenav-buttons'>

        <button className='side-btn'>
          <HomeIcon></HomeIcon>
          <span>Home</span>
          
        </button>
        <button className='side-btn'>
          <SearchIcon></SearchIcon>
          <span>Search</span>
          
        </button>
        <button className='side-btn'>
          <ExploreIcon></ExploreIcon>
          <span>Explore</span>
          
        </button>
        <button className='side-btn'>
          <SlideshowIcon></SlideshowIcon>
          <span>Reels</span>
          
        </button>
        <button className='side-btn'>
          <ChatIcon></ChatIcon>
          <span>Messages</span>
          
        </button>
        <button className='side-btn'>
          <FavoriteBorderIcon></FavoriteBorderIcon>
          <span>Notifications</span>
          
        </button>
        <button className='side-btn'>
          <AddCircleOutlineIcon></AddCircleOutlineIcon>
          <span>Create</span>
          
        </button>
        <button className='side-btn avatar'>
              <Avatar></Avatar>
             <span>{localStorage.getItem("mail").replaceAll("\"","")}</span>
             
        </button>
        <button className='logout' onClick={handleLogout}>logout</button>
      </div>
      <div className='sidenav-more'>
        <button className='side-btn'>
          <MenuIcon></MenuIcon>
          <span>More</span>
        </button>
      </div>
      </div>
  )
}

export default Sidenav;