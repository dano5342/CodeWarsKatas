/*
Coding in function ```pickIt```, function accept 1 parameter:```arr```, it's a number array, we need traverse ```arr``` by using ```for``` loop, if element is odd number, push it to array ```odd```, if it's a even number, push it to array ```even```.

I've defined two array ```odd``` and ```even``` in the function, and also wrote the return statement. ```your work is write a for loop.```

If you forgot how to push an element to array, please refer to [lesson 4](http://www.codewars.com/kata/571effabb625ed9b0600107a).
*/



// Correct answer :

function pickIt(arr) {
    var odd = [],
        even = [];
    for (let i = 0; i < arr.length; i++) {}
    return [arr.filter(num => num % 2 !== 0), arr.filter(num => num % 2 === 0)]
}

// Ternary Best Practice

function pickIt(arr) {

    let odd = []
    let even = []

    for (var x of arr) {
        ((x % 2) ? odd : even).push(x)
    }

    return [odd, even]
}

// First thought answer:

function pickIt(arr) {
    var odd = [],
        even = [];
    for (i of arr) {
        if (i % 2 === 0) {
            even.push(i);
        } else {
            odd.push(i);
        }
    }


    return [odd, even];
}