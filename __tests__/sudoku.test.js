import Board from './../src/sudoku.js';

describe('Board', ()=> {

  test('should create a board object with three properties', () => {
    const sudokuBoard = new Board(9);
    expect(sudokuBoard.rows).toEqual(9);
    expect(sudokuBoard.columns).toEqual(9);
    expect(sudokuBoard.boxes).toEqual(9);
  });

  test('should check if each cell is empty in a rows and columns', () => {
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
    const sudokuBoard = new Board(testBoard);
    expect(sudokuBoard.checkSudokuValid()).toEqual(testBoard);
  });
});