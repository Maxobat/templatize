# Templatize
### Convert additive strings to ES6 template strings.

## Example
```javascript
    'this ' + 'is ' + 'a ' + 'string. ' + testVariable + (testVariable ? 'foo' : 'bar')
```

Compiles to

```javascript
    `this is a string. ${testVariable}${(testVariable ? 'foo' : 'bar')}`
```

## Usage
```javascript
    const templatize = require('templatize-string');
    const foo = 'bar';

    let templatized = templatize('foo is equal to ' + foo).renderWrapped(); // Will return `foo is equal to ${foo}`

```

## Methods
#### render
Returns templatized string.
```javascript
    let templatized = templatize('foo is equal to ' + foo).render(); // Will return 'foo is equal to ${foo}'
```

#### renderWrapped
Arguments:
- wrappingChar -> The character the rendered string will be wrapped in. Default is ``` ` ```.

Returns templatized string wrapped with the specified character.
```javascript
    let templatized = templatize('foo is equal to ' + foo).renderWrapped(); // Will return `foo is equal to ${foo}`

```
