const http=require("http");
const url=require("url")
const port=8001;
const user=[
    {id:0,name:'OR'}
    {id:2,name:'SHLOMI'}
    {id:3,name:'RACHEL'}
]
const server =http.createServer((req,res)=>{
    if(req.method==="GET"){
        if (req.url==="/getAll"){
            res.write(user);
        }
        }
        res.end();
    
})
server.listen(port,()=>{
    console.log('server run at '+port)
})