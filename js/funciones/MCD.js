export default function mcd(a, b) {
  let c = Math.abs(a);
  let d = Math.abs(b);
  while (c && d && c !== d) {
    [c, d] = c > d ? [c - d, d] : [c, d - c];
  }
  return c || d;
}
