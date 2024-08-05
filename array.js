var friendsAge = [15, 17, 14, 16];
console.log(friendsAge[0])

var friendsAge = [15, 17, 14, 16];

var rupaAge = friendsAge[2];

friendsAge[1] = 21;

var position = friendsAge.indexOf(141);

console.log(friendsAge);
friendsAge.push(15);
friendsAge.push(19);
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);

var tealine = ['Kalam', 'Salam', 'Balam'];
tealine.push('jalam');
console.log(tealine);
tealine.pop();
console.log(tealine);

var tealine = ['kalam','salam', 'balam'];
tealine.shift();
console.log(tealine);

var tealine = ['kalam','salam', 'balam'];
tealine.unshift('palam');
console.log(tealine);

var tealine = ['kalam', 'kalam', 'salam', 'jalam', 'balam'];
var part = tealine.slice(2, 5);
console.log(part);
console.log(tealine);