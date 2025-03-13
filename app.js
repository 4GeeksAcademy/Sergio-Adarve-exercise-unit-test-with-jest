const sum = (a, b) => {
    return a + b;
};

let oneEuroIs = {
    "JPY": 156.5,  // Japan yen
    "USD": 1.07,   // US dollar
    "GBP": 0.87,   // British pound
};

function fromDollarToYen(dollars) {
    return dollars * 149.03;  // Conversión directa de USD a JPY
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    return yen * 0.0072;  // Conversión directa de JPY a GBP
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

// Solo un registro en consola para nosotros
console.log(sum(7, 3));



