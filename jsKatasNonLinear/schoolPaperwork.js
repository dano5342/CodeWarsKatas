/* 
Your classmates asked you to copy some paperwork for them. You know that there are 'n' 
classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need.
Note! if n or m < 0 return 0! Waiting for translations and Feedback! Thanks!


*/

//my answer:
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0
    } else return n * m
}

// Ternary operator
function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
}

// One liner ES6
const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);
