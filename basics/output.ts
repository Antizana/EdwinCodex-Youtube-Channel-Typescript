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
function sum(num1: number, num2: number) : number{
    return num1 +  num2
}

var sumNumberString = function(
    num1: number | string, 
    num2: number | string) : number {
    if (typeof num1 == "string") num1 = parseInt(num1);
    if (typeof num2 == "string") num2 = parseInt(num2);
    return num1 + num2;
}

function getName(firstName: string, surName?: string): string { //Second parameter is optional
    if (surName == undefined) return firstName;
    return `${firstName} ${surName}`;
}

document.writeln("<br/>");
document.writeln(getName("Edwin")); //Second parameter is optional
document.writeln("<br/>");
document.writeln(getName("Edwin", "CodeX"));

// void Function 
function myVoidFunction(): void {
    return;
}

/**
 * Interfaces
 */

function showCustomer(customer: {name: string, country: string}){
    console.log(`${customer.name} - ${customer.country}`);
}

showCustomer({name: "Edwin", country: "Germany"});

interface Customer {
    name: string;
    country: string;
}

function showCustomer1(customer: Customer){
    console.log(`${customer.name} - ${customer.country}`);
}

var myCustomer: Customer = {
    name: "Edwin", country: "Germany"
}

showCustomer(myCustomer);

// Classes

class User {
    name: string;
    email: string;
    age: number;

    constructor (name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log(`user ${this.name}`);
    }

    public register() : void {
        console.log(`${this.name} is now registered`);
    }

    public showAge() : number{
        return this.age;
        
    }

    private ageInYears() : string {
        return this.age + ' years';
    }

    payInvoice(){
        console.log(`${this.name} payed the invoice.`);
        
    }
}

var john = new User('John Smith', 'john@mail.com', 27);
var mary = new User('Mary Smith', 'mary@mail.com', 26);
