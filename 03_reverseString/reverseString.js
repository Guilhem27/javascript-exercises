const reverseString = function(str) {
    const arrayStr=[];
    for(let i=0;i<(str.length);i++){
        arrayStr.unshift(str.slice(i,1+i));
    }
    return arrayStr.join('');
};

// Do not edit below this line
module.exports = reverseString;
