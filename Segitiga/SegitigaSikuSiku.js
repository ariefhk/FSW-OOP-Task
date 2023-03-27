const BangunDatar = require("../BangunDatar/BangunDatar.js");
const Segitiga = require("./Segitiga.js");

/**      Segitiga Siku Siku    

            |\
            | \
            |  \
      Tinggi|   \ sisiMiring
            |    \
            |     \ 
            |__ __ \
              Alas
 */

class SegitigaSikuSiku extends Segitiga(BangunDatar) {
  #sisiMiring = 0;

  constructor({ tinggi, alas }) {
    super();

    this.tinggi = tinggi;
    this.alas = alas;
    this.#sisiMiring = this.hitungPythagoras({ tinggi: tinggi, alas: alas });
  }

  #getSisiMiring() {
    return this.#sisiMiring;
  }

  // Override
  keliling() {
    return this.alas + this.tinggi + this.#getSisiMiring();
  }
}

module.exports = SegitigaSikuSiku;
