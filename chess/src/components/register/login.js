import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormFields from '../utils/formfields';
import {update,validform, generatedata} from '../utils/formtions'
import {connect} from 'react-redux'
import {loginuser} from '../actions/memberactions'
class Login extends Component {
    state={
        loading:false,
        formSuccess:false,
        formError:false,
        formdata:{
        name: {
            element:'input',
            value:'',
            config:{
                name:'Email',
                placeholder:'Enter your card number here',
                type:'email'
            },
            validation:{
                email:true
              },
            valid:false,
            validationMessage:'',
            label:true
        },
        atmpin: {
            element:'input',
            value:'',
            config:{
                name:'password',
                placeholder:'Enter your atmpin here',
                type:'password'
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
    const newdata=update(element,this.state.formdata,'login')
    this.setState({
        formdata:newdata,
    })

}

submitform=(event)=>{
event.preventDefault();
const isformvalid=validform(this.state.formdata,'login')
const data=generatedata(this.state.formdata,'login')
if(isformvalid){
    this.props.dispatch(loginuser(data)).then((response)=>{
        if(response.payload.loginSuccess){
         console.log('hurray')
            this.setState({
                formSuccess:true,
                formError:false,
                loading:true
            })
            console.log('gjgh')
        
            setTimeout(()=>{
                this.props.history.push('/details');
            },3000)
         }
         
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
        <center> <CircularProgress thickness={7} size={100} style={{color:'grey'}} />  </center>
            :
            <div class="jumbotron">
            <div className="login container col-lg-12 col-md-12 col-sm-12">
                <div className="jk">
                <div className="row headtitle" >
              <h2 className="neon" dataText="Please Login">Please Login</h2>
                </div>
           <form onSubmit={(event)=>{
                  this.submitform(event)
                }}>
               
               <div className=" row block lblock">
               <FormFields
                  formdata={this.state.formdata.name}
                  id={'name'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div>
                
                <div className="row block lblock">
                  <FormFields
                  formdata={this.state.formdata.atmpin}
                  id={'atmpin'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div>
                  
                <div className="row block lblock">
          <center>     <button class="btn btn-primary" style={{padding:"10px"}}onClick={(event)=> this.submitform(event)}>
                     Login
                </button></center> </div>
          

               </form>
               </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      user:state.member
    }
      
}
export default connect(mapStateToProps)(Login);