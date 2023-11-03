import React from 'react'
import"./Post.css"
import { Avatar } from '@mui/material';
import { Bookmark, ChatBubbleOutline, FavoriteBorder, MoreHoriz, Telegram } from '@mui/icons-material';
const Post=({user,postImage,likes,timestamp})=> {
  return (
    <div className='post'>
        <div className='post-header'>
          <div className='postAuth-head'>
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user}_  • <span>{timestamp}</span>
          </div>
         <MoreHoriz></MoreHoriz>
        
        </div>
        <div className='post-image'>
          <img src={postImage}></img>
        </div>
        <div className='post-footer'>
          <div className='pfooter-icons'>
            <div className='pfooter-main'>
              <FavoriteBorder className='posticon'></FavoriteBorder>
              <ChatBubbleOutline className='posticon'></ChatBubbleOutline>
              <Telegram className='posticon'></Telegram>


            </div>
            <div className='pfooter-save'>
            <Bookmark className='posticon'></Bookmark>

            </div>
          </div>
          Liked by {likes} People.

        </div>
   
    </div>
  )
}

export default Post;