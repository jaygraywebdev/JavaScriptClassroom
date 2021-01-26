function diff(number1, number2){
    if (number1 === undefined){
        return 0;
    }
    if (number2 === undefined){
        return number1;
    }
    const result = number1 - number2;
    return result;
}

module.exports = diff;