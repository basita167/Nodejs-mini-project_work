const express=require('express');

const path=require('path');
const uuid=require('uuid');
const logger=require('./middleware/logger');
/*
If you have moment installed which is a package for getting the date and the time 
command is npm init moment in cmd 

 const moment =require('moment '); 
 
 */




const app= new express();

app.use(logger);   //this function is used for using the middlewares of express js 



//we have  a new middleware created for handling up the parsing of request's body so that our sent data can be shown in bottom window of Postman app.
// Note that in older versions of express we had to install a seperate package manager for POST type request body parser .

app.use(express.json());
app.use(express.urlencoded({extended:false}));



//this middleware s for using a parental route.
app.use('/home',require('./routes/api/members'));

//app.use('/home/',require('./routes/api/home_access'));
//down we have a middleware which will be executed along with the request cycle




//this route gets the file from the a targetted directory and sends a response to the client 


 
app.get('/home',(req,res)=>{
	res.sendFile( path.join(__dirname,'public','index.html') );
});

/* 
app.get('/home/all',(req ,res)=>{
	
	res.json(members);
	
	
});
 */
 
 
 
// app.get('/home/:id',(req ,res)=>{
	
	// const member___=members.find(member_=>member_.id===parseInt(req.params.id));
	// if(member___)
	   // res.send(`Name : ${member___.name}<br/>Id : ${member___.id }<br/>Description : ${member___.description}`);
 // else

 // res.status(400).json({msg:`No member with the id :${req.params.id} been found so try again`});
 
 
 
 
	
	
	// res.json(members.filter(member_=>member_.id===parseInt(req.params.id)));  is na alternate code for the above code 
	
// });




const PORT = process.env.port || 5000;
app.listen(PORT ,()=>{
	console.log('Hi the dev server is running your express');
})


//sadia mevish 