const BangunDatar = require("../BangunDatar/BangunDatar.js");
const Segitiga = require("./Segitiga.js");

/**     Segitiga Sama Sisi  
               /\
              / |\
             /  | \
            /   |  \
           /    |   \  sisi
          /  tinggi  \
         /      |     \ 
        /__ __ _| __ __\
              alas
 */

class SegitigaSamaSisi extends Segitiga(BangunDatar) {
  #sisi = 0;

  constructor({ tinggi, alas }) {
    super();

    this.tinggi = tinggi;
    this.alas = alas;
    this.#sisi = alas;
  }

  #getSisi() {
    return this.#sisi;
  }

  // Override
  keliling() {
    return 3 * this.#getSisi();
  }
}

module.exports = SegitigaSamaSisi;
