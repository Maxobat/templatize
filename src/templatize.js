
class Templatize {
    constructor(input) {
        this.baseInput = input;
        this.input = input;
        this.outputStucture = [];
        this.output = '';
        this.escapeString = '@@@';
        this.additiveEscapeString = '@@@@';
    }

    render() {
        return this.output;
    }

    renderWrapped(character = '`') {
        return this.output === '' ? this.output : (character + this.output + character);
    }

    start() {
        if (this.input !== '') {
            this.strip();
            this.escapeChars();
            this.interpret();
            this.unescapeExpressionAdditives();
        }

        return this;
    }

    strip() {
        this.input = this.input.replace('\n', '');
        this.input = this.input.replace('\t', '');
    }

    escapeChars() {
        this.escape(/(\(.+\+.+\))/gmi, match => match.replace('+', this.escapeString));
        this.escape(/(\s|\t)*\+(\s|\t)*/gmi, this.additiveEscapeString);
    }

    escape(pattern, replacement) {
        this.input = this.input.replace(pattern, replacement);
    }

    escapeExpressionAdditives() {
        this.input = this.input.replace(/(\(.+\+.+\))/gmi, match => {
            return match.replace('+', this.escapeString);
        });
    }

    escapeAdditives() {
        this.input = this.input
    }

    unescapeExpressionAdditives() {
        this.output = this.output.replace(this.escapeString, '+');
    }

    interpret() {
        let i = 0;
        let structure = this.input.split(this.additiveEscapeString);
        const structureLen = structure.length;

        while (i < structureLen) {
            this.parsePiece(structure[i]);
            i++;
        }

        this.output = this.outputStucture.join('');
    }

    parsePiece(piece) {
        let parsed;

        if (piece.startsWith("'") || piece.startsWith('"')) {
            parsed = this.parseString(piece);
        } else {
            parsed = this.parseExpression(piece);
        }

        this.outputStucture.push(parsed);
    }

    parseString(str) {
        return str.substr(1, str.length - 2);
    }

    parseExpression(expr) {
        return '${' + expr + '}';
    }
}

module.exports = input => new Templatize(input).start();
