//Find the total sum of internal angles in an n-sided simple polygon. N will be greater than 2.

//Solution:
function angle(n) {
    return 180 * (n - 2);
}

// ES6:
const angle = n => (n - 2) * 180;