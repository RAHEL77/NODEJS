const express = require('express');
const router = express.Router();
const usersJson = require('../users.json');
const w = [
    {
        id: 0,
        name: "itay",
        capsule:1
    },
    {
        id: 1,
        name: "avi",
        capsule: 1
    }
]

router.get('/',(req,res)=>{
    return res.status(200).json({users : usersJson.users})
}).get('/:id',(req,res)=>{
    return res.status(200).json({user : usersJson.users[req.params.id]})
}).post('/',(req,res)=>{

})

module.exports = router;
