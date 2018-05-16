export function getRandomId() {
  return Math.floor(Math.random() * Math.floor(99999));
}
//Shallow Clone
export function cloneArray(array) {
  return array.slice(0);
}
export function cloneMap(map) {
  return new Map(map);
}
