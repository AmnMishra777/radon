const trim = function(){
let me = "            Aman     ";
let result = me.trim();
console.log(result)
}

const lowercase = function(){
let a = "WHAT ARE YOU DOING?";
let lower = 'lowercase' + '-'+' ' +a.toLowerCase();
console.log(lower)
}

const uppercase = function(){
let b = "i am practicing coding";
let upper = 'uppercase' + '-' +' '+b.toUpperCase();
console.log(upper)
}

const problem3 = function() {
console.log('problem - 3')
}

const empty = function(){
    console.log(' ')
}

empty()
problem3()
trim()
lowercase()
uppercase()


module.exports.problem3 = problem3
module.exports.trim = trim
module.exports.lowercase = lowercase
module.exports.uppercase = uppercase
module.exports.empty = empty




// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler
