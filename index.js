const templatize = require('./src/templatize');

const template = templatize('"this" + "is" + "a" + "string" + state');

console.log(template.structure);

/**
 * TODO Get render working
 * TODO Add logic for expressions like variables.
 */
