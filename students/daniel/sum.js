function sum(number1, number2){
    if (number1 === undefined){
        return 0;
    }
    if (number2 === undefined) {
        return number1;
    }
    const total = number1 + number2;
    return total;
}

module.exports = sum;