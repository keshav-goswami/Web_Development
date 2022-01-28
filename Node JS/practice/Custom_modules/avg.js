console.log("THIS IS AVERAGE MODULES");
avg = (arr)=>{
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

// module.exports.average = avg;  as module.exports is itself a object

module.exports = {
    average : avg,
    name : "keshav",
    section : "ML"
}