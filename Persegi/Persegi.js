const BangunDatar = require("../BangunDatar/BangunDatar.js");

/**      Persegi 
      __ __ __ __ _
      |           |
      |           |
      |           | sisi
      |           |
      |__ __ __ __|
          
*/

class Persegi extends BangunDatar {
  constructor({ sisi }) {
    super();

    this.sisi = sisi;
  }

  // Override
  keliling() {
    return 4 * this.sisi;
  }

  // Override
  luas() {
    return this.sisi * this.sisi;
  }
}

module.exports = Persegi;
