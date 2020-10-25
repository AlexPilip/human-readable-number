module.exports = function toReadable(number) {
    let result = "";
    // let arrayForNumber = number.toString().split('');
    if (number >= 0 && number <= 9) {
        let arrayForNumber = number.toString().split();
        for (key in arrayForNumber) {
            result = `${numberReadable[arrayForNumber[0]]}`;
        }
        return result;
    }
    if (number >= 10 && number <= 20) {
        let arrayForNumber = number.toString().split();
        for (key in arrayForNumber) {
            result = `${numberReadable[arrayForNumber[0]]}`;
        }
        return result;
    }
    if (number >= 21 && number <= 99) {
        if (number % 10 == 0) {
            let arrayForNumber = number.toString().split();
            for (key in arrayForNumber) {
                result = `${numberReadable[arrayForNumber[0]]}`;
            }
            return result;
        } else {
            let arrayForNumber = number.toString().split("");
            for (key in arrayForNumber) {
                result = `${numberReadable[arrayForNumber[0] * 10]} ${
                    numberReadable[arrayForNumber[1]]
                }`;
            }
            return result;
        }
    }
    if (number >= 100 && number <= 999) {
        let arrayForNumber = number.toString().split("");
        if (number % 100 == 0) {
            for (key in arrayForNumber) {
                result = `${numberReadable[arrayForNumber[0]]} ${
                    numberReadable[100]
                }`;
            }
            return result;
        } else if (number % 10 == 0) {
            for (key in arrayForNumber) {
                result = `${numberReadable[arrayForNumber[0]]} ${
                    numberReadable[100]
                } ${numberReadable[arrayForNumber[1] * 10]}`;
            }
            return result;
        } else if (
            (number >= 101 && number <= 109) ||
            (number >= 201 && number <= 209) ||
            (number >= 301 && number <= 309) ||
            (number >= 401 && number <= 409) ||
            (number >= 501 && number <= 509) ||
            (number >= 601 && number <= 609) ||
            (number >= 701 && number <= 709) ||
            (number >= 801 && number <= 809) ||
            (number >= 901 && number <= 909)
        ) {
            for (key in arrayForNumber) {
                result = `${numberReadable[arrayForNumber[0]]} ${
                    numberReadable[100]
                } ${numberReadable[arrayForNumber[2]]}`;
            }
            return result;
        } else if (
            (number >= 111 && number <= 119) ||
            (number >= 211 && number <= 219) ||
            (number >= 311 && number <= 319) ||
            (number >= 411 && number <= 419) ||
            (number >= 511 && number <= 519) ||
            (number >= 611 && number <= 619) ||
            (number >= 711 && number <= 719) ||
            (number >= 811 && number <= 819) ||
            (number >= 911 && number <= 919)
        ) {
            console.log(1);
            for (key in arrayForNumber) {
                result = `${numberReadable[arrayForNumber[0]]} ${
                    numberReadable[100]
                } ${numberReadable[number % 100]}`;
            }
            return result;
        } else {
            for (key in arrayForNumber) {
                result = `${numberReadable[arrayForNumber[0]]} ${
                    numberReadable[100]
                } ${numberReadable[arrayForNumber[1] * 10]} ${
                    numberReadable[arrayForNumber[2]]
                }`;
            }
            return result;
        }
    }
};

let numberReadable = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
};
