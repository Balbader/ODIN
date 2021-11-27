const removeFromArray = (arr, ...args) => {
  args.forEach((arg) => {
    let argIndex = arr.indexOf(arg);
    arr.splice(argIndex, 1);
  });
  console.log("arr:");
  console.table(arr);
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
