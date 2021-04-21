const ecommersModel = require('../models/ecommers.model');

const ObjectId = require('mongodb').ObjectID;

const createEcommer =async (req, res) => {
    // const data = req.body;
    const {ecommersName, ecommersCategory,ecommersDetails,isActive} = req.body;
   
    const ecommer = new ecommersModel({
        ecommersName: ecommersName,
        ecommersCategory: ecommersCategory,
        ecommersDetails: ecommersDetails,
        isActive:isActive,
    });

    try{
        const response=await ecommer.save();
        res.status(201).send(response);}
        catch (err) {
            res.status(400).send(err);
        }
    }
    

const getEcommers =async (req, res) => {

    try{
        const ecommer=await ecommerModel.find({});
        res.send(ecommer);}
        catch (err) {
            res.status(500).send(err);
        }
    };
    
const getById = (req, res) => {
    const {id}=req.params;
    try {
      const ecommer = await ecommerModel.findById(id);
      if (!ecommer) {
        return res.status(404).send("Id not found");
      }
      res.json(ecommer);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
   module.exports = {
    create: createEcommer,
    getAll: getEcommers,
    getById 

}
