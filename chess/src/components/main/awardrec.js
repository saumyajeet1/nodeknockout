import React, { Component } from 'react';
import {connect} from 'react-redux'
import {update,validform, generatedata} from '../utils/formtions'
import {addrecord}  from '../actions/recordactions'
import FormFields from '../utils/formfields';
import FileUpload from '../utils/fileupload'
class Award extends Component {

    state={
        formSuccess:false,
        formError:false,
        formdata:{
        date: {
            element:'input',
            value:'',
            config:{
                name:'date',
                placeholder:'Enter the Date here',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:true,
            validationMessage:'',
            label:true
        },
        info:{
            element:'input',
            value:'',
            config:{
                name:'info',
               type:'text',
               placeholder:'Enter description here',  
            },
            validation:{
                required:true
            },
            valid:false,
            validationMessage:'',
            label:true
        },
        document:{
            value:[],
            validation:{
                required:false
            },
            valid: false,
            touched: false,
            validationMessage:'',
            label:false
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
    console.log(data)
    if(true){
        this.props.dispatch(addrecord(data,this.props.user.member.member.email)).then((response)=>{
            if(response.payload.success){
             console.log('hurray')
                this.setState({
                    formSuccess:true,
                    formError:false
                })
            }
                else{
                    this.setState({
                        formError:true
                    })
                }
            }
        )}
    }
imageHandler=(images)=>{
    console.log(images)
    const newFormData={
        ...this.state.formdata
    }
      newFormData['document'].value=images;
      newFormData['document'].valid=true
      this.setState({
          formData:newFormData
      })

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
        <br></br><br></br><br></br><br></br><br></br><br></br>
          <div className="jumbotron">
            <div className="each row">
               <FormFields
                  formdata={this.state.formdata.date}
                  id={'date'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>

            
            <div className="each row">
               <FormFields
                  formdata={this.state.formdata.info}
                  id={'info'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>




            <div className="block row">
          <center>   
            <button style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
                SUBMIT
             </button>
                </center>
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

export default connect(mapStateToProps)(Award);