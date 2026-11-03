// --- Proyek Modifikasi: Kalkulator Sederhana & Interaktif ---
let judulKalkulator = document.createElement("h3");
judulKalkulator.textContent = "--- Proyek: Kalkulator Sederhana (Modifikasi) ---";
document.body.appendChild(judulKalkulator);

// Membuat pembungkus/container kecil agar rapi (opsional)
let kalkulatorContainer = document.createElement("div");
kalkulatorContainer.style.marginBottom = "15px";

// Input Angka Pertama
let inputAngka1 = document.createElement("input");
inputAngka1.type = "number";
inputAngka1.placeholder = "Angka pertama...";
inputAngka1.style.marginRight = "5px";
kalkulatorContainer.appendChild(inputAngka1);

// Input Angka Kedua
let inputAngka2 = document.createElement("input");
inputAngka2.type = "number";
inputAngka2.placeholder = "Angka kedua...";
kalkulatorContainer.appendChild(inputAngka2);

document.body.appendChild(kalkulatorContainer);

// Tombol-tombol Operator (+, -, *, /) dengan sedikit warna
let btnTambah = document.createElement("button");
btnTambah.textContent = "+ Tambah";
document.body.appendChild(btnTambah);

let btnKurang = document.createElement("button");
btnKurang.textContent = "- Kurang";
document.body.appendChild(btnKurang);

let btnKali = document.createElement("button");
btnKali.textContent = "× Kali";
document.body.appendChild(btnKali);

let btnBagi = document.createElement("button");
btnBagi.textContent = "÷ Bagi";
document.body.appendChild(btnBagi);

// Tombol Reset Baru untuk menghapus input & hasil
let btnReset = document.createElement("button");
btnReset.textContent = "Reset";
btnReset.style.marginLeft = "10px";
btnReset.style.backgroundColor = "#ffdddd";
document.body.appendChild(btnReset);

// Elemen untuk menampilkan hasil kalkulator
let hasilKalkulator = document.createElement("p");
hasilKalkulator.style.fontWeight = "bold";
hasilKalkulator.textContent = "Hasil: -";
document.body.appendChild(hasilKalkulator);

// Fungsi Operasi Penjumlahan
btnTambah.onclick = function() {
    let num1 = parseFloat(inputAngka1.value);
    let num2 = parseFloat(inputAngka2.value);
    if (isNaN(num1) || isNaN(num2)) {
        hasilKalkulator.textContent = "Peringatan: Mohon masukkan kedua angka terlebih dahulu!";
    } else {
        hasilKalkulator.textContent = "Hasil: " + (num1 + num2);
    }
};

// Fungsi Operasi Pengurangan
btnKurang.onclick = function() {
    let num1 = parseFloat(inputAngka1.value);
    let num2 = parseFloat(inputAngka2.value);
    if (isNaN(num1) || isNaN(num2)) {
        hasilKalkulator.textContent = "Peringatan: Mohon masukkan kedua angka terlebih dahulu!";
    } else {
        hasilKalkulator.textContent = "Hasil: " + (num1 - num2);
    }
};

// Fungsi Operasi Perkalian
btnKali.onclick = function() {
    let num1 = parseFloat(inputAngka1.value);
    let num2 = parseFloat(inputAngka2.value);
    if (isNaN(num1) || isNaN(num2)) {
        hasilKalkulator.textContent = "Peringatan: Mohon masukkan kedua angka terlebih dahulu!";
    } else {
        hasilKalkulator.textContent = "Hasil: " + (num1 * num2);
    }
};

// Fungsi Operasi Pembagian
btnBagi.onclick = function() {
    let num1 = parseFloat(inputAngka1.value);
    let num2 = parseFloat(inputAngka2.value);
    if (isNaN(num1) || isNaN(num2)) {
        hasilKalkulator.textContent = "Peringatan: Mohon masukkan kedua angka terlebih dahulu!";
    } else if (num2 === 0) {
        hasilKalkulator.textContent = "Hasil: Error! Tidak bisa membagi angka dengan nol.";
    } else {
        hasilKalkulator.textContent = "Hasil: " + (num1 / num2);
    }
};

// Fungsi Tombol Reset
btnReset.onclick = function() {
    inputAngka1.value = "";
    inputAngka2.value = "";
    hasilKalkulator.textContent = "Hasil: -";
};
