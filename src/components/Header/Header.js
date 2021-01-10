import React,{ Component } from 'react';
import { BrowserRouter, Route, Link,NavLink } from "react-router-dom";
import './Header.css';




class Header extends Component{
render(){
    return(

  
    <header>
        <div className="navbar">
        <div className="image">
          <div>
        <img className="logo" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8wPC-eR2Ulm3OksVKMikDK_wKosE7phjEQ&usqp=CAU"
        />
       </div>
       <div className="navpara__flex">
          <p className="navpara"> <Link to="/home" className="link">Home</Link></p>

          <div className="dropdown">
          <p  className="policy dropbtn"><Link to="/policy" className="link">Policy</Link>
          <div className="dropdown-content">
          <Link to="/policy/upcoming" className="linky">upcoming</Link>
          <Link to="/policy/converted" className="linky">converted</Link>
          <Link to="/policy/category" className="linky">category</Link>
         </div>
         </p>
         </div>
         
           {/*<ArrowDropDownIcon fontSize="medium" className="arrow"/>*/}
          <p className="policy navpara"><Link to="/reports" className="link">Reports</Link></p>
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