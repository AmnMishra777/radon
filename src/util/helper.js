


const printDate = function (){
    const today = new Date();

const date = ("Today's Date" +'-'+today.getDate());

console.log(date)


}

const printMonth = function(){
    const today =  new Date();

    const date = ('Month'+'-'+ (today.getMonth()+1));
    console.log(date)
}


const getBatchInfo = function() {
    console.log('Radon, W3D1, the topic for today is Nodejs module system')
}

const problem2 = function() {
    console.log('problem - 2')
    }

const empty = function(){
    console.log(' ')
}

problem2()
printDate()
printMonth()
getBatchInfo()

module.exports.problem2 = problem2
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
module.exports.empty = empty

// Problem 2
// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Roadon, W3D1, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler
