// Zero matrix - write an algorithm such that if an element is an M x N matrix is 0, its entire row and column are set to 0. 

const matrix = [
    [1, 2, 3],
    [4, 0, 6],
    [9, 10, 0]
]
console.log(matrix)

const makeZeroes = (matrix) => {
    // Set number of rows
    const rows = matrix.length
    // set number of columns
    const cols = matrix[0].length

    // make sets of the zero rows and columns
    const zeroRows = new Set()
    const zeroCols = new Set()

    // loop through zero indexed list of rows and then through the columns, 
    for(let i = 0; i < rows; i++) {
       for(let j = 0; j < cols; j++) {
        if(matrix[i][j] === 0) {
            zeroRows.add(i)
            zeroCols.add(j)
        }
       }
    }
    // Find every row with a zero and replace that position with a 0
    zeroRows.forEach(row => {
        for(let j = 0; j < cols; j++) {
            matrix[row][j] = 0
        }
    })
    // find every column with a zero and replace it's neighbors
    zeroCols.forEach(col => {
        for(let i = 0; i < rows; i++) {
            matrix[col][i] = 0
        }
    })
    console.log(matrix)
}
