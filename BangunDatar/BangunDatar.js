// Abstract Class
class BangunDatar {
  constructor() {
    if (this.constructor === BangunDatar)
      throw new Error("Cannot make instance from Abstract Class :)");
  }

  //abstract method
  keliling() {
    console.log("Membuat Keliling Bangun Datar");
  }

  //abstract method
  luas() {
    console.log("Membuat Luas Bangun Datar");
  }

  //utility method
  hitungPythagoras({ tinggi, alas, sisiMiring }) {
    if (!sisiMiring) {
      return Math.sqrt(tinggi * tinggi + alas * alas);
    } else {
      if (!tinggi) {
        return Math.sqrt(sisiMiring * sisiMiring - alas * alas);
      } else {
        return Math.sqrt(sisiMiring * sisiMiring - tinggi * tinggi);
      }
    }
  }

  //static utility method
  static compareKelilingTerbesar(bangunA, bangunB) {
    return bangunB.keliling() - bangunA.keliling();
  }

  static compareKelilingTerkecil(bangunA, bangunB) {
    return bangunA.keliling() - bangunB.keliling();
  }

  static compareLuasTerbesar(bangunA, bangunB) {
    return bangunB.luas() - bangunA.luas();
  }

  static compareLuasTerkecil(bangunA, bangunB) {
    return bangunA.luas() - bangunB.luas();
  }
}

module.exports = BangunDatar;
