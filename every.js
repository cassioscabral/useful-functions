function every(arr, checkFunction) {
  for (let item of arr) {
    if (checkFunction(item) === false) {
      return false;
    }
  }
  return true;
}
