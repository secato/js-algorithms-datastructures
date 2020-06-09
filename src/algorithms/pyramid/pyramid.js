// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let totalColumns = 2 * n - 1;
  let midpoint = Math.floor(totalColumns / 2);

  for (let row = 0; row < n; row++) {
    let leftMax = midpoint - row;
    let rightMax = midpoint + row;
    let level = '';

    for (let column = 0; column < totalColumns; column++) {
      if (column >= leftMax && column <= rightMax) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

module.exports = pyramid;
