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
var  myFunc  = () : void => {
    console.log("Void Function");
};

var myVoid : void = void myFunc();
myVoid = undefined;

var myNull : null = null;
myNull = undefined;

var myUndefined : undefined = undefined;

// TypeOf
document.writeln(typeof(stringAndNumberTuples));
document.writeln(typeof(myVoid));

// Functions
function sum1(num1: number, num2: number) : number{
    return num1 +  num2
}

var sumNumberString1 = function(
    num1: number | string, 
    num2: number | string) : number {
    if (typeof num1 == "string") num1 = parseInt(num1);
    if (typeof num2 == "string") num2 = parseInt(num2);
    return num1 + num2;
}

function getName1(firstName: string, surName: string): string {
    if (surName == undefined) return firstName;
    return firstName + surName;
}

// void Function 
function myVoidFunction1(): void {
    return;
}

