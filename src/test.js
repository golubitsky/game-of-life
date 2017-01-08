var size = 10;

function getInitialState() {
  var cells = Array(size * size).fill(false);
  [23,34,42,43,44].forEach(function(cell) {
    cells[cell] = true;
  });

  return cells;
}


var array = getInitialState();
function countNeighbors(i) {
  var offsets = [-size - 1, -size, -size + 1, -1, 1, size - 1, size, size + 1];

  return offsets.filter(function (offset) {
    var neighborIndex = i + offset;
    return array[neighborIndex];
  }).length
}

function isAlive(i) {
  var neighbors = countNeighbors(i);
  // if alive
  if (array[i]) {
    return neighbors > 1 && neighbors < 4;
  } else {
    return neighbors === 3;
  }
}

function updateSquares(){
    return array.map(function(naklsdf, i){
      return isAlive(i);
    });
  }

var updated = updateSquares();

var expectedResult = Array(size*size).fill(false);

[32,34,43,44,53].forEach(function(cell) {
  expectedResult[cell] = true;
});

var result = updateSquares();
result.forEach(function(x, i) {
  if (x) {
    console.log(i);
  }
});
// console.log(result);

