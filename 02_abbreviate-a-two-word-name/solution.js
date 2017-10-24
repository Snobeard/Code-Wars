function abbrevName(name){
  var names = name.split(' ');
  var first = names[0].charAt(0).toUpperCase();
  var second = names[1].charAt(0).toUpperCase();

  return `${first}.${second}`;
}
