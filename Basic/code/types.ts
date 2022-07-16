// Basic types
let number: number = 1 // Number 1, 2/2, 0.2, ...
let string: string = 'string' // String 
let boolean: boolean = true // Boolean true or false
let any: any = 'any' // Can be anything boolean, string, number, ...

// Advanced types
// Arrays
let numberArray: number[] = [1,2,3,4]
let anyArray: any[] = [1, true, 'string']

// Tuples
let personTuple: [number, string, boolean] = [3, 'Name', false]

// Unions
let union: string | number = '23' // It can be string or number

// Enums
enum Enum1 {
    Up,   // Position = 0
    Down, // Position = 1
    Left, // Position = 2
    Right // Position = 3
}

// Objects
type User = { // Object User with two propeties (id: number and name: string)
    id: number,
    name: string
}

const constUser1: User = { // Const of type User
    id: 1,
    name: 'Vinicius'
}

// Type Assertion
let typeAny: any
// Differents way to use type assertion
let typeAssertion1 = <number>typeAny // It is any but typeAssertion in this case can be only number
let typeAssertion2 = typeAny as number // It is any but typeAssertion in this case can be only number

// Functions
// Number
function addNumber(x: number, y: number): number {
    return x + y
}

// Void
function print(message: string): void {
    console.log(message)
}

// Interfaces
interface IUser { // Interface User with two propeties (id: number and name: string)
    readonly id: number, // Can't be change
    name: string
    age?: number // Type optional
}

// You can't use an interface as a primitive type
//IUser testInterface = number | string

const constUser2: IUser = { // Const of type IUser
    id: 1,
    name: 'Vinicius'
}

// Interface Function
interface MathFunc {
    (x: number, y:number): number // Receved two numbers and retorn a number
}

// Implements the interface
const add: MathFunc = (x: number, y: number): number => x + y // Arrow function
const sub: MathFunc = (x: number, y: number): number => x - y // Arrow function

// Classes
class PersonClass {

    private id: number // Private can be only access inside the class
    protected name: string // Protected can be only access inside the class and the children of this class
    public age?: number // Public can be access outside of the class 

    constructor(id: number, name: string)
    {
        this.id = id
        this.name = name

        // Calling the method
        console.log(this.register())
    }

    private register() : string
    {
        return '${this.name} is now registered!'
    }
}

const constPerson = new PersonClass(1, 'Vinícius')

// Implement interface in a class
interface IPerson {

    id: number
    name: string
    age?: number

    register() : string
}

class Person implements IPerson {

    id: number // Private can be only access inside the class
    name: string // Protected can be only access inside the class and the children of this class
    age?: number // Public can be access outside of the class 

    constructor(id: number, name: string)
    {
        this.id = id
        this.name = name

        console.log(this.register())
    }

    register() : string
    {
        return '${this.name} is now registered!'
    }
}

// Extends

class Employee extends Person {

    position: string

    constructor(id: number, name: string, position: string)
    {
        super(id, name)
        this.position = position
    }
}

const employee = new Employee(2, 'Vinícius', 'Developer')


// Generics
function getArray<T>(items: T[]): T[] { // Recieved a array of any type and return
    return new Array().concat(items)
}

const numArray = getArray<number>([1,2,3,4,5])
const stringArray = getArray<string>(['vinicus', 'silva', 'costa'])

console.log(numArray)