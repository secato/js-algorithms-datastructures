// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let steps = 1;
  while (steps <= n) {
    console.log(''.padStart(steps, '#') + ''.padEnd(n - steps, ' '));
    steps++;
  }
}

function steps2(n) {
  for (let r = 0; r < n; r++) {
    let str = '';

    for (let c = 0; c < n; c++) {
      if (c <= r) {
        str += '#';
      } else {
        str += ' ';
      }
    }

    console.log(str);
  }
}


module.exports = steps;
