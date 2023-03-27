const BangunDatar = require("../BangunDatar/BangunDatar.js");
const Trapesium = require("./Trapesium.js");

/**   Trapesium Sama Kaki 

        _ _AlasB_ _ 
       /|          |\
      / |          | \
     /  |  Tinggi  |  \ sisiMiring
    /   |          |   \
   /__ _|__ __ __ _|_ __\
            AlasA   panjangAlasAKecil
*/

class TrapesiumSamaKaki extends Trapesium(BangunDatar) {
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

    this.alasA = alasA || 2 * panjangAlasAKecil + alasB;
    this.alasB = alasB;
    this.tinggi = tinggi;
    this.sisiMiring = sisiMiring || this.getSisiMiring(panjangAlasAKecil);
  }

  // Override
  keliling() {
    return this.alasA + this.alasB + 2 * this.sisiMiring;
  }
}

module.exports = TrapesiumSamaKaki;
