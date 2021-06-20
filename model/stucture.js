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
    },
    date:{
        type:String
    },
    time:{
        type:String
    }
})

mongoose.model("WATER",waterSchema)