<?php
$servername = "prognet.localnet";
$username = "2205551006";
$password = "2205551006";
$dbname = "db_2205551006";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$nama = $_POST['nama'];
$nim = $_POST['nim'];
$prodi = $_POST['prodi'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$hobi = implode(', ', $_POST['hobi']);

$sql = "INSERT INTO tb_mahasiswa (nama, nim, prodi, jenis_kelamin, hobi) VALUES ('$nama', '$nim', '$prodi', '$jenis_kelamin', '$hobi')";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
