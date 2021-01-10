import React,{ Component,useState } from 'react';
import './Home.css';
import SearchIcon from '@material-ui/icons/Search';
import Slide from 'react-reveal/Slide';
//import Modal from 'react-modal';
import Table from '../Table/Table';
import Page from '../page/page';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
        }
    }

    showFilter = ()=>{
        this.setState({show:true});
    }
    closemodal=()=>{
        this.setState({show:false});
    }

    render(){
        return(
<div className="home__page">
    <div className="home__head">
 <div>
  <h4>Home</h4>
</div>
<div className="filter__button">
<button>Add Policy</button>
<button>Update Policy</button>
<button>Delete</button>
<button onClick={this.showFilter}>Apply Filter</button>
</div>
    </div>
    {this.state.show && (
        
       
        <Slide top>
    <div className="apply__filter">
        <div className="filter__input">
            <p>Client Name:</p>
        <input type="text"></input>
        </div>
        <div className="filter__input">
            <p>Policy Number:</p>
        <input></input>
        </div>
        <div className="filter__input">
            <p>Policy Name:</p>
        <input></input>
        </div>
        <div className="filter__input">
            <p>Premium Size:</p>
        <input></input>
        </div>
        <div>
        <button >Download</button>
        </div>
        <div className="closemodal">
        <button className="close" onClick={this.closemodal} >
            x
        </button>
        </div>
    </div>
    </Slide>
    
    )}
    <div className="home__search">
        <div className="sort__button"><button>sort</button><ArrowDropDownIcon font-size="large" className="arrow"/></div>
        <div className="search__button"><input className="search" type="text" placeholder="search"/><SearchIcon font-size="large"className="icon"/></div>
    </div>

    <div className="table">
    <Table/>
    </div>
    
    
    



</div>


)}

} 
        
export default Home;        