// 1*2*3*4*5*6*7
function facorial(number) {
    let result = 1;
    let i = 1;
    while (i <= number) {
        result = result * i; i++
    }
    return result;
}
const result = facorial(8);
console.log(result);