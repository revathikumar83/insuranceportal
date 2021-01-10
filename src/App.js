
import React,{  Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link,NavLink } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
//import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Policy from './components/Policy/Policy';
import Report from './components/Report/Report';

class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
        
      <Header/>
      <main>
      <Route path="/home" component={Home} />
      <Route path="/policy" component={Policy}/>
      <Route path="/reports" component={Report}/>
        </main> 
      <footer>@powered by appyherlper</footer>    
        
    </div>
    </BrowserRouter>
  );
  }
}


export default App;
