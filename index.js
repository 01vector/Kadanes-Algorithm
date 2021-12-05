'use strict'

class Kadanes_Algorithm {

    /* this constructor creates arrays for our algorithm */
    constructor(...numbers_for_array) {
        this.array = [];

        numbers_for_array.forEach( (val, indx) => {
            this.array[indx] = val;
        })
    }

    /**
     * Kadane's algorithm
     * 
     * @returns the max sum of elements in continuous subarray in the general array
     */
    max_Sum_Subarray() {

        let curSum = 0;  //  stores a current sum value
        let maxSum = 0;  //  stores a max sum BEFORE current iteration

        for (const elem of this.array) {
            curSum += elem;

            if (curSum >= maxSum) maxSum = curSum;
            else if (elem < 0) curSum = 0;
        }
        
        console.log(maxSum); 
    }
}

// All numbers are positive
const array_1 = new Kadanes_Algorithm(3, 2, 7, 10).max_Sum_Subarray();
//  returns 22 (3 + 2 + 7 + 10)


// Positive and negative numbers
const array_2 = new Kadanes_Algorithm(3, -5, 2, 7, -11, 5).max_Sum_Subarray();
//  returns 9 (2 + 7)


// Only one of numbers is result
const array_3 = new Kadanes_Algorithm(3, 5, 2, -8, 12, -1).max_Sum_Subarray();
//  returns 12 (12)


// Big numbers
const array_4 = new Kadanes_Algorithm(10544993, -11005590, 19444893, 243553792, -273844898).max_Sum_Subarray();
//  returns 262855 (19483 + 243372)


// All numbers are negative
const array_5 = new Kadanes_Algorithm(-3, -5, -7, -1).max_Sum_Subarray(); 
// Returns 0 because we didn't add a checking mechanism for elements in the array.
// This problem has easy solution. We can add loop or devise another way.


/* 
    This is a core of the Kadane's algorithm.
    We can improve this algorithm: to find left and right limits (indexes), to add checking mechanism for negative numbers, 
    to check elements that match the condition etc. 
*/


