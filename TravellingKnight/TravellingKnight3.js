const travellingKnight = (x, y, n) => {
  if (n === 0 || x >= n || y >= n) return [];
  let startRow = x;
  let startCol = y;
  let chessboardRowLength = n;
  let chessboardColumnLength = n;
  let pathFound = false;
  let path = [];

  // Creating visited 2D array for Depth first search of chessboard
  let visited = Array(chessboardRowLength)
    .fill()
    .map(() => Array(chessboardColumnLength));

  // Helper function for performing depth first search
  const DfsHelper = (currentRow, currentCol, pathstring) => {
    if (
      currentRow < 0 ||
      currentCol < 0 ||
      currentRow >= chessboardRowLength ||
      currentCol >= chessboardColumnLength ||
      visited[currentRow][currentCol]
    )
      return;
    visited[currentRow][currentCol] = true;
    path.push([currentRow, currentCol]);
    if (
      currentRow === chessboardRowLength - 1 &&
      currentCol === chessboardColumnLength - 1
    ) {
      pathFound = true;
    }
    console.log(
      ` current row is ${currentRow}, current column is  ${currentCol}`
    );

    DfsHelper(currentRow + 1, currentCol + 2); // For L shaped move in chessboard
    DfsHelper(currentRow + 2, currentCol + 1); // For L shaped move in chessboard
  };
  DfsHelper(startRow, startCol);
  return pathFound ? console.log(path) : [];
};

console.log(travellingKnight(0, 1, 3)); //This test case will yield the result
console.log(travellingKnight(0, 2, 7)); // This test case will not yield the result
