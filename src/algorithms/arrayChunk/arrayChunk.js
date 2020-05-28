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

module.exports = chunk;
