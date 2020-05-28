function chunk(array, size) {
  //   Copy array
  //   const tmp = [...array];
  const tmp = array.slice();
  const chunks = [];

  while (tmp.length) {
    chunks.push(tmp.splice(0, size));
  }

  return chunks;
}

// second solution, more optimized without copying the array first
function chunk2(array, size) {
  const chunks = [];
  let start = 0;

  while (start < array.length) {
    chunks.push(array.slice(start, start + size));
    start += size;
  }

  return chunks;
}

// third solution, just another way
function chunk3(array, size) {
  const chunks = [];

  for (const element of array) {
    const last = chunks[chunks.length - 1];

    if (!last || last.length === size) {
      chunks.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunks;
}

module.exports = chunk2;
