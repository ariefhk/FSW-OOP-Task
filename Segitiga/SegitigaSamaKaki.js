const BangunDatar = require("../BangunDatar/BangunDatar.js");
const Segitiga = require("./Segitiga.js");

/**     Segitiga Sama Kaki 
               /|\
              / | \
             /  |  \
            /   |   \  sisiYgSama
           /  tinggi \
          /     |     \ 
         /____ _|__ __ \
              alas
 */

class SegitigaSamaKaki extends Segitiga(BangunDatar) {
  constructor({ tinggi, alas, sisiYgSama }) {
    super();

    this.tinggi = tinggi;
    this.alas = alas;
    this.sisiYgSama = sisiYgSama;
  }

  // Override
  keliling() {
    return 2 * this.sisiYgSama + this.alas;
  }
}

module.exports = SegitigaSamaKaki;
