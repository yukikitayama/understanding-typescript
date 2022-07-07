function add(n1, n2, showResult, phrase) {
    // console.log(typeof number1);
    // if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
// const result = add(number1, number2, printResult);
// console.log(result);
add(number1, number2, printResult, resultPhrase);
