function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
console.log(printResult(add(5, 12)));
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandler(10, 20, function (result) {
    console.log(result);
});
