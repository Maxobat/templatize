const Context = require('./context');

class ExpressionContext extends Context {
    constructor() {
        super('expression');
    }
}

module.exports = ExpressionContext;
