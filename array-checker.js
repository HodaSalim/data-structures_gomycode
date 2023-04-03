function uniqueCalc(arr1, arr2) {
  let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
  let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);
  let sum = 0;
  const unique = unique1.concat(unique2);

  for (let i = 0; i < unique.length; i++) {
    sum += unique[i];
  }
  console.log(` the unique numbers are : ${unique}, and their sum is: ${sum}`);
}

uniqueCalc([3, 1, 7, 9], [2, 4, 1, 9, 3]);
