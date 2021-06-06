const mongoose = require('mongoose')

const waterSchema = mongoose.Schema({
    ph:{
        type:Number
    },
    turbulence:{
        type:Number
    },
    conductivity:{
        type:Number
    },
    flowrate:{
        type:Number
    }
})

mongoose.model("WATER",waterSchema)