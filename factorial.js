// 1*2*3*4*5*6*7
function facorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}
const result = facorial(8);
console.log(result);