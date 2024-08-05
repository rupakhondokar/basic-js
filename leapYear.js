const year = 3947;
let remainder = year % 4;
if (remainder == 0) {
    console.log('your year is a Leap year');
}
else {
console.log('your year is not a Leap year');
}

function is leapyear(year) {
    const remainder = year % 4;
    if(remainder== 0) {
        retuen true;
    }
    else {
        return false;
    }
}

const check2000 = is leapyear(2000);
console.log(check2000);