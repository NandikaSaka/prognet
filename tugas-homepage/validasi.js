document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("biodataForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validasi Nama
        const namaInput = document.getElementById("nama");
        if (namaInput.value.trim() === "") {
            alert("Nama Harus Diisi!");
            namaInput.focus();
            return false;
        }

        const nimInput = document.getElementById("nim");
        if (nimInput.value.trim() === ""){
            alert("NIM Harus Diisi!");
            nimInput.focus();
            return false;
        }

        const tanggalLahirInput = document.getElementById("tanggalLahir");
        if (tanggalLahirInput.value.trim() === ""){
            alert("Tanggal Lahir Harus Diisi!");
            tanggalLahirInput.focus();
            return false;
        }

        const alamatInput = document.getElementById("alamat");
        if (alamatInput.value.trim() === ""){
            alert("Alamat Harus Diisi!");
            alamatInput.focus();
            return false;
        }

        // Jika semua validasi berhasil, Anda dapat mengirimkan data
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "submit.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText);
                form.reset();
            }
        };
        xhr.send(formData);
    });
});
