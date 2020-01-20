/*
I've written five function, each function receives a parameter: arr(an array), you should coding something with arr.
*/

// Top Answer:
const getLength = array => array.length;

const getFirst = array => array[0];

const getLast = array => array[array.length - 1];

const pushElement = array => array.concat(0);

const popElement = array => array.splice(0, array.length - 1);

// My Answer :

function getLength(arr) {
    return arr.length;
}

function getFirst(arr) {
    return arr[0];
}

function getLast(arr) {
    return arr[arr.length - 1];
}

function pushElement(arr) {
    arr.push(1);
    return arr;
}

function popElement(arr) {
    arr.pop()
    return arr;
}


// Test Cases

Test.assertSimilar(getLength([1,2,3]),3);
Test.assertSimilar(getFirst([1,2,3]),1);
Test.assertSimilar(getLast([1,2,3]),3);
Test.assertSimilar(pushElement([1,2,3]).length,4);
Test.assertSimilar(popElement([1,2,3]).length,2);