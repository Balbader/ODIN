const removeFromArray = (arr, ...args) => {
  args.forEach((arg) => {
    for (let i = 0; i < arr.lenght; i++) {
      arr.splice(arr[arg], 0);
    }
  });
};
// Do not edit below this line
module.exports = removeFromArray;
