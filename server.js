const http=require('http');
const fs =require('fs');




const server=http.createServer(function (req,res){
  const url=req.url;
  const meth=req.method;
  
  if(url==='/')
  {
   res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>type message</title></head>');
  res.write('<body><strong>Type the message :</strong> <form action="/message " method="POST" ><input type="text" name="message" ><input type="submit" value="send" name="submit"></form> </body>');
  res.write('</html>');
  return res.end();
  
  }

  
    

  if(url==='/message' && meth==="POST")
        { 
          const body=[];
          
          req.on('data',(chunk)=>{
     
                                      body.push(chunk); 
                                      console.log(chunk)  ;
                                  
                                   }
                                   );

      return  req.on('end',()=>{

            const parsebody=Buffer.concat(body).toString();
            const value=parsebody.split('=')[1];
            const message=value.split('&')[0];
            console.log(message);
            console.log(parsebody);
            fs.writeFileSync('messaging.txt',message);

            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
          
        });


            
} //termination of if statement 



                    res.setHeader('Content-Type','text/html');
                    res.write('<html>');
                    res.write('<head><title>Helo from server</title></head>');
                    res.write('<body><strong>beware from the guy</strong></body>');
                    res.write('</html>');
                    res.end();
  //process.exit(); 
}
);

server.listen(3000);

//my first success a node js developer hahahahahha................