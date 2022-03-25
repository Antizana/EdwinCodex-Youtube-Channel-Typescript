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
document.writeln(myNumber.toString());

// Arrays
var stringArray = ["", "", ""]
// stringArray = [1, 2, 3]; error, expecting strings into the array

// Any Array
var anyArray : any[] = ["", "", ""];
anyArray = [1, 2, 3, true];

var stringArray : string[] = ["Item 1", "Item 2", "Item 3"];
var numberArray : number[] = [1, 2, 3, 4];
var booleanArray : boolean[] = [true, false, true];

