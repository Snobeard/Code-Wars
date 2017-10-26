function insertDash(num) {
  num = num.toString();
  return num.replace(/([13579](?=[13579]))/g, '$1-');
}
