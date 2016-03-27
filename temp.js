function deepEqual(one, other) {
  if (one === null && other === null) {
    return true;
  }
  if (typeof one === "object" && typeof other === "object") {
    var current;
    for (var key in one) {
      if (current === false) {
        return false;
      }
      if (other[key] === undefined) {
        return false;
      }
      current = deepEqual(one[key], other[key]);
    }
    return current; // last one might be false and never enter to line 8
  }
  if (one === other) {
    return true;
  }
}
