// Question
/*
Task:
Complete function saleHotdogs/SaleHotDogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

+---------------+-------------+
|  numbers n    | price(cents)|
+---------------+-------------+
|n<5            |    100      |
+---------------+-------------+
|n>=5 and n<10  |     95      |
+---------------+-------------+
|n>=10          |     90      |
+---------------+-------------+
*/
//  My first thoughts
function saleHotdogs(n) {
    var price = (n < 5) ? 100 : (n >= 5, n > 10) ? 95 : (n >= 10) ? 90;
    return price * n
}

// Break down into if/else statement loop: 
function saleHotdogs(n) {
    var price = 0
    if (n < 5) {
        price = 100
    } else if (n >= 5 && n < 10) {
        price = 95
    } else(price = 90)
    return n * price
}

// Best Practice::
function saleHotdogs(n) {
    return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

// another smart way 
const saleHotdogs = (n) => {
    switch (true) {
        case n < 5:
            return n * 100;
        case n < 10:
            return n * 95;
        default:
            return n * 90;
    }
}