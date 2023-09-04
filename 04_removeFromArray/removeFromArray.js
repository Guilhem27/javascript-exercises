const removeFromArray = function(array, value) {
    const newArray=[]
    for(let i=0;i<array.length;i++) {
        if (array[i]!=value) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
