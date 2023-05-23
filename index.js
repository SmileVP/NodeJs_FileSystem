// to use the file system module
const fs = require("fs");

//to use the http module 
const http = require("http");
const PORT =(process.env.PORT || 9000);

//to get the current date and time
const time = Date().toString();

//using HTTP createServer
// fs.writeFile('Date/date_time.txt',time,(err)=>{
//     if(err) {
//         console.log(err)
//     }else{
//         console.log("Data saved Successfully");
//     }
    
// });
// fs.readFile('Date/date_time.txt',(err,data)=>{
//     if(err){
//        console.log(err) 
//     }else{
//         //createServer() method to create an HTTP server that listens to server ports and gives a response back to the client
//         http.createServer((req,res)=>{
//             res.writeHead(200,{"Content-Type": "text/html"});
//             res.write(data); //write a response to the client
//             res.end(); //end the response
//         }).listen(PORT,()=>{console.log("Listening to port "+PORT);}); //the server object listens on port 8000

//     }
        
    
// })

// process.env.PORT

// //Using Express
const express = require("express");
const app =  express();
app.use(express.json());

app.get('/',function(req,res){// to read the content of the file and send it as response
    fs.readFile('Date/date.txt','UTF8',function(err,data){
        if(err){
            console.log (err);
        }else
        {
            res.json([{
                currentTime:data
            }]);
        }
    })
})
app.post('/',function(req,res){//to get request from postman and write the body in file
    let data = req.body.time;
    fs.writeFile('Date/date.txt',data,(err)=>{
        if(err){
           console.log(err);
        } else{
            let arr = [
                {
                    message:"Data saved Successfully",
                    savedData:data
                }
            ]
            res.json(arr);//to show success message
        }
        
    });
})
app.listen(PORT,()=>{console.log("Listening to "+PORT);});
