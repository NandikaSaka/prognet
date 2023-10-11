<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Konfigurasi koneksi database
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "form_biodata";

    // Membuat koneksi ke database
    $conn = new mysqli($host, $username, $password, $database);

    // Cek koneksi database
    if ($conn->connect_error) {
        die("Koneksi database gagal: " . $conn->connect_error);
    }

    // Mengambil data dari form
    $nama = $_POST['nama'];
    $nim = $_POST['nim'];
    $tanggalLahir = $_POST['tanggalLahir'];
    $alamat = $_POST['alamat'];

    // Query SQL untuk menyimpan data ke database
    $sql = "INSERT INTO biodata (nama, nim, tanggal_lahir, alamat) VALUES ('$nama', '$nim', '$tanggalLahir', '$alamat')";

    if ($conn->query($sql) === true) {
        echo "Data berhasil disimpan ke database.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Tutup koneksi database
    $conn->close();
}
?>
