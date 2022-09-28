export default function Board(array)  {
  this.rows = array;
  this.columns = array;
  this.boxes = array;
}

const testBoard = [
  ["2","3",".","9","4",".","6","7","."],
  ["8",".",".","3","2","5","9","1","4"],
  ["9",".",".","7","6",".","3","2","."],
  ["1",".",".",".",".",".","7","9","2"],
  ["5",".","3","2","1",".","4","8","6"],
  ["4",".",".","6","8",".","5","3","1"],
  ["7",".",".","1",".",".",".",".","9"],
  ["6","5","9","8","7","2","1","4","3"],
  ["3",".",".",".","9",".",".",".","7"]
];

Board.prototype.checkSudokuValid = function() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let cell = testBoard[i][j];

      if (cell !== ".") {
        this.rows[i].push(cell);
        this.columns[j].push(cell);
      }
    }
  }
}