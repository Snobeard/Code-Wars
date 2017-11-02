function formatWords(words) {
  if (words) {
    words = words.filter((notSpace) => notSpace !== '');

  if (words.length > 1) {
    for (let i = 0; i < words.length - 2; i ++) {
      words[i] = words[i] + ',';
    }

    let last = words.pop();
    words.push('and');
    words.push(last);
  }

  return words.join(' ');
  }
  return '';
}
