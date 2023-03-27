// Abstract Class
const BangunDatar = require("./BangunDatar/BangunDatar.js");

// Mixin
const Segitiga = require("./Segitiga/Segitiga.js");
const Trapesium = require("./Trapesium/Trapesium.js");

// Daftar Bangun Datar
const BelahKetupat = require("./BelahKetupat/BelahKetupat.js");
const JajarGenjang = require("./JajarGenjang/JajarGenjang.js");
const LayangLayang = require("./LayangLayang/LayangLayang.js");
const Lingkaran = require("./Lingkaran/Linkaran.js");
const Persegi = require("./Persegi/Persegi.js");
const PersegiPanjang = require("./PersegiPanjang/PersegiPanjang.js");
const SegitigaSamaKaki = require("./Segitiga/SegitigaSamaKaki.js");
const SegitigaSamaSisi = require("./Segitiga/SegitigaSamaSisi.js");
const SegitigaSembarang = require("./Segitiga/SegitigaSembarang.js");
const SegitigaSikuSiku = require("./Segitiga/SegitigaSikuSiku.js");
const TrapesiumSamaKaki = require("./Trapesium/TrapesiumSamaKaki.js");
const TrapesiumSembarang = require("./Trapesium/TrapesiumSembarang.js");
const TrapesiumSiku = require("./Trapesium/TrapesiumSiku.js");

// -----------------------------------------TEST CASE

/*--------------Membuat Object*/
try {
  const bangunDatar = new BangunDatar();
  console.log(bangunDatar);
} catch (error) {
  console.log(error.message);
}

/*--------------Membuat Object*/
// Suatu belah ketupat memiliki panjang diagonal 10 cm dan 24 cm. Coba kamu tentukan keliling belah ketupat tersebut!
const belahKetupat = new BelahKetupat({
  diagonalA: 10,
  diagonalB: 24,
});

console.log(belahKetupat);
console.log("Keliling Belah Ketupat: ", belahKetupat.keliling());
console.log("Luas Belah Ketupat: ", belahKetupat.luas(), "\n");

/*--------------Membuat Object*/ //(BISA IMPROVE)
const jajarGenjang = new JajarGenjang({
  sisiA: 24,
  sisiB: 13,
  tinggi: 10,
});
console.log(jajarGenjang);
console.log("Keliling JajarGenjang: ", jajarGenjang.keliling());
console.log("Luas JajarGenjang: ", jajarGenjang.luas(), "\n");

/*--------------Membuat Object*/
// 1. Sebuah layang-layang memiliki panjang diagonal masing-masing 10 cm dan 15 cm, maka luas layang-layang tersebut adalah :
const layangLayang = new LayangLayang({
  diagonalA: 24,
  sisiA: 13,
  diagonalB: 40,
  sisiB: 37,
});
console.log(layangLayang);
console.log("Keliling Layang-Layang: ", layangLayang.keliling());
console.log("Luas Layang-Layang: ", layangLayang.luas(), "\n");

/*--------------Membuat Object*/
const lingkaran = new Lingkaran({
  jariJari: 7,
});
console.log(lingkaran);
console.log("Keliling Lingkaran: ", lingkaran.keliling());
console.log("Luas Lingkaran: ", lingkaran.luas(), "\n");

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
const segitigaKaki = new SegitigaSamaKaki({
  tinggi: 10,
  alas: 6,
  sisiYgSama: 12,
});

console.log(segitigaKaki);
console.log("Keliling Segitiga Sama Kaki: ", segitigaKaki.keliling());
console.log("Luas Segitigsa Sama Kaki", segitigaKaki.luas(), "\n");

/*--------------Membuat Object*/

const segitigaSisi = new SegitigaSamaSisi({
  tinggi: 10,
  alas: 9,
});
console.log(segitigaSisi);
console.log("Keliling Segitiga Sama Sisi: ", segitigaSisi.keliling());
console.log("Luas Segitiga Sama Sisi: ", segitigaSisi.luas(), "\n");

