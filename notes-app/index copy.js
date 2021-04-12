const http=require("http");
const port=8001;
const server =http.createServer((req,res)=>{
    if(req.method==="GET"){
        if (req.url==="/getAll"){
            res.write("welico");
        }
        }
        res.end();
    
})
server.listen(port,()=>{
    console.log('server run at '+port)
})