const mongoose1 = require('mongoose');
//request schema
const RequestdataSchema = new mongoose1.Schema({
     //phoneno field
    phone:{
        type:Number,
        required: [true, "Please provide a phone no"],
        unique: [true, 'Number Exist']

    },
    //date
    date: {
        type:String,
        required: [true, 'Please provide a date'],
        unique: false,
    },

    //topwear fiald
    topwear: {
        type:String,
        required: [true, 'Please provide a topwear'],
        unique: false,
    },
    //bottomwear
    bottomwear: {
        type:String,
        required: [true, 'Please provide a bottomwear'],
        unique: false,
    },
    //woolenCloth
    woolencloth: {
        type:String,
        required: [true, 'Please provide a woolencloth'],
        unique: false,
    },
    //other
    other: {
        type:String,
        required: [true, 'Please provide a other'],
        unique: false,
    },
    //description
    description: {
        type:String,
        required: [true, 'Please provide a description'],
        unique: false,
    },
})

//export UserSchema
//create a usertable if there is no table with that name already
module.exports = mongoose1.model.Requestdatas || mongoose1.model("Requestdatas",RequestdataSchema)
//module.exports = RequestdataSchema