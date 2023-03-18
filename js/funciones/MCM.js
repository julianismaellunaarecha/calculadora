import MCD from './MCD.js';
export default function mcm(a, b) {
  return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / MCD(a, b);
}