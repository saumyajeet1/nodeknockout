const express=require('express');

const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')


const app=express()
require('dotenv').config();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cookieParser());


app.use(express.static('myapp/build'))



app.post('/api/members/register',(req,res)=>{

});

app.get('/api/members/logout',auth,(req,res)=>{
  
})





app.post('/api/members/login',(req,res)=>{
   
    })

                
app.post('/api/members/forget',(req,res)=>{
   
    
})

app.post('/api/records/adddetail',(req,res)=>{
   
})


app.post('/api/records/records',auth,(req,res)=>{
  
})
app.post('/api/records/removerecord',(req,res)=>{
  
    })

    app.get('/api/records/getrecords',auth,(req,res)=>{
  
    })

if( process.env.NODE_ENV === 'production' ){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'./myapp','build','index.html'))
    })
}

const port = process.env.PORT || 3002;
app.listen(port,()=>{
    console.log(`Server Running at ${port}`)
})

