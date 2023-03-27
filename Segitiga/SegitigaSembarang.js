const BangunDatar = require("../BangunDatar/BangunDatar.js");
const Segitiga = require("./Segitiga.js");

/**          Segitiga Sama Sembarang
  
                    / |\
                  /   | \
                /     |  \
        sisiC /       |   \  sisiB
            /         |    \
          /           |     \ 
        /__ __ __ __ _|__ __ \
                  sisiA
 */

class SegitigaSembarang extends Segitiga(BangunDatar) {
  #semiPerimeter = 0;

  constructor({ sisiA, sisiB, sisiC }) {
    super();

    this.sisiA = sisiA;
    this.sisiB = sisiB;
    this.sisiC = sisiC;
    // S = a + b + c / 2 = (10 + 14 + 12) / 2 = 18 cm
    this.#semiPerimeter = (sisiA + sisiB + sisiC) / 2;
  }

  #getSemiPerimeter() {
    return this.#semiPerimeter;
  }

  // Override
  luas() {
    // Luas = √s(s−a)(s−b)(s−c)
    return Math.sqrt(
      this.#getSemiPerimeter() *
        (this.#getSemiPerimeter() - this.sisiA) *
        (this.#getSemiPerimeter() - this.sisiB) *
        (this.#getSemiPerimeter() - this.sisiC)
    );
  }
}

module.exports = SegitigaSembarang;
