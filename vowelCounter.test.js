const vowelCounter = require('./VowelCounter');

test('hola number of vowels equal 2', () => {
  expect(vowelCounter("hola")).toBe(2);
});