//TypeScript Code for my YouTube channel
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Classes
var User = /** @class */ (function () {
    function User(name, email, age, password) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
        console.log("user ".concat(this.name));
    }
    User.prototype.register = function () {
        console.log("".concat(this.name, " is now registered"));
    };
    User.prototype.showAge = function () {
        return this.age;
    };
    User.prototype.ageInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log("".concat(this.name, " payed the invoice."));
    };
    return User;
}());
var john = new User('John Smith', 'john@mail.com', 27, "myPassword");
var mary = new User('Mary Smith', 'mary@mail.com', 26, "myPassword");
// Inheritance
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile(id, name, email, age, password) {
        var _this = _super.call(this, name, email, age, password) || this;
        _this.id = id;
        return _this;
    }
    Profile.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Profile;
}(User));
var mike = new Profile(1, "Mike", "mike@mail.com", 30, "myPassword");
console.log(mike.payInvoice);
