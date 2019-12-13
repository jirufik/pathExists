const pathExists = require('./pathExists');

const obj = {
  a: {
    b: {
      c: 'hello world'
    }
  },
  d: {
    arr: [
      'hello',
      'world',
      {
        a: 8,
        b: ['one', 'two', 'three']
      },
      ['q', 'w', 'r', ['h', 'l', 'o']]
    ]
  },
  e: ['one el', 'two el']
};

const b = 'b';

test('a.b.c', () => {

  const res = pathExists(obj, 'a.b.c', null);
  expect(res).toEqual('hello world');

});

test('a[${b}].c', () => {

  const res = pathExists(obj, `a[${b}].c`);
  expect(res).toEqual('hello world');

});

test('a.${b}.c', () => {

  const res = pathExists(obj, `a[${b}].c`);
  expect(res).toEqual('hello world');

});

test('a.b.c.d.s', () => {

  const res = pathExists(obj, `a.b.c.d.s`);
  expect(res).toBeUndefined();

});

test('d.arr[2].b[1]', () => {

  const res = pathExists(obj, 'd.arr[2].b[1]');
  expect(res).toEqual('two');

});

test('d.arr[3].3.2', () => {

  const res = pathExists(obj, 'd.arr[3].3.2');
  expect(res).toEqual('o');

});

test('d.arr[3][3][2]', () => {

  const res = pathExists(obj, 'd.arr[3][3][2]');
  expect(res).toEqual('o');

});

test('e[1]', () => {

  const res = pathExists(obj, 'e[1]');
  expect(res).toEqual('two el');

});

test('e[4]', () => {

  const res = pathExists(obj, `e[4]`);
  expect(res).toBeUndefined();

});

test('default: null', () => {

  const res = pathExists(obj, `e[4]`, null);
  expect(res).toBeNull();

});

test('default: false', () => {

  const res = pathExists(obj, `e[4]`, false);
  expect(res).toBeFalsy();

});

test('default: 0', () => {

  const res = pathExists(obj, `e[4]`, 0);
  expect(res).toEqual(0);

});

test('default: []', () => {

  const res = pathExists(obj, `e[4]`, []);
  expect(res).toEqual([]);

});

test(`default: ''`, () => {

  const res = pathExists(obj, `e[4]`, '');
  expect(res).toEqual('');

});

test(`default: {}`, () => {

  const res = pathExists(obj, `e[4]`, {});
  expect(res).toMatchObject({});

});

console.log(pathExists(obj, 'a.b.c'));
console.log(pathExists(obj, `a[${b}].c`));
console.log(pathExists(obj, 'a.b.c.d.s'));
console.log(pathExists(obj, 'd.arr[2].b[1]'));
console.log(pathExists(obj, 'd.arr[3].3.2'));
console.log(pathExists(obj, 'd.arr[3][3][2]'));
console.log(pathExists(obj, 'e[1]'));
console.log(pathExists(obj, 'e[4]'));
console.log(pathExists(obj, 'e[4]', null));
console.log(pathExists(obj, 'e[4]', false));
console.log(pathExists(obj, 'e[4]', 0));
console.log(pathExists(obj, 'e[4]', []));
console.log(pathExists(obj, 'e[4]', ''));
console.log(pathExists(obj, 'e[4]', {}));
