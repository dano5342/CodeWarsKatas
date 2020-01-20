// Top rated evaluation "Best Practice"
function trueOrFalse(val) {
    return Boolean(val).toString();
}

// my initial evaluation
// This was a too long way to iterate over the all the test cases
// However it was quicker than my one below.
function trueOrFalse(val) {
    if (val == false || val == 0 || val == -0 || val == "" ||
        val == null || val == undefined || val == NaN)
        return false;
    else return true;
}
//my evaluation, took about 0.114 more to process then the one above
function trueOrFalse(val) {
    if (val) return true;
    return false;
}

//I could've also used a ternary operator in this instance:
function trueOrFalse(val){
    return !val ? 'false':'true'
}

//test for equations and inequalities CASES
var a = 1,
    b = 2,
    c = 1;
Test.assertSimilar(trueOrFalse(a > b), "false");
Test.assertSimilar(trueOrFalse(a === b), "false");
Test.assertSimilar(trueOrFalse(a < b), "true");
Test.assertSimilar(trueOrFalse(a !== b), "true");
Test.assertSimilar(trueOrFalse(b > c), "true");
Test.assertSimilar(trueOrFalse(b === c), "false");
Test.assertSimilar(trueOrFalse(b < c), "false");
Test.assertSimilar(trueOrFalse(b !== c), "true");
Test.assertSimilar(trueOrFalse(a === c), "true");
Test.assertSimilar(trueOrFalse(a !== c), "false");
//test for logical operators and bitwise operators
var t = true,
    f = false;
Test.assertSimilar(trueOrFalse(t && f), "false");
Test.assertSimilar(trueOrFalse(f && f), "false");
Test.assertSimilar(trueOrFalse(t && t), "true");
Test.assertSimilar(trueOrFalse(t || f), "true");
Test.assertSimilar(trueOrFalse(t || t), "true");
Test.assertSimilar(trueOrFalse(f || f), "false");
Test.assertSimilar(trueOrFalse(t & f), "false");
Test.assertSimilar(trueOrFalse(t & t), "true");
Test.assertSimilar(trueOrFalse(f & f), "false");
Test.assertSimilar(trueOrFalse(t | f), "true");
Test.assertSimilar(trueOrFalse(t | t), "true");
Test.assertSimilar(trueOrFalse(f | f), "false");
Test.assertSimilar(trueOrFalse(!t), "false");
Test.assertSimilar(trueOrFalse(!f), "true");
Test.assertSimilar(trueOrFalse(t ^ f), "true");
Test.assertSimilar(trueOrFalse(t ^ t), "false");
Test.assertSimilar(trueOrFalse(f ^ f), "false");
//test for implicit conversion 
Test.assertSimilar(trueOrFalse(true), "true");
Test.assertSimilar(trueOrFalse(123), "true");
Test.assertSimilar(trueOrFalse("123"), "true");
Test.assertSimilar(trueOrFalse(["123"]), "true");
Test.assertSimilar(trueOrFalse("false"), "true");
Test.assertSimilar(trueOrFalse(false), "false");
Test.assertSimilar(trueOrFalse(0), "false");
Test.assertSimilar(trueOrFalse(""), "false");
Test.assertSimilar(trueOrFalse(null), "false");
Test.assertSimilar(trueOrFalse([].length), "false");
Test.assertSimilar(trueOrFalse(undefined), "false");