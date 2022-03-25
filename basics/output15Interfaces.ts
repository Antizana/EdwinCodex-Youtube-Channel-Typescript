//TypeScript Code for my YouTube channel

console.log("Hello World!");

var myString : string = "Hello world";

myString = 22 + "";

var myNumber : number = 22;
var myBool : boolean = true || false;

var myVar : any = "Hello";
myVar = 22;
myVar = false;

// Strings

document.writeln(myString)
// document.write(myNumber); //Error this function requires a String parameter
document.writeln("<br/>");
document.writeln(myNumber.toString());

// Arrays
var stringArray = ["", "", ""]
// stringArray = [1, 2, 3]; error, expecting strings into the array

var anyArray : any[] = ["", "", ""];
anyArray = [1, 2, 3, true];

// Tuples
var stringAndNumberTuples : [string, number];
stringAndNumberTuples = ["Hello", 22];

// stringAndNumberTuples = [22, "Hello"] //error the first element must be string and
// the second number

// stringAndNumberTuples = ["Hello", 22, [], {}] //error types don't match

// stringAndNumberTuples = ["Hello", 22, "World", 123] // error just two elements needed

/**
 * void, undefined, null
 */
var  myFunc  = () : void => {
    console.log("Void Function");
};

var myVoid : void = void myFunc();
myVoid = undefined;

var myNull : null = null;
myNull = undefined;

var myUndefined : undefined = undefined;

// TypeOf
document.writeln("<br/>");
document.writeln(typeof(stringAndNumberTuples));
document.writeln("<br/>");
document.writeln(typeof(myVoid));

// Functions
function sum2(num1: number, num2: number) : number{
    return num1 +  num2
}

var sumNumberString2 = function(
    num1: number | string, 
    num2: number | string) : number {
    if (typeof num1 == "string") num1 = parseInt(num1);
    if (typeof num2 == "string") num2 = parseInt(num2);
    return num1 + num2;
}

function getName2(firstName: string, surName?: string): string { //Second parameter is optional
    if (surName == undefined) return firstName;
    return `${firstName} ${surName}`;
}

document.writeln("<br/>");
document.writeln(getName("Edwin")); //Second parameter is optional
document.writeln("<br/>");
document.writeln(getName("Edwin", "CodeX"));

// void Function 
function myVoidFunction2(): void {
    return;
}

/**
 * Interfaces
 */

function showCustomer2(customer: {name: string, country: string}){
    console.log(`${customer.name} - ${customer.country}`);
}

showCustomer2({name: "Edwin", country: "Germany"});

interface Customer2 {
    name: string;
    country: string;
}

function showCustomer3(customer: Customer){
    console.log(`${customer.name} - ${customer.country}`);
}

var myCustomer: Customer2 = {
    name: "Edwin", country: "Germany"
}

showCustomer3(myCustomer);