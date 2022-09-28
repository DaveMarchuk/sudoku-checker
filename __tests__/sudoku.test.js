import Board from './../src/sudoku.js';

describe('Board', ()=> {

  test('should create a board object with three properties', () => {
    const sudokuBoard = new Board(9);
    expect(sudokuBoard.rows).toEqual(9);
    expect(sudokuBoard.columns).toEqual(9);
    expect(sudokuBoard.boxes).toEqual(9);
  });
});