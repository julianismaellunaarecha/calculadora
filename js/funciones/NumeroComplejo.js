import radianAGrado from './Radian';
/**
 * r : radio
 * i : imaginario
**/
export default class NumeroComplejo {
  constructor({ r = 0, i = 0 } = {}) {
    this.r = r;
    this.i = i;
  }

  sumar(n) {
    const a = this.aNumeroComplejo(n);
    return new NumeroComplejo({
      r: this.r + n.r,
      i: this.i + a.i,
    });
  }

  restar(n) {
    const b = this.aNumeroComplejo(n);
    return new NumeroComplejo({
      r: this.r - b.r,
      i: this.i - b.i,
    });
  }

  multiplicar(n) {
    const c = this.aNumeroComplejo(n);
    return new NumeroComplejo({
      r: this.r * c.r - this.i * c.i,
      i: this.r * c.i + this.i * c.r,
    });
  }

  dividir(n) {
    const d = this.aNumeroComplejo(n);
    const e = this.conjugar(d);
    const f = this.multiplicar(e);
    const g = (d.r ** 2) + (d.i ** 2);
    return new NumeroComplejo({
      r: f.r / g,
      i: f.i / g,
    });
  }

  conjugar(n) {
    const NumeroComplejo = this.aNumeroComplejo(n);
    return new NumeroComplejo({
      r: NumeroComplejo.r,
      i: -1 * NumeroComplejo.i,
    });
  }

  radio() {
    return Math.sqrt((this.r ** 2) + (this.i ** 2));
  }

  fase(esRadian = true) {
    let fase = Math.atan(Math.abs(this.i) / Math.abs(this.r));
    if (this.r < 0 && this.i > 0) {
      fase = Math.PI - fase;
    } else if (this.r < 0 && this.i < 0) {
      fase = -(Math.PI - fase);
    } else if (this.r > 0 && this.i < 0) {
      fase = -fase;
    } else if (this.r === 0 && this.i > 0) {
      fase = Math.PI / 2;
    } else if (this.r === 0 && this.i < 0) {
      fase = -Math.PI / 2;
    } else if (this.r < 0 && this.i === 0) {
      fase = Math.PI;
    } else if (this.r > 0 && this.i === 0) {
      fase = 0;
    } else if (this.r === 0 && this.i === 0) {
      fase = 0;
    }
    if (!esRadian) {
      fase = radianAGrado(fase);
    }
    return fase;
  }

  formaPolar(esRadian = true) {
    return {
      radio: this.radio(),
      fase: this.fase(esRadian),
    };
  }

  aNumeroComplejo(n) {
    if (n instanceof NumeroComplejo) {
      return n;
    }
    return new NumeroComplejo({ r: n });
  }
}