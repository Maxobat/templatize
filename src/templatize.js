const Context = require('./context/string');
const StringContext = require('./context/string');
const ExpressionContext = require('./context/expression');

class Templatize extends Context {
    constructor(input) {
        super(null);
        this.currentContext = this.getInstance();
        this.baseInput = input;
    }

    get context() {
        return this.currentContext;
    }

    set context(val) {
        this.structure.push(this.context);
        this.currentContext = val;
    }

    start() {
        const input = this.baseInput;
        const inputLength = input.length;
        let i = 0;

        while (i < inputLength) {
            const currentChar = input.charAt(i);

            this.previousChar = this.currentChar;
            this.currentChar = currentChar;
            this.interpret(currentChar);
            i++;
        }

        this.structure.push(this.context);

        return this;
        // return this.render();
    }

    interpret(character) {
        switch (true) {
        case character === '"':
            if (this.context.type !== 'string') {
                this.context = new StringContext();
            } else {
                this.context = this.context.close();
            }
            break;
        case character.match(/\w/) !== null:
            if (!this.context.type) {
                this.context = new ExpressionContext();
            }
        // case character === '+':
        // case character.match(/\s/):
        default:
            this.context.input(character);
            // console.log('NOT A QUOTE');
        }
    }
}

module.exports = input => new Templatize(input).start();
