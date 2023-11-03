import React, { useState } from 'react';
import Suggested from './Homepage/timeline/Suggested';


import Authentication from './Authentication/authentication';
import Homepage from './Homepage/Homepage';
import { Route,Routes } from 'react-router-dom';

const App=()=> {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Authentication ></Authentication>}></Route>
        <Route path='/Home' element={<Homepage></Homepage>}></Route>
       


      </Routes>
     
      </div>
  )
}

export default App;