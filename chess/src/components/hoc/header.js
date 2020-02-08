import React, { Component } from 'react';
import logo from '../../images/logo.png';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {log} from "../actions/memberactions"
class Header extends Component {
  
   logoutuser=()=>{
       this.props.dispatch(log()).then(res=>{
           console.log('logout')
       }).catch(err=>
        console.log(err)
        )
   }
    render() {
        return (
  
<div className='header'>

<p id="logo">STUDENT ACADEMIC DEPOSITORY</p>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <a className="navbar-brand" href="#">  <img src={logo} alt="logo" style={{width:'40px'}}/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <Link className ="nav-link"  to="/">HOME</Link>
                  </li>
                  <li className="nav-item">
                  <Link className ="nav-link"  to="/register">Register</Link>    
                  </li>
                  {this.props.user.member?
                  <ul className="navbar-nav">
                  {
                    !this.props.user.member.loginSuccess?
                    <li className="nav-item">
                <Link className ="nav-link" to="/login">LOGIN</Link>
                </li>
                :
                <li className="nav-item">
                <Link className ="nav-link" to="/logout" onClick={(event)=>this.logoutuser()}>LOGOUT</Link>
                </li> 
                } 
                { 
                    !this.props.user.member.loginSuccess?
                    null
                :
                <li className="nav-item">
                <Link className ="nav-link" to="/award" >Add your Awards</Link>
                </li> 
                }
                
                { 
                    !this.props.user.member.loginSuccess?
                    null
                :
                <li className="nav-item">
                <Link className ="nav-link" to="/show">See your CV</Link>
                </li> 
                }    
                { 
                    !this.props.user.member.loginSuccess?
                    null
                :
                <li className="nav-item">
                <Link className ="nav-link" to="/display">See your Awards</Link>
                </li> 
                 } 
                 { 
                    !this.props.user.member.loginSuccess?
                    null
                :
                <li className="nav-item">
                <Link className ="nav-link" to="/details">See your Details</Link>
                </li> 
                 } 
                 </ul>:null}
                </ul>
              </div>  
            </nav>
            <br></br>
                    </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(Header);