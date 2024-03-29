/**
 * Gets a random integer between min (incl.) and max
 * @param min min value of the generated integer (incl.)
 * @param max max value of the generated integer (excl.)
 * @returns
 */
export function getRandomInt(min: number, max: number) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
    Math.ceil(min)
  );
}
