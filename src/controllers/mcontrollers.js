



const time= function (req,res){
    res.send ("this is time")
}

const ipAddress= function(req,res){
    res.send ("this is IP address")
}

const location= function(req,res){
    res.send ("this is location")
}

module.exports.time= time
module.exports.ipAddress= ipAddress
module.exports.location= location