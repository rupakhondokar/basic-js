function factorial(n) {
var i = 1;
var factorial = 1;
while(i <= n){
    factorial = factorial * i;
    i++;
}
return factorial;

}

var reasult = factorial(5);
console.log(reasult);