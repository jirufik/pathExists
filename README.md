## Does the object have a path

`npm i jrf-path-exists`

Get the value of an object along the path. 

If the path does not exist, then `undefined` or the `default value` will be returned.

```js
/**
  *  Get the value of an object along the path.
  *  @param {object} obj - object
  *  @param {string} path - path
  *  @param {*} [defaultValue] - default value
  */
pathExists(obj, path, defaultValue);
```

```js
const user = response && response.data && response.data.nodes && response.data.nodes[0] && response.data.nodes[0].builds && response.data.nodes[0].builds[0] && response.data.nodes[0].builds[0].user;
const user = pathExists(response, 'response.data.nodes[0].builds[0].user');

let user = response && response.data && response.data.nodes && response.data.nodes[0] && response.data.nodes[0].builds && response.data.nodes[0].builds[0] && response.data.nodes[0].builds[0].user;
user = user || {username: ''};
const user = pathExists(response, 'response.data.nodes[0].builds[0].user', {username: ''});
```

```js
const pathExists = require('jrf-path-exists');

const obj = {
  a: {
    b: {
      c: 'hello world'
    }
  },
  d: {
    arr: ['hello', 'world', {a: 8, b: ['one', 'two', 'three']}, ['q', 'w', 'r', ['h', 'l', 'o']]]
  },
  e: ['one el', 'two el']
};

const b = 'b';

console.log(pathExists(obj, 'a.b.c', null));     // --> 'hello world'
console.log(pathExists(obj, `a[${b}].c`));       // --> 'hello world'
console.log(pathExists(obj, `a.${b}.c`));        // --> 'hello world'
console.log(pathExists(obj, 'a.b.c.d.s'));       // --> undefined
console.log(pathExists(obj, 'd.arr[2].b[1]'));   // --> 'two'
console.log(pathExists(obj, 'd.arr[3].3.2'));    // --> 'o'
console.log(pathExists(obj, 'd.arr[3][3][2]'));  // --> 'o'
console.log(pathExists(obj, 'e[1]'));            // --> 'two el'
console.log(pathExists(obj, 'e[4]'));            // --> undefined
console.log(pathExists(obj, 'e[4]', null));      // --> null
console.log(pathExists(obj, 'e[4]', false));     // --> false
console.log(pathExists(obj, 'e[4]', 0));         // --> 0
console.log(pathExists(obj, 'e[4]', []));        // --> []
console.log(pathExists(obj, 'e[4]', ''));        // --> ''
console.log(pathExists(obj, 'e[4]', {}));        // --> {}
```
