const BangunDatar = require("../BangunDatar/BangunDatar.js");

/**         Jajar Genjang
           __ __ __ __ _ __ _
          /|                /    
         / |               /
        /  | Tinggi       / sisiB
       /   |             /
      /__ _|_ __ __ __ _/
            sisiA
*/

class JajarGenjang extends BangunDatar {
  constructor({ sisiA, sisiB, tinggi }) {
    super();

    this.sisiA = sisiA;
    this.sisiB = sisiB;
    this.tinggi = tinggi;
  }

  //Override
  keliling() {
    return 2 * (this.sisiA + this.sisiB);
  }

  // Override
  luas() {
    return this.sisiA * this.tinggi;
  }
}

module.exports = JajarGenjang;
