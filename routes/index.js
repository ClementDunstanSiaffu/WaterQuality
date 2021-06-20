const mongoose = require('mongoose')
const Water = mongoose.model("WATER")

exports.leta = (req,res)=>{
    const {ph,turbulence,conductivity,flowrate} = req.params
    const water = new Water()
    const date = new Date()
    const currentDate = date.toLocaleDateString("en-us",{timeZone:"Africa/Nairobi"})
    const currentTime = date.toLocaleTimeString("en-us",{timeZone:"Africa/Nairobi"})
    water.ph = ph;
    water.turbulence = turbulence;
    water.conductivity = conductivity;
    water.flowrate = flowrate;
    water.date = currentDate;
    water.time = currentTime;
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