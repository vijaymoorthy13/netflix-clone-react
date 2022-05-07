import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "./Nav.css"; 

function Nav() {

  const [show,handleShow]  = useState(false);

  const transistionNavBar = () =>{
      if(window.scrollY > 100) {
          handleShow(true);
      }else{
          handleShow(false)
      }
  }

  useEffect(() =>{
     window.addEventListener("scroll",transistionNavBar);
     return() => window.removeEventListener("scroll",transistionNavBar);
  },[])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__contents'>
           <Link to="/">
           <img           
            className='nav__logo'
           src='https://pngimg.com/uploads/netflix/netflix_PNG25.png'
           alt=''
           />
           </Link>
           <Link to="/profile">
           <img            
            className='nav__avatar'
           src='https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg'
           alt=''
           />
           </Link>
        </div>
    </div>
  )
}

export default Nav