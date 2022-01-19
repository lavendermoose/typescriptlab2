export class Greeter {
    greeting: string;

    constructor(greeting: string) {
        this.greeting = greeting;
    }

    greet(name: string) {
        return `${this.greeting}, ${name}!`
    }    
}

const hey = new Greeter('Hello');

console.log(hey.greet('Dana'));
console.log(hey.greet('Baby'));
console.log(hey.greet('Sylvester'));