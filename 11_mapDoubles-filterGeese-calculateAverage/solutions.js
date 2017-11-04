// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++ Map to double values in Array
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
function double(array) {
    return array.map((current) => current * 2);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++ Filter out the Geese
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(current => !geese.includes(current));
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++ Calculate Average
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
function find_average(array) {
  return array.reduce((cumulative, current, index, arr) => {
    if (index === (arr.length-1)) {
      return ((cumulative + current) / arr.length)
    }
    return cumulative + current;
    });
}
