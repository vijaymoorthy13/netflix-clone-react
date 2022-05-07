 import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import "./profileScreen.css"

function ProfileScreen() {

  const user = useSelector(selectUser);
  const handleLogout = () => {
    if (window.confirm("Wanna break up with us :(")) {
      auth.signOut();
    }
  };


  return (
    <div className='profileScreen'>
        <Nav/>  
        <div className='profileScreen__body'>
          <div className='gohome'>
             <h1>Edit Profile</h1>
             <Link to="/" style={{textDecoration:"none"}}>
             <h3 className='gohome__button'>Go Home</h3>
             </Link>
             </div>
             <div className='profileScreen__info'>
                 <img 
                 src='https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg'
                 alt=''
                 />
                 <div className='profileScreen__details'>
                     <h2>{user.name}</h2>
                     <div className='profileScreen__plans'>
                       <h3>Plans(Current Plan : Premium)</h3>
                          <div className='profileScreen__planList'>
                            <span>Renewal Date: 10 days left </span>
                             <div className='plans'>
                                <h4>Netflix Standard
                                  <span className='plan__pixel'> 1080p</span>
                                </h4>                                
                                <button className='subscribe__button'>Subscribe</button>                                
                              </div>
                              <div className='plans'>
                                <h4>Netflix Basic
                                <span className='plan__pixel'> 480p</span>
                                </h4>
                                <button className='subscribe__button'>Subscribe</button>                                
                              </div>
                              <div className='plans'>
                                <h4>Netflix Premium
                                <span className='plan__pixel'> 4K+HDR</span>
                                </h4>
                                <button className='subscribe__button__current'>Current Package</button>                                
                              </div>
                          </div>
                          <button onClick={handleLogout}
                          className='profileScreen__signOut'>
                              Sign Out
                          </button>
                     </div>
                 </div>
             </div>
        </div>
    </div>

  )
}

export default ProfileScreen


