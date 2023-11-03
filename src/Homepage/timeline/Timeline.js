import React, { useState } from 'react';
import "./Timeline.css";
import Post from "./posts/Post"
import Suggested from './Suggested';
const Timeline=()=> {
  const[posts,Setpost]=useState([
    {
      user:"phenomDeekey",
      postImage:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      likes:100,
      timestamp:"1d",
    },
    {
      user:"Vijay",
      postImage:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      likes:50,
      timestamp:"2d",
    },
    {
      user:"Vinayak",
      postImage:"https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww",
      likes:70,
      timestamp:"3d",
    },
    {
      user:"Kamal",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&usqp=CAU",
      likes:100,
      timestamp:"4d",
    },

  ])
  return (
    <div className='Timeline'>
      <div className='Timeline-left'>
        <div className='timeline-posts'>
        {
          posts.map((post=>(<Post
          user={post.user}
          postImage={post.postImage}
          likes={post.likes}
          timestamp={post.timestamp}
          ></Post>)))
        }
        </div>
      </div>
      <div className='Timeline-right'>
        <Suggested></Suggested>
        
      </div>
    </div>
  )
}

export default Timeline