import Board from './../src/sudoku.js';

describe('Board', ()=> {

  test('should create a board object with three properties', () => {
    const sudokuBoard = new Board(this.rows,this.columns);
    expect(sudokuBoard.rows).toEqual(sudokuBoard.rows);
    expect(sudokuBoard.columns).toEqual(sudokuBoard.columns);
    //expect(sudokuBoard.boxes).toEqual(9);
  });

  test('should check if each cell is empty in a row', () => {
    const testBoard = [
      ["2","3",".","9","4",".","6","7","."]
    ];
    const sudokuBoard = new Board(testBoard,[]);
    expect(sudokuBoard.checkSudokuValid()).toEqual(testBoard);
  });

  test('should check if each cell is empty in a row and column', () => {
    const testBoard = [
      ["2","3",".","9","4",".","6","7","."]
      ["8",".",".","3","2","5","9","1","4"],
      ["9",".",".","7","6",".","3","2","."],
      ["1",".",".",".",".",".","7","9","2"],
      ["5",".","3","2","1",".","4","8","6"],
      ["4",".",".","6","8",".","5","3","1"],
      ["7",".",".","1",".",".",".",".","9"],
      ["6","5","9","8","7","2","1","4","3"],
      ["3",".",".",".","9",".",".",".","7"]
    ];
    const sudokuBoard = new Board(testBoard,testBoard);
    expect(sudokuBoard.checkSudokuValid()).toEqual(testBoard);
  })
});

