function solution(str){
  let newArr = str.split('');
  newArr = newArr.map((cur, i, arr) => {
    return arr[(arr.length-1-i)];
  })
  return newArr.join('');
}

//---------------------------------------------------

function solution(str){
  return str.split('').reverse().join('');
}
