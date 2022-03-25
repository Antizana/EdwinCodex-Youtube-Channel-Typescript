//TypeScript Code for my YouTube channel
console.log("Hello World!");
var myString = "Hello world";
myString = 22 + "";
var myNumber = 22;
var myBool = true || false;
var myVar = "Hello";
myVar = 22;
myVar = false;
// Strings
document.writeln(myString);
// document.write(myNumber); //Error this function requires a String parameter
document.writeln("<br/>");
document.writeln(myNumber.toString());
// Arrays
var stringArray = ["", "", ""];
// stringArray = [1, 2, 3]; error, expecting strings into the array
var anyArray = ["", "", ""];
anyArray = [1, 2, 3, true];
// Tuples
var stringAndNumberTuples;
stringAndNumberTuples = ["Hello", 22];
// stringAndNumberTuples = [22, "Hello"] //error the first element must be string and
// the second number
// stringAndNumberTuples = ["Hello", 22, [], {}] //error types don't match
// stringAndNumberTuples = ["Hello", 22, "World", 123] // error just two elements needed
/**
 * void, undefined, null
 */
var myFunc = function () {
    console.log("Void Function");
};
var myVoid = void myFunc();
myVoid = undefined;
var myNull = null;
myNull = undefined;
var myUndefined = undefined;
// TypeOf
document.writeln("<br/>");
document.writeln(typeof (stringAndNumberTuples));
document.writeln("<br/>");
document.writeln(typeof (myVoid));
// Functions
function sum(num1, num2) {
    return num1 + num2;
}
var sumNumberString = function (num1, num2) {
    if (typeof num1 == "string")
        num1 = parseInt(num1);
    if (typeof num2 == "string")
        num2 = parseInt(num2);
    return num1 + num2;
};
function getName(firstName, surName) {
    if (surName == undefined)
        return firstName;
    return "".concat(firstName, " ").concat(surName);
}
document.writeln("<br/>");
document.writeln(getName("Edwin")); //Second parameter is optional
document.writeln("<br/>");
document.writeln(getName("Edwin", "CodeX"));
// void Function 
function myVoidFunction() {
    return;
}
/**
 * Interfaces
 */
function showCustomer(customer) {
    console.log("".concat(customer.name, " - ").concat(customer.country));
}
showCustomer({ name: "Edwin", country: "Germany" });
function showCustomer1(customer) {
    console.log("".concat(customer.name, " - ").concat(customer.country));
}
var myCustomer = {
    name: "Edwin", country: "Germany"
};
showCustomer(myCustomer);
