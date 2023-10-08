// nama : Achmad Imam Dairobbi
// SI : Web Developmen
// Kelas : C Morning


// Contoh program dengan if, else, dan nested if
var nilai = 90;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}


// Contoh program dengan switch case
var hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("kerja, Kerja, Kerja. Orang Miskin Dilarang Sakit");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Rebahan Dulu Gak Seee!!.");
    break;
  default:
    console.log("Ngopi Dulu Biar Gak Puyeng");
}


// Contoh program dengan for statement
for (var i = 1; i <= 5; i++) {
  console.log("data ke-" + i);
}


// Contoh program dengan while loop:
var mantan = 1;

while (mantan <= 5) {
  console.log("mantan ku yang ke-" + mantan);
  mantan++;
}


// Contoh program dengan do-while loop:
var angka = 1;

do {
  console.log(angka);
  angka++;
} while (angka <= 5);



// Contoh program dengan function:
function tambah(a, b) {
  return a + b;
}

var hasil = tambah(3, 4);
console.log("Hasil penjumlahannya adalah : " + hasil);

