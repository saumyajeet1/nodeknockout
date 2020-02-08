import React, { Component } from 'react';
import {connect} from 'react-redux'
import {update,validform, generatedata} from '../utils/formtions'
import {adddetails}  from '../actions/recordactions'
import FormFields from '../utils/formfields';
import FileUpload from '../utils/fileupload'
class Details extends Component {

    state={
        formSuccess:false,
        formError:false,
        formdata:{
        name: {
            element:'input',
            value:'',
            config:{
                name:'name',
                placeholder:'Enter your name here',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:true,
            validationMessage:'',
            label:true
        },
        atmpin: {
            element:'input',
            value:'',
            config:{
                name:'fathername',
                placeholder:'Enter your Father name here',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:true,
            validationMessage:'',
            label:true
        }
    }
}

updateform=(element)=>{
    const newdata=update(element,this.state.formdata,'add')
    this.setState({
        formdata:newdata,
    })

}

submitform=(event)=>{
    event.preventDefault();
    const isformvalid=validform(this.state.formdata,'add')
    console.log(isformvalid)
    const data=generatedata(this.state.formdata,'add')
    console.log(this.props.user.member)
    if(true){
        this.props.dispatch(adddetails(data,this.props.user.member.member._id)).then((response)=>{
            if(response.payload.success){
             console.log('hurray')
                this.setState({
                    formSuccess:true,
                    formError:false
                })
                setTimeout(()=>{
                    this.props.history.push('/show');
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
        console.log(this.props)
        return (
            
            <div className='add container'>
              <div className="each">
              <FileUpload
                    imageHandler={(images)=>this.imageHandler(images)}
                    reset={this.state.formSuccess}/>
            </div>
            <div className="row"></div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <div class="jumbotron">
            
             <div className="each row">
               <FormFields
                  formdata={this.state.formdata.money}
                  id={'name'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>

         <div className='row'>
            <div className="block ">
          <center>   
            <button style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
                SUBMIT
             </button>
                </center>
                 </div>
            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(Details);