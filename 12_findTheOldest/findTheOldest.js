const findTheOldest = function(array) {
    array.map((people) => people.age);

    const age = function(birth, death){
        return death - birth;
    };
};

// Do not edit below this line
module.exports = findTheOldest;
