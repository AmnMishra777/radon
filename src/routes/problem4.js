
    let chunkFunction = require("lodash");
const { fromPairs } = require("lodash");
    const data = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const chunks = chunkFunction.chunk(data, 4);
    console.log(chunks);


    const tailFunction = require('lodash');
    const x = [1,3,5,7,9,11,13,15,17,19]
    const newArray = tailFunction.tail(x);
    console.log(newArray);


    const unionFunction = require("lodash"); 
    const unions = unionFunction.union([1, 2, 3, 4, 5], [6,7,5,8,1], [9,10,4,11,12], [13,14,15,12,16], [17,3,8,11,15]);  
    console.log(unions)


    const fromPairsFunction = require('lodash');
    let pairs = [["horror","The Shining"] ,["drama","Titanic"] ,["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    let fp = fromPairsFunction.fromPairs(pairs);
    console.log(fp)


    chunkFunction()
    tailFunction()
    unionFunction()
    fromPairsFunction()

    module.exports.chunkFunction = chunkFunction
    module.exports.tailFunction = tailFunction
    module.exports.unionFunction = unionFunction
    module.exports.fromPairsFunction = fromPairsFunction


    


