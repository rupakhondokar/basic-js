var student = { id:121, phone:1789, name:"Tanvir"};
var student2 = { id:131, phine:5678, name:"Rupa"};

var phonePropName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phonePropName];
//update phone
student2.phone = 547854;
student2["phone"] = 666688;
student2[phonePropName] = 9999111;

student2.cinema = "Ogni122";

console.log(phoneNo1);
console.log(student2);
