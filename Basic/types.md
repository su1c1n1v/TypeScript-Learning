## TypeScript Types
---
1. Basic types
   * Number
    ```typescript
    let number: number = 1
    ```

   * String
    ```typescript
    let string: string = 'string'
    ```

   * Boolean
    ```typescript
    let boolean: boolean = true
    ```

   * Any
    ```typescript
    let any: any = 'any' // Can be anything boolean, string, number, ...
    ```
---
2. Tuples
    ```typescript
    let personTuple: [number, string, boolean] = [3, 'Name', false]
    ```
---
3. Unions
    ```typescript
    let union: string | number = '23' // It can be string or number
    ```
---
4. Enums
    ```typescript
    enum Enum1 {
        Up,   // Position = 0
        Down, // Position = 1
        Left, // Position = 2
        Right // Position = 3
    }
    ```
---
5. Objects
    ```typescript
    type User = { // Object User with two propeties (id: number and name: string)
        id: number,
        name: string
    }

    const constUser1: User = { // Const of type User
        id: 1,
        name: 'Vinicius'
    }
    ```
---
6. Type Assertion
    ```typescript
    let typeAny: any
    // Differents way to use type assertion
    let typeAssertion1 = <number>typeAny // It is any but typeAssertion in this case can be only number
    let typeAssertion2 = typeAny as number // It is any but typeAssertion in this case can be only number
    ```
---
7. Functions
    * Number
    ```typescript
    function addNumber(x: number, y: number): number {
        return x + y
    }   
    ```
    * Void
    ```typescript
    function print(message: string): void {
        console.log(message)
    }  
    ```
---
8. Interfaces
    ```typescript
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
        (x: number, y:number): number // Receive two numbers and retorn a number
    }

    // Implements the interface
    const add: MathFunc = (x: number, y: number): number => x + y // Arrow function
    const sub: MathFunc = (x: number, y: number): number => x - y // Arrow function
    ```
---
9. Classes
    ```typescript
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
    ```
7. Generics
    ```typescript
    function getArray<T>(items: T[]): T[] { // Receive a array of any type and return
        return new Array().concat(items)
    }

    const numArray = getArray<number>([1,2,3,4,5])
    const stringArray = getArray<string>(['vinicus', 'silva', 'costa'])

    console.log(numArray)
    ```
---
```
Credits: https://www.youtube.com/watch?v=BCg4U1FzODs&t=845s&ab_channel=TechLead
YouTube Channel: Traversy Media
```