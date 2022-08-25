// function isLeapYear(year) {
//     const remainder = year % 4;

//     if (remainder === 0) {
//         console.log('Your year is leap year', year);
//     }
//     else {
//         console.log('your year is not leap year', year);
//     }

// }

// isLeapYear(2022);
// isLeapYear(2025);

function isLeapYear(year) {
    const remainder = year % 4;

    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }

}
const year1 = isLeapYear(2032);
console.log('my year1', year1);
const year2 = isLeapYear(2025);
console.log('my year2', year2);