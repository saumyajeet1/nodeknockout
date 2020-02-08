import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import FormFields from '../utils/formfields';
import {update,validform, generatedata} from '../utils/formtions'
import {connect} from 'react-redux'
import {registeruser} from '../actions/memberactions'

class Register extends Component {
    state={
        loading:false,
        formSuccess:false,
        formError:false,
        formdata:{
        name: {
            element:'input',
            value:'',
            config:{
                name:'name',
                placeholder:'Enter card number here',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:false,
            validationMessage:'',
            label:true
        },
        atmpin: {
            element:'input',
            value:'',
            config:{
                name:'lastname',
                placeholder:'Enter your ATM PIN here',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:false,
            validationMessage:'',
            label:true
        }
    }
}

updateform=(element)=>{
    const newdata=update(element,this.state.formdata,'register')
    this.setState({
        formdata:newdata,
    })

}

submitform=(event)=>{
event.preventDefault();
const isformvalid=validform(this.state.formdata,'register')
const data=generatedata(this.state.formdata,'register')
if(isformvalid){
    this.props.dispatch(registeruser(data)).then((response)=>{
        if(response.payload.success){
         console.log('hurray')
            this.setState({
                formSuccess:true,
                formError:false,
                loading:true
            })
            setTimeout(()=>{
            this.props.history.push('/login')
            console.log('dffdfd')
            },5000)}
            else{
                this.setState({
                    formError:true
                })
            }
        }
    )}
}

    render() {
        return (
            this.state.loading?
        <center> <CircularProgress thickness={7} size={10} style={{color:'grey'}} />  </center>
            :
            <div class="jumbotron">
                <div className="form">
                <div className="headtitle row">
                    <h2 className="neon" style={{fontFamily:"sans serif"}}>Register Yourself </h2>
                </div>
                <div style={{display:'flex'}} className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12 f">
                <form onSubmit={(event)=>{
                  this.submitform(event)
                }}>
               
               <div className="block row">
               <FormFields
                  formdata={this.state.formdata.name}
                  id={'name'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div><br></br>
               <div className="block row">
               <FormFields
                  formdata={this.state.formdata.atmpin}
                  id={'atmpin'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div><br></br>
                <br></br>
                <div className="block row">
          <center>     <button class="btn btn-primary" style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
                     Create an account
                </button></center> </div>
                </form>
                </div>
                 </div>
            </div>
            </div>
        );
    }
}

export default connect()(Register);