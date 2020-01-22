/*
Coding in function ```giveMeFive```, function accept 1 parameter:```obj```, it's an object.

You need to the traverse the `obj`, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

Return the ```five``` after works finished.

You should use ```for..in``` in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)

*/

// First Thoughts:

function giveMeFive(obj) {
    var arr = [];
    for (var value in obj) {
        if (value.length == 5) {
            arr.push(obj[value]);
        }
    }

}

//Best Practice: 
// This was close to my answer -- the next step would've been available had 
// I thought about it a bit longer..
function giveMeFive(obj) {
    var five = [];
    for (var key in obj) {
        if (key.length == 5) five.push(key);
        if (obj[key].length == 5) five.push(obj[key]);
    }
    return five;
}

// Correct Answer: Wasnt sure on hasOwnProperty -- Take a look at the docs:
function giveMeFive(obj) {
    var arr = [];
    for (const value in obj) {
        if (obj.hasOwnProperty(value)) {
            if (value.length === 5) arr.push(value)
            if (obj[value].length === 5) arr.push(obj[value])
        }
    }
    return arr
}


Test.assertSimilar(giveMeFive({
    Our: "earth",
    is: "a",
    beautyful: "world"
}), ["earth", "world"]);
Test.assertSimilar(giveMeFive({
    Ihave: "enough",
    money: "to",
    buy: "a",
    car: "model"
}), ["Ihave", "money", "model"]);
Test.assertSimilar(giveMeFive({
    Pears: "than",
    apple: "sweet"
}), ["Pears", "apple", "sweet"]);