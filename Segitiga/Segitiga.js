const Segitiga = (Base) =>
  class extends Base {
    keliling() {
      return this.sisiA + this.sisiB + this.sisiC;
    }

    luas() {
      return 0.5 * this.alas * this.tinggi;
    }
  };

module.exports = Segitiga;
