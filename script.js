document.getElementById("reportForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const status = document.getElementById("status").value;

    // Masukkan data ke tabel
    const table = document.getElementById("reportTable").querySelector("tbody");
    const rowCount = table.rows.length;
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${rowCount + 1}</td>
        <td>${name}</td>
        <td>${address}</td>
        <td>${status}</td>
    `;

    // Reset form
    document.getElementById("reportForm").reset();
});
