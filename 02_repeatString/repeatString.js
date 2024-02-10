const repeatString = function(string, num) {
    let s = string;
    let n = num;
    let finalString = "";

    if(n < 0){
        return "ERROR";
    }else{
        for(let i = 0; i < n; i++){
            finalString += s;
        }
    
        return finalString;
    }
};

// Do not edit below this line
module.exports = repeatString;
