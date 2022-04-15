import React,  {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import SchLogo from '../assets/epitome-school-logo-bckgrnd-246x300.png'
import fIcon from '../assets/Icon feather-user.svg'
import classes from './NavBar.module.css';
import './NavBar.css'
// import classes from './AdmissionForm.module.css';


function NavBar() {
  const [click , setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
   <nav>
        <div  className={classes.navCont}>
          <div className={classes.imgCont}>
            <Link to={'/'}>
                        <img src={SchLogo} alt=" logo" className={classes.imgContent}  />
            </Link>
          </div>
              <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}      />
            </div>
            <ul  className={click ? "nav-list active" : "nav-list"}>
              <li>
                <NavLink to={'/academics'}  onClick={closeMobileMenu}>
                        ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} onClick={closeMobileMenu}>
                  ACADEMICS
                </NavLink>
              </li>
              <li>
              <NavLink to={'/'} onClick={closeMobileMenu}>
                      LEARNING
                </NavLink>
             </li>
              <li>
                <NavLink to={'/'} onClick={closeMobileMenu}>
                      SCHOOL LIFE
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} onClick={closeMobileMenu}>
                    NEWS
                </NavLink>
              </li>
              <li> 
                <NavLink to={'/'} onClick={closeMobileMenu}>
                      GALLERY
                </NavLink>
              </li>
              <li>
                <button className={classes.btnPortal} >
                  <img src={fIcon} alt="person"  className={classes.fIcon} />
                  Portal</button>
              </li>
            </ul>
      </div>
   </nav>
  )
}

export default NavBar