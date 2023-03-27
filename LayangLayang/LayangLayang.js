const BangunDatar = require("../BangunDatar/BangunDatar.js");

/**       Layang Layang
               /|\
              /diagonalB 
             /  |  \
            /   |   \ sisiB
           /    |    \
          /     |     \ 
         /___diagonalA_\
         \      |      /
          \     |     /
            \   |   / sisiA
              \ | /
               \/
 
 
*/

class LayangLayang extends BangunDatar {
  constructor({ diagonalA, diagonalB, sisiA, sisiB }) {
    super();

    if (diagonalA !== null && diagonalA > diagonalB) {
      return new Error("Diagonal A harus lebih kecil dari diagonal B");
    }

    if (sisiA !== null && sisiA > sisiB) {
      return new Error("Sisi A harus lebih kecil dari Sisi B");
    }

    this.diagonalA = diagonalA;
    this.diagonalB = diagonalB;
    this.sisiA = sisiA || 0;

    this.sisiB = sisiB || 0;
  }

  // Override
  keliling() {
    return 2 * (this.sisiA + this.sisiB);
  }

  // Override
  luas() {
    return (this.diagonalA * this.diagonalB) / 2;
  }
}

module.exports = LayangLayang;
