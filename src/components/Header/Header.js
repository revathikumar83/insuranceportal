import React,{ Component } from 'react';
import { BrowserRouter, Route, Link,NavLink } from "react-router-dom";
import './Header.css';
//import images from '../../../public/images';



class Header extends Component{
render(){
    return(

  
    <header>
        <div className="navbar">
        <div className="image">
          <div className="logo">
            appyhelper
        {/*<img className="logo" src=""
         width="150px" height="100px" alt="appyhelper"
        />*/}
       </div>
       <div className="navpara__flex">
          <p className="navpara"> <Link to="/home" className="link1">Home</Link></p>

          <div className="dropdown">
          <p  className="policy dropbtn"><Link to="/policy" className="link1">Policy</Link>
          <div className="dropdown-content">
          <Link to="/policy/upcoming" className="linky">Upcoming</Link>
          <Link to="/policy/converted" className="linky">Converted</Link>
          <Link to="/policy/category" className="linky">Category</Link>
         </div>
         </p>
         </div>
         
           {/*<ArrowDropDownIcon fontSize="medium" className="arrow"/>*/}
          <p className="policy navpara"><Link to="/reports" className="link1">Reports</Link></p>
          </div>   
        </div>
        <div className="nav">
          
          <p>signout</p>
        </div>
        </div>
    </header>

)
}
}

export default Header;