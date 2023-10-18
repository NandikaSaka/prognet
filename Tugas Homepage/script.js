document.addEventListener("DOMContentLoaded", function () {
    const biodataForm = document.getElementById("biodataForm");

    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function () {
        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const alamat = document.getElementById("alamat").value;
        const pekerjaan = document.getElementById("pekerjaan").value;
        const portofolio = document.getElementById("portofolio").value;

        // Simpan data ke sessionStorage
        sessionStorage.setItem("nama", nama);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("alamat", alamat);
        sessionStorage.setItem("pekerjaan", pekerjaan);
        sessionStorage.setItem("portofolio", portofolio);

        // Arahkan ke halaman hasil submit
        window.location.href = "index.html";
    });
});
