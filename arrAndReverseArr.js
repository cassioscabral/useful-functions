function reverseArray(arr) {
  var newArr = new Array();
  for (var i = arr.length - 1; i > -1; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  var temp, startRunner = 0;
  for (var i = arr.length - 1; i > arr.length / 2; i--) {
    temp = arr[i];
    arr[i] = arr[startRunner];
    arr[startRunner] = temp;
    startRunner++;
  }
  return arr;
}
