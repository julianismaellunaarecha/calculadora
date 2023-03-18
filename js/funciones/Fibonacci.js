export default function fibonacci(n) {
    let a = 1;
    const s = [1];
    if (n === a) {
        return s;
    }
    let b = 0;
    let i = n - 1;
    while (i) {
        a += b;
        b = a - b;
        s.push(a);
        i -= 1;
    }
    return s;
}