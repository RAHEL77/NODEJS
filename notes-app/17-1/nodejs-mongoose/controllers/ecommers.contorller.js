const ecommersModel = require('../models/ecommers.model');


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

module.exports = {
    create: createEcommer,
    getAll: getEcommers 

}
