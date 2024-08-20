document.addEventListener('DOMContentLoaded', function () {
    fetchAllDocuments();
});

function fetchAllDocuments() {
    // Replace with your server's URL
    const url = 'http://127.0.0.1:8000/showAll';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('table tbody');

            // Clear existing table rows
            tableBody.innerHTML = '';

            data.documents.forEach((doc, index) => {
                const row = document.createElement('tr');

                // Create table cells with the data
            row.innerHTML = `
            <td>${doc.No}</td>
            <td>${doc.Dari || ''}</td>
            <td>${doc.Tanggal_Surat || ''}</td>
            <td>${doc.Tanggal_Terima || ''}</td>
            <td>${doc.Nomor_Surat || ''}</td>
            <td>${doc.perihal || ''}</td>
            <td>${doc.Isi_Disposisi || ''}</td>
            <td>${doc.Keterangan || ''}</td>
        `;

                // Append the row to the table body
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}