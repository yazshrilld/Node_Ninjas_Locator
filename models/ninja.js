const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create the geo-location schema and pass it inside the ninga schema
const GeoSchema = new Schema({
    type : { 
        type : String,
        default : "point"
    },
    coordinates : {
        type : [Number],
        index : "2dsphere"
    }
});

// create the body style(schema for the ninja)
const NinjaSchema = new Schema({
    name : { 
        type : String,
        required : [true, 'Name field is required']
    },
    rank : {
        type : String,
    },
    available : {
        type : Boolean,
        default : false
    },
    geometry : GeoSchema

}); 

const Ninja = mongoose.model('ninja', NinjaSchema);

// export to ninja
module.exports = Ninja;

