// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

let startArray = [1, 2, 5, 4, 3]


var sortedSquares = function() {
    var result = new Array(startArray.length);
    
    let id1 = 0;
    let id2 = startArray.length-1;  // for given array = 4
    let id3 = result.length - 1; // 4

    while (id1 <= id2) {
        let left = startArray[id1];
        let right = startArray[id2];

        if (Math.abs(left) > Math.abs(right)) {
            result[id3] = left ** 2;
            id1++;
            console.log(result)
        } else {
            result[id3] = right ** 2;
            id2--;
            console.log(result)
        }
        id3--;
    }
   let sortedFinal = result.sort()
   return sortedFinal 
};


sortedSquares()