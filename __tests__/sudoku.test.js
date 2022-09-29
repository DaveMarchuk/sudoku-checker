import Board from './../src/sudoku.js';

describe('Board', ()=> {

  test('should create a board object with three properties', () => {
    const sudokuBoard = new Board(9);
    expect(sudokuBoard.rows).toEqual(9);
    //expect(sudokuBoard.columns).toEqual(9);
    //expect(sudokuBoard.boxes).toEqual(9);
  });

  test('should check if each cell is empty in a row', () => {
    const testBoard = [
      ["2","3",".","9","4",".","6","7","."]
    ];
    const sudokuBoard = new Board(testBoard);
    expect(sudokuBoard.checkSudokuValid()).toEqual(testBoard);
  });
});