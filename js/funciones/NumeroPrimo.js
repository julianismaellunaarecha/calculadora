export default function numeroPrimo(n) {
    for (let d = 3; d <= Math.sqrt(n); d += 2) {
        if (n % d === 0) {
            return false;
        }
    }
    if (n % 1 !== 0 || n <= 1 || n % 2 === 0) {
        return false;
    }
    return n <= 3;
}
