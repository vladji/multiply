module.exports = function multiply(first, second) {
  let result = [];
  const firstArr = first.split('').reverse();
  const secondArr = second.split('').reverse();

  for (let i = 0; i < firstArr.length; i++) {
    for (let k = 0; k < secondArr.length; k++) {
      const mulNum = firstArr[i] * secondArr[k];
      result[i + k] = result[i + k] ? result[i + k] + mulNum : mulNum;
    }
  }

  for (let i = 0; i < result.length; i++) {
    const num = result[i] % 10;
    const rest = Math.floor(result[i] / 10);
    result[i] = num;

    if (rest > 0) {
      result[i + 1] = result[i + 1] ? result[i + 1] += rest : rest;
    }
  }
  return result.reverse().join('');
}
