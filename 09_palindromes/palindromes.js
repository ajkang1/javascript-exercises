const palindromes = function (string) {
    tempString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

    return tempString.split("").reverse().join("") === tempString;

};

// Do not edit below this line
module.exports = palindromes;
