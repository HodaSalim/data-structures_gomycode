function uniqueCalc(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr1 = arr1.splice(i, 1);
      }
    }
    var newArr = [...arr1, ...arr2];
    var total = 0;
    for (var i = 0; i < newArr.length; i++) {
      total += newArr[i];
    }
    return total;
  }
}
