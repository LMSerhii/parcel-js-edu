const fn = (arrey, cash) => {
  const queue = {};
  for (let i = 1; i <= cash; i++) {
    queue[i] = 0;
  }

  arrey.forEach(element => {
    const values = Object.values(queue);
    const minValue = Math.min(...values);
    const currentCash = values.indexOf(minValue);
    queue[currentCash + 1] += element;
  });

  return queue;
};

export default fn;
