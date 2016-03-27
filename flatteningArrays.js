// [[1,2],[3,4]] => [1,2,3,4]
function flatten(arr) {
  return arr.reduce( (prev, curr) => prev.concat(curr) );
}g
