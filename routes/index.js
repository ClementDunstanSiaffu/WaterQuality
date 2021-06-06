const mongoose = require('mongoose')
const Water = mongoose.model("WATER")

exports.leta = (req,res)=>{
    const {ph,turbulence,conductivity,flowrate} = req.params
    const water = new Water()
    water.ph = ph;
    water.turbulence = turbulence;
    water.conductivity = conductivity;
    water.flowrate = flowrate;
    water.save((err,docs)=>{
        if(!err){
            res.send("SUCCESS")
        }
    })
}

exports.pata = (req,res)=>{
    Water.find((err,docs)=>{
        if (!err){
            res.json(docs)
        }
    })
}