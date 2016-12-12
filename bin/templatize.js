const templatize = require('../src/templatize');
const str = process.argv.slice(2)[0];

console.log(templatize(str).render());
