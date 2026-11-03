//LATIHAN 1: Variabel dan Tipe Data
let nama = "Arnold Alexander Santana";
let umur = 20;
let statusMenikah = false;

console.log("--- LATIHAN 1 ---");
console.log("Nama: " + nama);
console.log("Umur: " + umur);
console.log("Status Menikah: " + statusMenikah);

//LATIHAN 2: Operator dan Fungsi
function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}

let luas1 = hitungLuas(5, 8);
console.log("--- LATIHAN 2 ---");
console.log("Luas persegi panjang dengan panjang 5 dan lebar 8 adalah: " + luas1);

let luas2 = hitungLuas(10, 3);
console.log("Luas persegi panjang dengan panjang 10 dan lebar 3 adalah: " + luas2);

//Latihan 3: Manipulasi DOM Dasar
let btnBackground = document.createElement("button");
btnBackground.textContent = "Ubah Latar Belakang";
btnBackground.onclick = function() {
    document.body.style.backgroundColor = "#020202";
};

let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Ubah Warna Teks";
btnTextColor.onclick = function() {
    document.body.style.color = "#1083f7";
};

let btnIncreaseFont = document.createElement("button");
btnIncreaseFont.textContent = "Perbesar Font";
btnIncreaseFont.onclick = function() {
    let currentSize = parseInt(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 1) + "px";
};

let outputDiv3 = document.getElementById("output3");
outputDiv3.appendChild(btnBackground);
outputDiv3.appendChild(btnTextColor);
outputDiv3.appendChild(btnIncreaseFont);
