import { LEVELS_NUMBER } from '@/defaults';

export default class Sudoku {
    level: string;
    private pattern: number[];
    board: (string|number)[][];
    hide: (string|number)[][];
    levels: { [key: string]: number; };
    private boardSize: number;
    private emptyCell: number;

    constructor(level: string) {
        this.level = level;
        this.pattern = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.boardSize = 9;
        this.emptyCell = 0;
        this.board = [];
        this.hide = [];
        this.levels = LEVELS_NUMBER
    }

    _hideElementsBySize(array_1d: (number|string)[]) {
        const shuffled = Array.from(Array(this.pattern.length * this.pattern.length).keys())

        let i = shuffled.length
        let temp, index;

        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        const shuffledSlicted = shuffled.slice(0, this.levels[this.level]);

        const tmpHide = array_1d.slice(0);

        shuffledSlicted.forEach(item => {
            tmpHide[item] = '';
        })

        this.hide = this.convert_2d_array(tmpHide);
    }

    isValid(row: number, col: number, value: number) {
        for (let i = 0; i < this.boardSize; i++) {
          if (this.board[row][i] === value || this.board[i][col] === value) {
            return false;
          }
        }
    
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;
        for (let i = boxRow; i < boxRow + 3; i++) {
          for (let j = boxCol; j < boxCol + 3; j++) {
            if (this.board[i][j] === value) {
              return false;
            }
          }
        }
    
        return true;
      }
    
    backtrack(row: number, col: number): boolean {
        if (row === this.boardSize) {
          return true;
        }
    
        let nextRow = row, nextCol = col + 1;
        if (nextCol === this.boardSize) {
          nextRow++;
          nextCol = 0;
        }
    
        if (this.board[row][col] !== this.emptyCell) {
          return this.backtrack(nextRow, nextCol);
        }
    
        const values = this.shuffle([...Array(this.boardSize)].map((_, i) => i + 1));
        for (const value of values) {
          if (this.isValid(row, col, value)) {
            this.board[row][col] = value;
            if (this.backtrack(nextRow, nextCol)) {
              return true;
            }
            this.board[row][col] = this.emptyCell;
          }
        }
    
        return false;
    }

    generate() {
        this.board = Array.from({ length: this.boardSize }, () => Array.from({ length: this.boardSize }, () => this.emptyCell));
      
        this.backtrack(0, 0);

        this._hideElementsBySize(([] as (number|string)[]).concat(...this.board))

        return {
            board: this.board,
            hide: this.hide,
        }
    }
      
    shuffle(array: number[]) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    convert_2d_array(arr_1d: (number|string)[]) {
        const tmp: (number|string)[][] = [[],[],[],[],[],[],[],[],[]];
        let j = 0;

        for(let i = 0; i < arr_1d.length; i++) {
            if(i!==0 && i%9 === 0) {
                j += 1
            }
            tmp[j].push(arr_1d[i])
        }

        return tmp;
    }

}