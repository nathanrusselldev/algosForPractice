// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false



var zeroesAndOnes = function(str) {
    let zeroes = 0;
    let ones = 0;
    for (let i = 0; i < str.length; i++) {
        let num = str[i]

        if (num === '0') {
            ++zeroes;
        } else if (num === '1') {
            ++ones;
        }
    }
    return zeroes === ones;
};

  

