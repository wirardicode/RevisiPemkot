document.getElementById("searchButton").addEventListener("click", function() {
    const searchValue = document.getElementById("searchInput").value;

    fetch(`http://127.0.0.1:8000/CariArsip/?NomorSurat=${encodeURIComponent(searchValue)}`)
        .then(response => response.json())
        .then(data => {
            if (data.documents && data.documents.length > 0) {
                const resultTableContainer = document.getElementById("resultTableContainer");

                let tableHtml = `
                    <table class="table table-striped table-hover table-primary align-middle">
                        <thead class="table-light">
                            <tr>
                                <th>Nomor</th>
                                <th>Dari</th>
                                <th>Tanggal Surat</th>
                                <th>Tanggal Terima Surat</th>
                                <th>Nomor Surat</th>
                                <th>Perihal</th>
                                <th>Isi Disposisi</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>`;

                data.documents.forEach(doc => {
                    tableHtml += `
                        <tr>
                            <td>${doc.No || ''}</td>
                            <td>${doc.Dari || ''}</td>
                            <td>${doc.Tanggal_Surat || ''}</td>
                            <td>${doc.Tanggal_Terima || ''}</td>
                            <td>${doc.Nomor_Surat || ''}</td>
                            <td>${doc.perihal || ''}</td>
                            <td>${doc.Isi_Disposisi || ''}</td>
                            <td>${doc.Keterangan || ''}</td>
                        </tr>`;
                });

                tableHtml += `
                        </tbody>
                    </table>`;

                resultTableContainer.innerHTML = tableHtml;
            } else {
                document.getElementById("resultTableContainer").innerHTML = "<p>Dokumen tidak ditemukan</p>";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("resultTableContainer").innerHTML = "<p>Terjadi kesalahan saat mencari dokumen</p>";
        });
});
