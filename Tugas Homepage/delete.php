<?php
$servername = "localnet.prognet";
$username = "2205551006";
$password = "2205551006";
$dbname = "db_2205551006";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);
$nim = $data['nim'];

$sql = "DELETE FROM tb_mahasiswa WHERE nim = '$nim'";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
