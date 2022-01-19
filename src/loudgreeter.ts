import { Greeter } from "./greeter";

class LoudGreeter extends Greeter {

    extra: string = '!'

    constructor(greeting: string) {
        super(greeting)
    }

    greet(name: string) {
        return super.greet(name) + this.extra
    }

    addVolume() {
        this.extra += '!'
    }
}

const loud = new LoudGreeter('Hello');

loud.addVolume();
loud.addVolume();
loud.addVolume();

console.log(loud.greet('Dana'))