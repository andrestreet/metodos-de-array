const años = [23, 33, 38, 45, 63, 72];


const sumWithInitial = años.reduce(
  (accumulator, currentValue) => accumulator + currentValue
  );

console.log(sumWithInitial);