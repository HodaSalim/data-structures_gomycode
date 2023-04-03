function uniqueCalc(arr1, arr2) {
  uniqueArr = [...new Set(arr1.filter((item) => arr2.includes(item)))];

  console.log(uniqueArr);
}

uniqueCalc([3, 1, 7, 9], [2, 4, 1, 9, 3]);
