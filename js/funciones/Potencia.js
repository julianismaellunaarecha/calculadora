export default function potencia(b, p) {
    if (p === 0) {
        return 1;
    }
    if (p % 2 === 0) {
        let m = potencia(b, p / 2);
        return m * m;
    }
    let m = potencia(b, Math.floor(p / 2));
    return m * m * b;
}