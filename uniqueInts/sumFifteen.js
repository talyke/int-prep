
// // // // // // // // // // // // // // Your last C# code is saved below:
 // find unique sets of integer that add up to '15' from the follwing array: [4, 5, 6, 89, 23, 5, 2, 3, 5]
 //input = [4, 5, 6, 89, 23, 5, 2, 3, 5]
 // output =
 // // // [ 4, 5, 6 ],
 // // // [ 2, 3, 4, 6 ],
 // // // [ 2, 3, 5, 5 ],
 // // // [ 5, 5, 5 ]

// */

// this function reduces and sorts through any given array and target sum

function sumFifteen(numbers, target, partial) {
    var s, n, remaining;

    partial = partial || [];

    // sum partial, this is a commonly used method in arrays for sorting, searching, etc.
    s = partial.reduce(function (a, b) {
        return a + b;
    }, 0);

    // check if partial sum equals target
    if (s === target) {
        console.log("%s=%s", partial.join("+"), target)
    }

    if (s >= target) {
        return; // if target number is reached then return
    }

for (var i = 0; i < numbers.length; i++) {
    n = numbers[i];  // return target array sum
    remaining = numbers.slice(i + 1); // executes to finalize iteration through array is complete
    sumFifteen(remaining, target, partial.concat([n]));
}
}

sumFifteen([4, 5, 6, 89, 23, 5, 2, 3, 5], 15); // input array and target sum to function scope
// function arrayToList([...array], i = 0) {
 
// return (i < array.length) ? {value: array[i < 15], rest: arrayToList(array,  i + 1)} : null;
// }


