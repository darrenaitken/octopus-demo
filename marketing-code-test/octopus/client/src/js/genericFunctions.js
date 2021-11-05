// Function adds leading zeros (same as ES2017 zeroPad)
export function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

// Function returns true if button was clicked, space bar keydown or enter keydown
export function validInteraction(e) {
  return e.keyCode === 13 || e.keyCode === 32 || e.type === "click";
}
