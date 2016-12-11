
class Context {
    constructor(type) {
        this.type = type;
        this.structure = [];
        this.output = '';
    }

    input(character) {
        this.structure.push(character);
        return this;
    }

    close() {
        return new Context(null);
    }

    getInstance() {
        return this.close();
    }

    render() {
        this.structure.forEach(this.renderAction.bind(this));
        return this.outputRendered();
    }

    renderAction(el) {
        this.output += el;
    }

    outputRendered() {
        return this.output;
    }
}

module.exports = Context;
