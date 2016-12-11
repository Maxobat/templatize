const Context = require('./context');

class StringContext extends Context {
    constructor() {
        super('string');
    }

    outputRendered() {
        return this.output.replace(/"/, '');
    }
}

module.exports = StringContext;