/*--------------Membuat Object*/
const segitigaSembarang = new SegitigaSembarang({
  sisiA: 10,
  sisiB: 14,
  sisiC: 12,
});
console.log(segitigaSembarang);
console.log("Keliling Segitiga Sembarang:  ", segitigaSembarang.keliling());
console.log("Luas Segitiga Sembarang:  ", segitigaSembarang.luas(), "\n");

/*--------------Membuat Object*/
const segitigaSiku = new SegitigaSikuSiku({
  alas: 3,
  tinggi: 4,
});

console.log(segitigaSiku);
console.log("Keliling Segitiga Siku-Siku: ", segitigaSiku.keliling());
console.log("Luas Segitiga Siku-Siku: ", segitigaSiku.luas(), "\n");

/*--------------Membuat Object*/
// Dari panjang sisi sejajar dan tinggi tersebut, hitunglah luas trapesiumnya!
// Diketahui : a = 34 cm, b = 42 cm, t = 22 cm
const trapesiumSamaKaki = new TrapesiumSamaKaki({
  alasA: 60,
  alasB: 52,
  tinggi: 40,
});
console.log(trapesiumSamaKaki);
console.log("Keliling Trapesium Sama Kaki: ", trapesiumSamaKaki.keliling());
console.log("Luas Trapesium Sama Kaki: ", trapesiumSamaKaki.luas(), "\n");

/*--------------Membuat Object*/
const trapesiumSembarang = new TrapesiumSembarang({
  alasA: 6,
  alasB: 4,
  tinggi: 3,
  sisiMiringA: 3,
  sisiMiringB: 5,
});
console.log(trapesiumSembarang);
console.log("Keliling Trapesium Sembarang: ", trapesiumSembarang.keliling());
console.log("Luas Trapesium Sembarang: ", trapesiumSembarang.luas(), "\n");

/*--------------Membuat Object*/
const trapesiumSiku = new TrapesiumSiku({
  panjangAlasAKecil: 3,
  alasA: 7,
  alasB: 4,
  tinggi: 4,
  // sisiMiring: 5,
});
console.log(trapesiumSiku);
console.log("Keliling Trapesium Siku: ", trapesiumSiku.keliling());
console.log("Luas Trapesium Siku: ", trapesiumSiku.luas(), "\n");

/*--------------Compare Object Data*/
let dataPersegi = [
  new Persegi({
    sisi: 6,
  }),
  new Persegi({
    sisi: 5,
  }),
];

let dataBangunDatar = [
  new Persegi({
    sisi: 6,
  }),
  new PersegiPanjang({
    panjang: 10,
    lebar: 5,
  }),
  new SegitigaSamaSisi({
    tinggi: 10,
    alas: 9,
  }),
  new Lingkaran({
    jariJari: 14,
  }),
];

let kelilingPersegiTerbesar = [...dataPersegi].sort(
  Persegi.compareKelilingTerbesar
);
let kelilingPersegiTerkecil = [...dataPersegi].sort(
  Persegi.compareKelilingTerkecil
);

let bangunDatarLuasTerbesar = [...dataBangunDatar].sort(
  BangunDatar.compareLuasTerbesar
);
let bangunDatarLuasTerkecil = [...dataBangunDatar].sort(
  BangunDatar.compareLuasTerkecil
);

console.log(
  "Persegi dengan Keliling Terkecil:\n",
  kelilingPersegiTerkecil,
  "\n"
);
console.log(
  "Persegi dengan Keliling Terbesar:\n",
  kelilingPersegiTerbesar,
  "\n"
);
console.log(
  "Bangun Datar dengan Luas Terkecil:\n",
  bangunDatarLuasTerkecil,
  "\n"
);
console.log("Bangun Datar Luas Terbesar:\n", bangunDatarLuasTerbesar, "\n");

console.log("Nilai yang dibandingkan: ");
console.log(
  "Persegi->",
  new Persegi({
    sisi: 6,
  }).luas()
);

console.log(
  "Persegi Panjang->",
  new PersegiPanjang({
    panjang: 10,
    lebar: 5,
  }).luas()
);
console.log(
  "Segitiga Sama Sisi->",
  new SegitigaSamaSisi({
    tinggi: 10,
    alas: 9,
  }).luas()
);
console.log(
  "Lingkaran->",
  new Lingkaran({
    jariJari: 14,
  }).luas()
);
