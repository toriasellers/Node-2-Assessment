const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

// tests
const tests = [
  ['00:00', 'midnight'],
  ['00:12', 'twelve twelve am'],
  ['01:00', 'one o\u0027clock am'],
  ['06:01', 'six o\u0027one am'],
  ['06:10', 'six ten am'],
  ['06:18', 'six eighteen am'],
  ['06:30', 'six thirty am'],
  ['10:34', 'ten thirty four am'],
  ['12:00', 'noon'],
  ['12:09', 'twelve oh nine pm'],
  ['23:23', 'eleven twenty three pm'],
];

for (const test of tests) {
  const input = test[0];
  const output = test[1];

  console.log(`Input: ${input}`);
  console.log(`Expected output: ${output}`

}
