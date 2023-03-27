const Trapesium = (Base) =>
  class extends Base {
    keliling() {
      return this.alasA + this.alasB + this.sisiMiringA + this.sisiMiringB;
    }

    getSisiMiring(panjangAlasAKecil) {
      return this.hitungPythagoras({
        tinggi: this.tinggi,
        alas: panjangAlasAKecil || (this.alasA - this.alasB) / 2,
      });
    }

    luas() {
      return 0.5 * (this.alasA + this.alasB) * this.tinggi;
    }
  };

module.exports = Trapesium;
