import NumeroComplejo from './NumeroComplejo';

function invertirBits(n, cuentaBit) {
  let bitsInvertidos = 0;
  for (let indiceBit = 0; indiceBit < cuentaBit; indiceBit += 1) {
    bitsInvertidos *= 2;
    if (Math.floor(n / (1 << indiceBit)) % 2 === 1) {
      bitsInvertidos += 1;
    }
  }
  return bitsInvertidos;
}

export function alcanceEnBits(n) {
  let contador = 0;
  while ((1 << contador) <= n) {
    contador += 1;
  }
  return contador;
}

export default function fourier(a, inverso = false) {
  const cb = alcanceEnBits(a.length - 1);
  const N = 1 << cb;
  while (a.length < N) {
    a.push(new NumeroComplejo());
  }
  const as = [];
  for (let id = 0; id < N; id += 1) {
    as[id] = a[invertirBits(id, cb)];
  }
  for (let ab = 2; ab <= N; ab *= 2) {
    const si = inverso ? -1 : 1;
    const pf = new NumeroComplejo({
      r: Math.cos((2 * Math.PI) / ab),
      i: si * Math.sin((2 * Math.PI) / ab),
    });
    for (let ib = 0; ib < N; ib += ab) {
      let fase = new NumeroComplejo({ r: 1, i: 0 });
      for (let ise = ib; ise < (ib + ab / 2); ise += 1) {
        const c = as[ise + ab / 2].multiplicar(fase);
        const x = as[ise].sumar(c);
        const y = as[ise].restar(c);
        as[ise] = x;
        as[ise + ab / 2] = y;
        fase = fase.multiplicar(pf);
      }
    }
  }
  if (inverso) {
    for (let ise = 0; ise < N; ise += 1) {
      as[ise] /= N;
    }
  }
  return as;
}