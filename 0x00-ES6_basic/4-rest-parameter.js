export default function returnHowManyArguments(...args) {
  return args.length;
}
const result = returnHowManyArguments("Hello", "Holberton", 2020);
console.log(result); // 3
