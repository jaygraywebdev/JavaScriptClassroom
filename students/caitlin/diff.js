function diff(val) {
    if (val < 5) {
        return "true";
    }

    if (val > 5) {
        return "false";
    }
}

diff(2)

module.exports = diff;