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
const  myFunc1  = () : void => {
    console.log("Void Function");
};

let myVoid1 : void = void myFunc1();
myVoid1 = undefined;

let myNull1 : null = null;
myNull1 = undefined;

let myUndefined1 : undefined = undefined;


