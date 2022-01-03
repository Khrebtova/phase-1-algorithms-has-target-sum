function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate each element of an input array 
  for ( let i = 0; i < array.length; i ++){
    // iterate through the rest af an array
    for ( let j = i + 1; j < array.length; j ++){
      //get summ of 2 elements and compare to target
      if ((array[i]+array[j]) === target) return true
    }
  }
  //if didn't find summ of 2 elements what = target return FALSE
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n²)
*/

/* 
  Add your pseudocode here
  iterate through an array twice . add every element of an array to each oter and compare result to arget input.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([13, 2, 9, 10, 30], 11));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([11, 22, 55, 19, 4, 6, 30], 4));
}

module.exports = hasTargetSum;
