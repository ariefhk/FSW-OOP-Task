// Abstract Class
class BangunDatar {
  constructor(props) {
    if (this.constructor === BangunDatar)
      throw new Error("Ga bisa buat dari Absctract Bro");
  }

  //abstract method
  keliling() {
    console.log("Membuat Keliling Bangun Datar");
  }

  //abstract method
  luas() {
    console.log("Membuat Luas Bangun Datar");
  }
}

// 1. Persegi
// Keliling : 4 * Sisi
// Luas : Sisi * Sisi
class Persegi extends BangunDatar {
  constructor(props) {
    super(props);
    let { sisi } = props;

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

// 2. Persegi Panjang
// Keliling : 2*(Panjang + Lebar)
// Luas : Panjang * Lebar
class PersegiPanjang extends BangunDatar {
  constructor(props) {
    super(props);

    let { panjang, lebar } = props;
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

// 3. Lingkaran
// Keliling : 2 * PI * jari"
// Luas : Pi * r^2
class Lingkaran extends BangunDatar {
  constructor(props) {
    super(props);

    let { jariJari } = props;
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

// 4. Trapesium
// Trapesium Mixin
const Trapesium = (Base) =>
  class extends Base {
    luas() {
      return 0.5 * (this.alasA + this.alasB) * this.tinggi;
    }
  };

//Trapesium Siku
class TrapesiumSiku extends Trapesium(BangunDatar) {
  constructor(props) {
    super(props);

    const { panjangAlasAKecil, alasB, tinggi } = props;
    this.alasA = alasB + panjangAlasAKecil;
    this.alasB = alasB;
    this.tinggi = tinggi;
    this._sisiMiring = Math.sqrt(
      tinggi * tinggi + panjangAlasAKecil * panjangAlasAKecil
    );
  }

  keliling() {
    return this.alasA + this.alasB + this.tinggi + this._sisiMiring;
  }
}

class TrapesiumSamaKaki extends Trapesium(BangunDatar) {
  constructor(props) {
    super(props);

    const { panjangAlasAKecil, alasB, tinggi } = props;
    this.alasA = 2 * panjangAlasAKecil + alasB;
    this.alasB = alasB;
    this.tinggi = tinggi;
    this._sisiMiring = Math.sqrt(
      tinggi * tinggi + panjangAlasAKecil * panjangAlasAKecil
    );
  }

  keliling() {
    return (
      this.alasA +
      this.alasB +
      this.tinggi +
      this._sisiMiring +
      this._sisiMiring
    );
  }
}

class TrapesiumSembarang extends Trapesium(BangunDatar) {
  constructor(props) {
    super(props);

    const { panjangAlasAKiri, panjangAlasAKanan, alasB, tinggi } = props;
    this.alasA = panjangAlasAKiri + alasB + panjangAlasAKanan;
    this.alasB = alasB;
    this.tinggi = tinggi;
    this._sisiMiringKiri = Math.sqrt(
      tinggi * tinggi + panjangAlasAKiri * panjangAlasAKiri
    );
    this._sisiMiringKanan = Math.sqrt(
      tinggi * tinggi + panjangAlasAKanan * panjangAlasAKanan
    );
  }

  keliling() {
    return (
      this.alasA +
      this.alasB +
      this.tinggi +
      this._sisiMiringKiri +
      this._sisiMiringKanan
    );
  }
}

// 5. JajarGenjang
//SisiA = Sisi yang Sama yang terletak dibawah & atas
//SisiB = Sisi yang Sama yang terletak dikanan & kiri
// Keliling : 2 * SisiA * SisiB
// Luas : 0.5 & SisiA * Tinggi
class JajarGenjang extends BangunDatar {
  constructor(props) {
    super(props);

    let { sisiA, sisiB, tinggi } = props;
    this.sisiA = sisiA;
    this.sisiB = sisiB;
    this.tinggi = tinggi;
  }

  //Override
  keliling() {
    return 2 * (this.sisiA * this.sisiB);
  }

  luas() {
    return 0.5 * this.sisiA * this.tinggi;
  }
}

// 6. Segitiga Sebagai Mixin
const Segitiga = (Base) =>
  class extends Base {
    luas() {
      return 0.5 * this.alas * this.tinggi;
    }
  };

//Segitiga Sama Sisi
//Alas sama dengan Sisi yang lain karena semuanya equal
// Keliling : 3 * Sisi (Sisinya sama)
// Luas : 0.5 * alas * tinggi
class SegitigaSamaSisi extends Segitiga(BangunDatar) {
  constructor(props) {
    super(props);

    let { tinggi, alas } = props;
    this.tinggi = tinggi;
    this.sisi = alas;
    this.alas = alas;
  }

  keliling() {
    return 3 * this.sisi;
  }
}

//Segitiga Siku Siku
//Sisi miring harus dicari dengan aljabar c2 = a2 + b2
// Keliling : alas + tinggi + sisi miring
// Luas : 0.5 * alas * tinggi
class SegitigaSikuSiku extends Segitiga(BangunDatar) {
  constructor(props) {
    super(props);

    let { tinggi, alas } = props;
    this.tinggi = tinggi;
    this.alas = alas;
    this.sisiMiring = Math.sqrt(alas * alas + tinggi * tinggi);
  }

  keliling() {
    return this.alas + this.tinggi + this.sisiMiring;
  }
}

//Segitiga Sama Kaki
//Terdapat Sisi yang equal
// Keliling : 2 * sisi yang equal + alas
// Luas : 0.5 * alas * tinggi
class SegitigaSamaKaki extends Segitiga(BangunDatar) {
  constructor(props) {
    super(props);

    let { tinggi, alas, sisiYgSama } = props;
    this.tinggi = tinggi;
    this.alas = alas;
    this.sisiYgSama = sisiYgSama;
  }

  keliling() {
    return 2 * this.sisiYgSama + this.alas;
  }
}

class SegitigaSembarang extends Segitiga(BangunDatar) {
  constructor(props) {
    super(props);

    let { sisiA, sisiB, sisiC } = props;
    this.sisiA = sisiA;
    this.sisiB = sisiB;
    this.sisiC = sisiC;
    // S = a + b + c / 2 = (10 + 14 + 12) / 2 = 18 cm
    this._semiPerimeter = (sisiA + sisiB + sisiC) / 2;
  }

  keliling() {
    return this.sisiA + this.sisiB + this.sisiC;
  }

  luas() {
    // Luas = √s(s−a)(s−b)(s−c)
    return Math.sqrt(
      this._semiPerimeter *
        (this._semiPerimeter - this.sisiA) *
        (this._semiPerimeter - this.sisiB) *
        (this._semiPerimeter - this.sisiC)
    );
  }
}

// 7. Belah Ketupat
//Menentukan Sisi dengan Diagonal Dalam
// Keliling : 4 * sisi
// Luas : (diagonal A + diagonal B) / 2
class BelahKetupat extends BangunDatar {
  constructor(props) {
    super(props);

    let { diagonalA, diagonalB } = props;
    this.diagonalA = diagonalA;
    this.diagonalB = diagonalB;
    this.sisiMiring = Math.sqrt(
      (diagonalA / 2) * (diagonalA / 2) + (diagonalB / 2) * (diagonalB / 2)
    );
  }

  // Override
  keliling() {
    return 4 * this.sisiMiring;
  }

  // Override
  luas() {
    return (this.diagonalA * this.diagonalB) / 2;
  }
}

// 8. Layang Layang
// SisiA adalah Sisi yang sama ke-1
// SisiB adalah Sisi yang sama ke-2
// Keliling : 2 * (this.sisiA + this.sisiB)
// Luas : (this.diagonalA * this.diagonalB) / 2
class LayangLayang extends BangunDatar {
  constructor(props) {
    super(props);

    let { diagonalA, diagonalB, sisiA, sisiB } = props;
    this.diagonalA = diagonalA;
    this.diagonalB = diagonalB;
    this.sisiA = sisiA;
    this.sisiB = sisiB;
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

/*--------------Membuat Object*/
const persegi = new Persegi({
  sisi: 5,
});
console.log(persegi);
console.log("Keliling Persegi: ", persegi.keliling());
console.log("Luas Persegi:", persegi.luas(), "\n");

/*--------------Membuat Object*/
const persegiPanjang = new PersegiPanjang({
  panjang: 10,
  lebar: 5,
});
console.log(persegiPanjang);
console.log("Keliling Persegi Panjang: ", persegiPanjang.keliling());
console.log("Luas Persegi Panjang: ", persegiPanjang.luas(), "\n");

/*--------------Membuat Object*/
const lingkaran = new Lingkaran({
  jariJari: 7,
});
console.log(lingkaran);
console.log("Keliling Lingkaran: ", lingkaran.keliling());
console.log("Luas Lingkaran: ", lingkaran.luas(), "\n");

/*--------------Membuat Object*/
const trapesiumSamaKaki = new TrapesiumSamaKaki({
  panjangAlasAKecil: 3,
  alasB: 8,
  tinggi: 4,
});
console.log(trapesiumSamaKaki);
console.log("Keliling Trapesium Sama Kaki: ", trapesiumSamaKaki.keliling());
console.log("Luas Trapesium Sama Kaki: ", trapesiumSamaKaki.luas(), "\n");

/*--------------Membuat Object*/
const trapesiumSiku = new TrapesiumSiku({
  panjangAlasAKecil: 3,
  alasB: 3,
  tinggi: 4,
});
console.log(trapesiumSiku);
console.log("Keliling Trapesium Siku: ", trapesiumSiku.keliling());
console.log("Luas Trapesium Siku: ", trapesiumSiku.luas(), "\n");

/*--------------Membuat Object*/
const trapesiumSembarang = new TrapesiumSembarang({
  panjangAlasAKiri: 3,
  panjangAlasAKanan: 5,
  alasB: 8,
  tinggi: 5,
});
console.log(trapesiumSembarang);
console.log("Keliling Trapesium Sembarang: ", trapesiumSembarang.keliling());
console.log("Luas Trapesium Sembarang: ", trapesiumSembarang.luas(), "\n");

/*--------------Membuat Object*/
const jajarGenjang = new JajarGenjang({
  sisiA: 4,
  sisiB: 3,
  tinggi: 3,
});
console.log(jajarGenjang);
console.log("Keliling JajarGenjang: ", jajarGenjang.keliling());
console.log("Luas JajarGenjang: ", jajarGenjang.luas(), "\n");

/*--------------Membuat Object*/
const segitigaSembarang = new SegitigaSembarang({
  sisiA: 10,
  sisiB: 14,
  sisiC: 12,
});
console.log(segitigaSembarang);
console.log(segitigaSembarang.keliling());
console.log(segitigaSembarang.luas(), "\n");

/*--------------Membuat Object*/
const segitigaSisi = new SegitigaSamaSisi({
  tinggi: 10,
  alas: 9,
});
console.log(segitigaSisi);
console.log("Keliling Segitiga Sama Sisi: ", segitigaSisi.keliling());
console.log("Luas Segitiga Sama Sisi: ", segitigaSisi.luas(), "\n");

/*--------------Membuat Object*/
const segitigaKaki = new SegitigaSamaKaki({
  tinggi: 10,
  alas: 6,
  sisiYgSama: 12,
});

console.log(segitigaKaki);
console.log("Keliling Segitiga Sama Kaki: ", segitigaKaki.keliling());
console.log("Luas Segitigsa Sama Kaki", segitigaKaki.luas(), "\n");

/*--------------Membuat Object*/
const segitigaSiku = new SegitigaSikuSiku({
  alas: 3,
  tinggi: 4,
});

console.log(segitigaSiku);
console.log("Keliling Segitiga Siku-Siku: ", segitigaSiku.keliling());
console.log("Luas Segitiga Siku-Siku: ", segitigaSiku.luas(), "\n");

/*--------------Membuat Object*/
const belahKetupat = new BelahKetupat({
  diagonalA: 10,
  diagonalB: 24,
});

console.log(belahKetupat);
console.log("Keliling Belah Ketupat: ", belahKetupat.keliling());
console.log("Luas Belah Ketupat: ", belahKetupat.luas(), "\n");

/*--------------Membuat Object*/
const layangLayang = new LayangLayang({
  diagonalA: 12,
  diagonalB: 16,
  sisiA: 6,
  sisiB: 12,
});
console.log(layangLayang);
console.log("Keliling Layang-Layang: ", layangLayang.keliling());
console.log("Luas Layang-Layang: ", layangLayang.luas(), "\n");
