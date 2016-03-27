function some(arr, checkFunction) {
  for (let item of arr) {
    if (checkFunction(item) === true) {
      return true;
    }
  }
  return false;
}
