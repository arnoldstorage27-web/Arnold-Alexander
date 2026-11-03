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


//Latihan 4: Event Handling & Validasi Form
let judulLatihan4 = document.createElement("h3");
judulLatihan4.textContent = "--- Latihan 4: Event Handling & Validasi Form ---";
document.body.appendChild(judulLatihan4);

// Membuat form element
let form = document.createElement("form");

// Membuat input teks untuk nama
let inputNama = document.createElement("input");
inputNama.type = "text";
inputNama.placeholder = "Masukkan nama Anda...";
form.appendChild(inputNama);

// Membuat tombol submit
let btnSubmit = document.createElement("button");
btnSubmit.type = "submit";
btnSubmit.textContent = "Kirim";
form.appendChild(btnSubmit);

// Pesan error atau status validasi
let pesanError = document.createElement("p");
pesanError.style.color = "red";
form.appendChild(pesanError);

// Event handling saat form dikirim (submit)
form.onsubmit = function(event) {
    event.preventDefault(); // Mencegah halaman melakukan refresh otomatis
    
    // Validasi form: cek apakah input kosong
    if (inputNama.value.trim() === "") {
        pesanError.textContent = "Peringatan: Nama tidak boleh kosong!";
    } else {
        pesanError.style.color = "green";
        pesanError.textContent = "Berhasil! Terima kasih, " + inputNama.value;
    }
};

document.body.appendChild(form);

//Latihan 5 Aplikasi To-Do List
let judulLatihan5 = document.createElement("h3");
judulLatihan5.textContent = "--- Latihan 5: Aplikasi To-Do List ---";
document.body.appendChild(judulLatihan5);

// Input untuk tugas baru
let inputTugas = document.createElement("input");
inputTugas.type = "text";
inputTugas.placeholder = "Tulis kegiatan baru...";
document.body.appendChild(inputTugas);

// Tombol tambah tugas
let btnTambahTugas = document.createElement("button");
btnTambahTugas.textContent = "Tambah Tugas";
document.body.appendChild(btnTambahTugas);

// Elemen list (ul) untuk menampung daftar tugas
let listTugas = document.createElement("ul");
document.body.appendChild(listTugas);

// Event handling untuk tombol tambah
btnTambahTugas.onclick = function() {
    let teksTugas = inputTugas.value.trim();
    if (teksTugas !== "") {
        // Buat elemen <li> untuk item tugas
        let itemLi = document.createElement("li");
        itemLi.textContent = teksTugas + " ";

        // Tombol hapus untuk tiap item tugas
        let btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.onclick = function() {
            listTugas.removeChild(itemLi);
        };

        // Gabungkan tombol hapus ke dalam <li>, lalu <li> ke dalam <ul>
        itemLi.appendChild(btnHapus);
        listTugas.appendChild(itemLi);

        // Kosongkan kembali input
        inputTugas.value = "";
    } else {
        alert("Kolom tugas tidak boleh kosong!");
    }
};
