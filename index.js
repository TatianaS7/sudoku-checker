// PROVIDED FOR YOU. DO NOT CHANGE puzzle or puzzleTwo

//puzzle
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];


//puzzle 2
let puzzleTwo = [[ 8,9,5,7,4,2,1,3,6 ],
                [ 8,7,1,9,6,3,4,8,5 ],
                [ 4,6,3,5,8,1,7,9,2 ],
                [ 9,3,4,6,1,7,2,5,8 ],
                [ 5,1,7,2,3,8,9,6,4 ],
                [ 6,8,2,4,5,9,3,7,1 ],
                [ 1,5,9,8,7,4,6,2,3 ],
                [ 7,4,6,3,2,5,8,1,9 ],
                [ 3,2,8,1,9,6,5,4,7 ]];

//DO NOT EDIT ABOVE

function getRow(puzzle, row) {
  // YOUR CODE
    newRow = puzzle[row];
    return newRow;
} 

function getColumn(puzzle, col) { 
  // YOUR CODE
    newCol = [];

    for (let i = 0; i < puzzle.length; i++){
        newCol.push(puzzle[i][col]);
    }
return newCol;
}

function getSection(puzzle, x, y) { //ERROR instead of going left to right for x, it goes down, y
  // YOUR CODE
newSection = []; 
    x *= 3 ; //puzzle has 3x3 sub-grids
    y *= 3 ; //puzzle has 3x3 sub-grids
    
    for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
            newSection.push(puzzle[i][j]);
        }
    }
return newSection;
}
console.log (getSection (puzzle, 0, 0)); //comes out right
console.log (getSection(puzzle, 1, 0)); // returns 0, 1 instead of 1, 0

function includes1To9(arr) {
  // YOUR CODE
    for (let i = 1; i <= arr.length; i++){
        if (arr.indexOf(i) === -1) {
            return false;
        }
    }    
    return true;
}   

function sudokuIsValid(puzzle) { //ERROR doesnt return false for other invalid puzzles
  // YOUR CODE
    for (let i = 0; i < 9; i++){ //goes through length of puzzle
        if (includes1To9(puzzle[i]) !== true) { //if not true return false 
            return false;
        }
    }
return true;
}
console.log (sudokuIsValid (puzzle));
console.log (sudokuIsValid(puzzleTwo));

//DO NOT EDIT BELOW
module.exports = {
    getRow,
    getColumn,
    getSection,
    includes1To9,
    sudokuIsValid,
    puzzle,
    puzzleTwo
};
