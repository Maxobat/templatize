
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
        let output = '';

        this.structure.forEach(el => {
            if (el.type === 'string') {
                output += `"${el.render()}"`;
            }
        });
    }
}

module.exports = Context;
