const BangunDatar = require("../BangunDatar/BangunDatar.js");
const Trapesium = require("./Trapesium.js");

/**    Trapesium Siku

        _ _AlasB_ _ 
        |          |\
        |          | \
  Tinggi|          |  \ sisiMiring
        |          |   \
        |__ __ __ _|_ __\
            AlasA   panjangAlasAKecil
*/

class TrapesiumSiku extends Trapesium(BangunDatar) {
  constructor({
    alasA = null,
    alasB,
    sisiMiring = null,
    tinggi,
    panjangAlasAKecil,
  }) {
    super();

    if (alasA !== null && alasA < alasB) {
      return new Error("alasA harus lebih besar dari alasB");
    }
    if (!alasA && !panjangAlasAKecil) {
      return new Error("Panjang Alas A Kecil harus diiputkan!");
    }
    if (!sisiMiring && !panjangAlasAKecil) {
      return new Error("Panjang Alas A Kecil Harus ditentukan!");
    }

    this.alasA = alasA || panjangAlasAKecil + alasB;
    this.alasB = alasB;
    this.tinggi = tinggi;
    this.sisiMiring = sisiMiring || this.getSisiMiring(panjangAlasAKecil);
  }

  // Override
  keliling() {
    return this.alasA + this.alasB + this.tinggi + this.sisiMiring;
  }
}

module.exports = TrapesiumSiku;
