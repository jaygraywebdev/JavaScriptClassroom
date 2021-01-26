function diff (number3, number4) {

    if (number4 === number3 ) {
        return 0;
    }
    
    const total = number3 - number4;
    return total;
}



module.exports = diff;