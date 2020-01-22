/*
Coding in function ```padIt```, function accept 2  parameters:

1.```str```,  it's a string representing the string to pad, we need pad some ```"*"``` at leftside or rightside of ```str```

2.```n```, it's a number, how many times to pad the string.
*/

// This one was a little off for me as I hadnt worked in while loops for ages
// The code is partially mine however the s-string is not

// Inital Answer: 

function padIt(str, n) {

    let result = str;
    let i = 0;

    while (i < n) {
        if (i % 2 === 0) {
            result = `*${result}`
        } else {
            result = `${result}*`
        }
        i += 1

    }
    return result
}


// Best Practice 

function padIt(str, n) {
    while (n > 0) {
        if (n % 2 === 0) {
            str = str + "*";
        } else {
            str = "*" + str;
        }
        n--;
    }
    return str;
}

// Another with ternary's:
function padIt(str, n) {
    while (n > 0) {
        str = n-- % 2 ? '*' + str : str + '*';
    }
    return str;
}

// One LIner

function padIt(str, n) { //while
    return "*".repeat(Math.ceil(n / 2)) + str + "*".repeat(Math.floor(n / 2))
}