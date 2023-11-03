import { Avatar } from '@mui/material';
import React from 'react';
import"./Suggested.css"

const Suggested=()=> {
  return (
    <div className='suggestions'>
      <div className='suggestions-title'>Suggestions for You</div>
      <div className='suggestions-username'>


        <div className='suggest-name'>
          <div className='username-left'>
            <span className='avatar'>
              <Avatar>R</Avatar>
            </span>
            <div className='username-info'>
              <span className='username'>Deep</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow-button'>Follow</button>
        </div>

        <div className='suggest-name'>
          <div className='username-left'>
            <span className='avatar'>
              <Avatar>R</Avatar>
            </span>
            <div className='username-info'>
              <span className='s-username'>Deep</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow-button'>Follow</button>
        </div>

        <div className='suggest-name'>
          <div className='username-left'>
            <span className='avatar'>
              <Avatar>R</Avatar>
            </span>
            <div className='username-info'>
              <span className='username'>Deep</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow-button'>Follow</button>
        </div>

        <div className='suggest-name'>
          <div className='username-left'>
            <span className='avatar'>
              <Avatar>R</Avatar>
            </span>
            <div className='username-info'>
              <span className='username'>Deep</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow-button'>Follow</button>
        </div>
       
      </div>
    </div>
  )
}

export default Suggested;