const ecommersModel = require('../models/ecommers.model');

const ObjectId = require('mongodb').ObjectID;

const createEcommer = (req, res) => {
    // const data = req.body;
    const {ecommersName, ecommersCategory,ecommersDetails,isActive} = req.body;
   
    const ecommer = new ecommersModel({
        ecommersName: ecommersName,
        ecommersCategory: ecommersCategory,
        ecommersDetails: ecommersDetails,
        isActive:isActive,
    });

    ecommer.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": ecommer})
    });


}

const getEcommers = (req, res) => {
    ecommerModel.find({}).then((ecommer) => {
        return res.send(ecommer)
    });
}

const getById = (req, res) => {
    const {id}=req.params;
    
    ecommerModel.find({_id:ObjectId(id)}).then((ecommer) => {
        return res.send(ecommer)
    });
}

module.exports = {
    create: createEcommer,
    getAll: getEcommers,
    getById 

}
