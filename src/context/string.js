const Context = require('./context');

class StringContext extends Context {
    constructor() {
        super('string');
    }
}

module.exports = StringContext;
