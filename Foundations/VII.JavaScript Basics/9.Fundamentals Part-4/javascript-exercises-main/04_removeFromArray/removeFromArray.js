const removeFromArray = (arr, ...args) => {
  args.forEach((arg) => {
    let argIndex = arr.indexOf(arg);
    if (argIndex < 0) {
      return;
    }
    arr.splice(argIndex, 1);
  });
  return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
