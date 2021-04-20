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

  isActive: {
    type: Boolean,
    required: false,
    unique: false,
    default:true,
  },

  ecommersDetails: {
    description: {
    type: String,
    required: true,
    validate(value) {
        if( value.length < 11 ){
            throw new Error('description must be at least 10 letter' )
        }
    }
},
    
    price: {
    type: Number,
    required: true,
   
    validate(value) {
        if( value < 0 ){
            throw new Error('price must be pozitif number' )
        }
    }
},
    dicount: {
    type: Number,
    required: false,
    default:0,
   },  
  
    images: {
    type: Array,
    required: false,
    validate(value) {
        if( value.length <2 ){
            throw new Error('at least 2 images ' )

        }
    },
    },
    
    ecommersPhone: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 10,
    // default: 972,
    // if (!Validator.isMobilePhone(value, "he-IL")){
    //     throw new Error('Must be isreli phone')
    // }

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
   
});


const ecommersmodel = mongoose.model("ecommers", ecommersSchema);
module.exports = ecommersmodel;
// module.exports = mongoose.model('ecommers',ecommersSchema);
