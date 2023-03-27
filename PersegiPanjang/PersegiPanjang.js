const BangunDatar = require("../BangunDatar/BangunDatar.js");

/**    Persegi Panjang
      __ __ __ __ __ __
      |                |
      |                |
      |                | Lebar
      |                |
      |__ __ __ __ __ _|
            Panjang
*/

class PersegiPanjang extends BangunDatar {
  constructor({ panjang, lebar }) {
    super();

    this.panjang = panjang;
    this.lebar = lebar;
  }

  //Override
  keliling() {
    return 2 * (this.panjang + this.lebar);
  }

  // Override
  luas() {
    return this.panjang * this.lebar;
  }
}

module.exports = PersegiPanjang;
