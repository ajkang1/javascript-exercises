const palindromes = function (string) {
    let tempReverseString = "";
    let tempString = "";
    
    for(let i = string.length - 1; i >= 0; i--){
        if(string.substring(i, i + 1) !== " "){
            tempReverseString += string.toLowerCase().substring(i, i + 1);
        }
    }

    for(let i = 0; i < string.length; i++){
        if(string.substring(i, i + 1) !== " "){
            tempString += string.toLowerCase().substring(i, i + 1);
        }
    }

    return tempString === tempReverseString;

};

// Do not edit below this line
module.exports = palindromes;
