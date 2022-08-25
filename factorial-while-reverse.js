function facorial(number) {
    let i = number;
    let result = 1;
    while (i >= 1) {
        result = result * i; i--;
    }
    return result;
}
const number = 6;
const result = facorial(number);
console.log('factorial of', number, '=', result);