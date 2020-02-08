import React from 'react';
import logo from '../../images/logo.png';
import regi from '../../images/reward.jpeg';
import det from '../../images/details.jpeg';
import cv from '../../images/cv.jpeg';

const Main1 = () => {
    return (
        <div className="mainpage">
            <div className="row">
            <div className="description col-lg-6 col-sm-6 col-md-6 col-xs-6">
            <p id="para">
                <h1 style={{fontFamily:"algerian"}}>WELCOME !!!</h1>
            This is a place where you can store your academic information like events,awards,marks,etc. To access more of its contents, please Register    
            </p>
            </div>            
            <div className="desimg col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <img className='logo' src={logo}/>
            </div>
            </div>
            <div className="row carde" style={{marginTop:"15px"}}>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            <div className="card col-lg-3 col-md-3 col-sm-3 col-xs-3" style={{width: "14rem" ,margin:"0px"}}>
             <img src={regi} className="card-img-top" alt="..."/>
             <div className="card-body">
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
               </div>
               
            <div className="col-lg-1 col-md-1 col-sm-1"></div>
               <div className="card col-lg-3 col-md-3 col-sm-3 col-xs-3" style={{width: "14rem",margin:"0px"}}>
             <img src={cv} className="card-img-top" alt="..."/>
             <div className="card-body">
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
               </div>
               
            <div className="col-lg-1 col-md-1 col-sm-1"></div>
               <div className="card col-lg-3 col-md-3 col-sm-3 col-xs-3" style={{width: "14rem",marginRight:"0px"}}>
             <img src={det} className="card-img-top" alt="..."/>
             <div className="card-body">
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
               </div>
            </div>

            
        </div>
    );
};

export default Main1;