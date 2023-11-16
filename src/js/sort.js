const fn = (arrey, cash) => {
  const queue = {};
  for (let i = 1; i <= cash; i++) {
    queue[i] = 0;
  }
  console.log(queue);
};

console.log(fn([12, 3, 5, 7, 11, 5], 2));
