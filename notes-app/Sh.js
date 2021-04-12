const http=require("http");
const url=require("url")
const port=8001;
const JsonUsers = require("./users.json")

// const users=[{id:0, name:'OR', cap: 2},{id:1, name:'SHLOMI', cap: 2},{id:2, name:'RACHEL', cap: 2}, {id:3, name:'HILA', cap: 3},{id:4, name:'HSEEN', cap: 3}, {id:5, name:'SERGEY', cap: 3},{id:6, name:'NATALY', cap: 3} ]




const server =http.createServer((req,res)=>{

    const q =url.parse(req.url, true).query;
    console.log(q);
    if(req.method==="GET"){
        if (req.url==="/users"){
            res.write(JSON.stringify(JsonUsers.users));
        }else if (req.url.includes('user')) {
            res.write(JSON.stringify(JsonUsers.users[q.id]))
        }
        if (req.url.includes('capsule')) {
            res.write(JSON.stringify(JsonUsers.users[q.cap]))
        }
        res.end();
    }    
});

server.listen(port,()=>{
    console.log('server run at '+port)
})
