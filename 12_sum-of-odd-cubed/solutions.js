function cubeOdd(arr) {
  if (arr.map((c) => (c + '').match(/\d/)).includes(null)) return undefined;

  return arr.filter(c => c % 2).reduce((a, c) => a + (Math.pow(c, 3)), 0);
}
