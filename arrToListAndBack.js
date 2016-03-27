// [1,2,3]
// {value: 1, rest: {value: 2, rest: {...}}}
function arrayToList(arr) {
  var head = {},
      current = head;
  for (var i = 0; i < arr.length; i++) {
    current.value = arr[i];
    current.rest = {};
    current = current.rest;
  }
  return head;
}

// {value: 1, rest: {value: 2, rest: {...}}}
// [1,2,3]
function listToArray(list) {
  var arr = [],
      current = list;
  while (current.rest !== undefined) {
    arr.push(current.value);
    current = current.rest;
  }
  current.rest = undefined;
  return arr;
}

function prepend(element, list) {
  return {value: element, rest: list};
}

function nth(list, position, count = 0) {
  console.log(list, position, count);
  if (list === undefined) {
    return;
  }
  if (position === count) {
    return list.value;
  } else {
    return nth(list.rest, position, ++count);
  }
}
