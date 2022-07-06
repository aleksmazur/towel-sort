// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resArr = [];
  if (matrix === undefined) {
    return resArr;
  } else if (matrix.length === 0) {
    return resArr;
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      resArr.push(matrix[i].reverse());
    } else {
      resArr.push(matrix[i]);
    }
  }
  return resArr.flat();
}
