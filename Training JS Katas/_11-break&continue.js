/*
Coding in function ```grabDoll```. function accept 1 parameter:```dolls```. it's a string array, a list of some dolls.

You need traverse ```dolls``` by using ```for``` loop. If element is  "Hello Kitty" or "Barbie doll", you should push it to a ```bag```(bag is an array, I've defined in the function); if it's other strings, we should use ```continue``` skip it. 

When the ```bag``` has three element, ```bag``` is full. You should use ```break``` jump out the loop; If ```bag``` is not full, you should traverse ```dolls``` until the last element. 

Return the ```bag``` after for loop finished.

You should use ```for```, ```break``` and ```continue``` in your code. otherwise, your solution may not pass this kata.

If you forgot how to push an element to array, please refer to [lesson 4](http://www.codewars.com/kata/571effabb625ed9b0600107a).
*/

// First thoughts 
function grabDoll(dolls) {
    var bag = [];
    for (var i = 0; i < dolls.length; i++) {
        if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie Doll') {
            bag.push(dolls[i]);
            const j = 3 // However this if loop needs to be above the first if statement here above
            if (j >= bag.length) {
                break;
            }
            continue;
        }
    }

    return bag;
}

// Final correct answer: It turns out I was nearly there with this one.
function grabDoll(dolls) {
    var bag = [];
    for (var i = 0; i < dolls.length; i++) {
        if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
            bag.push(dolls[i]);
        else
            continue;
        if (bag.length === 3) break;
    }
    return bag;
}

// Second Thoughts

function grabDoll(dolls) {
    var bag = [];
    const j = 3;
    for (var i = 0; i < dolls.length; i++) {
        if (j >= bag.length) {
            if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie Doll') {
                bag.push(dolls[i]); // by putting this as the last statement
            } // it was able to iterate over more of the array than before.
        } // However it resulted in duplicating the Hello Kitty dolls in the bag
    }
    return bag;
}

// Shortest Solution:


const grabDoll = dolls => {
    return dolls
        .filter(doll => doll === 'Hello Kitty' || doll === 'Barbie doll')
        .slice(0, 3)
}

// Another smart solution 

function grabDoll(dolls) {
    var bag = [];
    for (d in dolls) {
        if (dolls[d] == "Hello Kitty" || dolls[d] == "Barbie doll") bag.push(dolls[d]);
        if (bag.length < 3) continue;
        break;
    }
    return bag;
}