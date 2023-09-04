const repeatString = function(str, times) {
    let repeat="";
    for(let i=0; i<times; i++) {
        repeat=repeat+str;
    }
    return repeat;
}

// Do not edit below this line
module.exports = repeatString;
