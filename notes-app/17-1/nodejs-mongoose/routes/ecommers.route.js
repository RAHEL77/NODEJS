const express = require('express');
const router = express.Router();
const ecommersControler = require('../controllers/ecommers.contorller');


router.get('/',(req,res)=>{
   ecommersControler.getAll(req,res);
}).post('/',(req,res)=>{
   ecommersControler.create(req,res);
})

module.exports = router;
