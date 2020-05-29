//No.js

const http=require('http');
const process=require('process');
const url=http.url;
 const Server=http.createServer((req,res)=>{
	
	console.log("I am listening ");
	process.exit();
	
});


Server.listen(3000);


