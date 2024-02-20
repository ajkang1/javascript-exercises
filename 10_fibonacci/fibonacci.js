const fibonacci = function(index) {
    let fiboArr = [0, 1];

    if(index < 0){
        return "OOPS";
    }else{
        for(let i = 2; i <= index; i++){
            fiboArr.push(+fiboArr[i - 1] + +fiboArr[i - 2]);
        }
    }

    return fiboArr[index];
}

// Do not edit below this line
module.exports = fibonacci;
