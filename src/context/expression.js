const Context = require('./context');

class ExpressionContext extends Context {
    constructor() {
        super('expression');
    }

    outputRendered() {
        return '${' + this.output + '}';
    }
}

module.exports = ExpressionContext;
