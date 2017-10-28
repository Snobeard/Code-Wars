// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++ Validate Pin Code
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
function validatePIN (pin) {
  return Boolean(pin.match(/^\d{4}$|^\d{6}$/));
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++ Alternate Capitalization
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
function capitalize(s){
  let array = s.match(/(.)/g);

  let odd = array.map(function(current, index) {
    if ((index + 2) % 2 === 1) {
      current = current.toUpperCase();
    }
    return current;
  });

  let even = array.map(function(current, index) {
    if ((index + 2) % 2 === 0) {
      current = current.toUpperCase();
    }
    return current;
  });

  return [even.join(''), odd.join('')];
};
