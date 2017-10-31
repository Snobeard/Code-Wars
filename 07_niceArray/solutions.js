function isNice(arr){
  if (arr.length === 0) {
    return false;
  }
  return arr.every(function(current, i, arr){
    return (arr.includes(current + 1) || arr.includes(current - 1))
  })
}
