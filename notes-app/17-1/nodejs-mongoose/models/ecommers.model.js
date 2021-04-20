const mongoose = require("mongoose");
const ecommersSchema = mongoose.Schema({
  ecommersName: {
    type: String,
    required: true,
    unique: true,
  },
  ecommersCategory: {
    type: String,
    required: true,
  },

  ecommersDetails: {
    description: {
    type: String,
    required: true,
    validate(value) {
        if( value.length > 11 ){
            throw new Error('description  must be max 10 letter' )
        }
    }
},
    
    price: {
    type: Number,
    required: true,
   
    validate(value) {
        if( value > -1 ){
            throw new Error('price  must be pozitif number' )
        }
    }
},
    dicount: {
    type: Number,
    required: true,

    validate(value) {
        if( value ===null ){
            throw new Error('dicount  empty ' )

        }
    },
    default:0
},  
    
    images: {
    type: Array,
    required: true,
    validate(value) {
        if( value.length <2 ){
            throw new Error('at least 2 images ' )

        }
    },
    },
    
    ecommersPhone: {
    type: Number,
    required: true,
    default: 972,
    validate(value) {
        if( value !=972 ){
            throw new Error('has to be 972 ' )

        }
    },
    },

    dateAdded: {
    type: Date,
    default: Date.now(),
    },
  },
   
  isActive: {
    type: Boolean,
    required: false,
    unique: false,
    default: true,
  },

};


const ecommersmodel = mongoose.model("ecommers", ecommerSchema);
module.exports = ecommersmodel;
// module.exports = mongoose.model('ecommers',ecommersSchema);
