const BangunDatar = require("../BangunDatar/BangunDatar.js");
const Trapesium = require("./Trapesium.js");

/**          Trapesium Sembarang
                  __AlasB_
                 /|        |\
  sisiMiringA   / | tinggi |  \  sisiMiringB
               /  |        |    \
              /   |        |      \
             /__ _|__ __ __|_ __ _ _\
  panjangAlasKiri   AlasA    panjangAlasKanan
          
*/

class TrapesiumSembarang extends Trapesium(BangunDatar) {
  constructor({
    alasA = null,
    alasB,
    sisiMiringA = null,
    sisiMiringB = null,
    tinggi,
    panjangAlasAKiri = null,
    panjangAlasAKanan = null,
  }) {
    super();

    if (alasA !== null && alasA < alasB) {
      return new Error("alasA harus lebih besar dari alasB");
    }
    if (!alasA && (!panjangAlasAKiri || !panjangAlasAKanan)) {
      return new Error("Panjang Alas A Kiri dan Kanan Harus diiputkan!");
    }
    if (!tinggi) {
      return new Error("Tinggi Harus Diinputkan!");
    }
    if (!sisiMiringA && !panjangAlasAKiri) {
      return new Error("Panjang Alas Kiri Harus ditentukan!");
    }
    if (!sisiMiringB && !panjangAlasAKanan) {
      return new Error("Panjang Alas Kanan Harus ditentukan!");
    }

    this.alasA = alasA || panjangAlasAKiri + alasB + panjangAlasAKanan;
    this.alasB = alasB;
    this.tinggi = tinggi;

    this.sisiMiringA =
      sisiMiringA ||
      this.hitungPythagoras({
        tinggi: tinggi,
        alas: panjangAlasAKiri,
      });
    this.sisiMiringB =
      sisiMiringB ||
      this.hitungPythagoras({
        tinggi: tinggi,
        alas: panjangAlasAKanan,
      });
  }
}

module.exports = TrapesiumSembarang;
