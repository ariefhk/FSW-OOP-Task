const BangunDatar = require("../BangunDatar/BangunDatar.js");

/**     Lingkaran 
            
          - -- -
        -    |   -
       -     |jariJari 
       -         - 
        -       -
          - - -
*/

class Lingkaran extends BangunDatar {
  constructor({ jariJari }) {
    super();

    this.jariJari = jariJari;
  }

  //Override
  keliling() {
    return 2 * Math.PI * this.jariJari;
  }

  //Override
  luas() {
    return Math.PI * this.jariJari ** 2;
  }
}

module.exports = Lingkaran;
