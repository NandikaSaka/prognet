document.addEventListener('DOMContentLoaded', function() {
    // Mengambil data dari MySQL dan menampilkannya dalam tabel
    function getData() {
        let table = document.getElementById('mahasiswaTable').getElementsByTagName('tbody')[0];
        table.innerHTML = '';

        fetch('getData.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(row => {
                let newRow = table.insertRow(table.rows.length);
                newRow.insertCell(0).innerHTML = row.nama;
                newRow.insertCell(1).innerHTML = row.nim;
                newRow.insertCell(2).innerHTML = row.prodi;
                newRow.insertCell(3).innerHTML = row.jenis_kelamin;
                newRow.insertCell(4).innerHTML = row.hobi;
                newRow.insertCell(5).innerHTML = '<button onclick="editData(this)">Edit</button> <button onclick="deleteData(this)">Delete</button>';
            });
        });
    }

    getData();

    // Fungsi untuk mengirim data form ke MySQL
    document.getElementById('mahasiswaForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let formData = new FormData(this);

        fetch('insert.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'success') {
                this.reset();
                getData();
            }
        });
    });
});

// Fungsi untuk menghapus data
function deleteData(button) {
    let row = button.parentNode.parentNode;
    let nim = row.cells[1].innerHTML;

    fetch('delete.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nim: nim })
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'success') {
            row.remove();
        }
    });
}

// Fungsi untuk mengisi form dengan data yang akan di-edit
function editData(button) {
    let row = button.parentNode.parentNode;
    let cells = row.cells;

    document.getElementById('nama').value = cells[0].innerHTML;
    document.getElementById('nim').value = cells[1].innerHTML;
    document.getElementById('prodi').value = cells[2].innerHTML;

    let jenisKelamin = cells[3].innerHTML;
    if (jenisKelamin === 'Laki-laki') {
        document.getElementById('laki').checked = true;
    } else {
        document.getElementById('perempuan').checked = true;
    }

    let hobi = cells[4].innerHTML.split(', ');
    let checkboxes = document.querySelectorAll('input[name="hobi[]"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = hobi.includes(checkbox.value);
    });
}
