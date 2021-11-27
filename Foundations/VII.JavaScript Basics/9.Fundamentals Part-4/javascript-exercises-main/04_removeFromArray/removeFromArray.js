const removeFromArray = (arr, ...args) => {
  args.forEach((arg) => {
    let argIndex = arr.indexOf(arg);
    arr.splice(argIndex, 1);
  });
};
// Do not edit below this line
module.exports = removeFromArray;
