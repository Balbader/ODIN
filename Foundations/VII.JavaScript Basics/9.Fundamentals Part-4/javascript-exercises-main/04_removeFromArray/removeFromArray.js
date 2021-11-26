const removeFromArray = (arr, ...args) => {
  args.forEach((arg) => {
    let argIndex = arr.indexOf(arg);
    for (let i = 0; i < arr.lenght; i++) {
      arr.splice(argIndex, 1);
    }
  });
};
// Do not edit below this line
module.exports = removeFromArray;
