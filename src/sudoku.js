export default function Board(rowsArr = [])  {
  this.rows = rowsArr;
  //this.columns = [];
  //this.boxes = [[]];
}

const testBoard = [
  ["2","3",".","9","4",".","6","7","."]
/*  ["8",".",".","3","2","5","9","1","4"],
  ["9",".",".","7","6",".","3","2","."],
  ["1",".",".",".",".",".","7","9","2"],
  ["5",".","3","2","1",".","4","8","6"],
  ["4",".",".","6","8",".","5","3","1"],
  ["7",".",".","1",".",".",".",".","9"],
  ["6","5","9","8","7","2","1","4","3"],
  ["3",".",".",".","9",".",".",".","7"]*/
];

Board.prototype.checkSudokuValid = function() {
  for (let i = 0; i < testBoard.length; i++) {
    let cell = testBoard[i];

    if (cell !== ".") {
      console.log(cell);
      this.rows[i].push(cell);
      //this.columns[j].push(cell);
    }
  }
  return this.rows;
}