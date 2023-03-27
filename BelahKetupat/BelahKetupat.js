const BangunDatar = require("../BangunDatar/BangunDatar.js");

/**       Belah Ketupat

               /|\
              /diagonalB 
             /  |  \
            /   |   \ 
           /    |    \
          /     |     \ 
         /___diagonalA_\
         \      |      /
          \     |     /
           \    |    / 
            \   |   / sisi
             \  |  /
              \ | /
               \|/
*/

class BelahKetupat extends BangunDatar {
  #sisi = 0;

  constructor({ diagonalA, diagonalB, sisi = null }) {
    super();

    this.diagonalA = diagonalA;
    this.diagonalB = diagonalB;
    this.#sisi = sisi || this.#hitungSisi(diagonalA, diagonalB);
  }

  #getSisi() {
    return this.#sisi;
  }

  #hitungSisi(diagonalA, diagonalB) {
    return Math.sqrt(
      (diagonalA / 2) * (diagonalA / 2) + (diagonalB / 2) * (diagonalB / 2)
    );
  }

  // Override
  keliling() {
    return 4 * this.#getSisi();
  }

  // Override
  luas() {
    return (this.diagonalA * this.diagonalB) / 2;
  }
}

module.exports = BelahKetupat;
