document.getElementById('addSuratKeluarForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const nomorSurat = document.getElementById('nomorSuratEdit').value;
    const kepada = document.getElementById('kepadaEdit').value;
    const tanggalSurat = document.getElementById('tanggalSuratEdit').value;
    const perihal = document.getElementById('perihalEdit').value;
    const keterangan = document.getElementById('keteranganEdit').value;

    const data = {
        nomorSurat: nomorSurat,
        kepada: kepada,
        tanggalSurat: tanggalSurat,
        perihal: perihal,
        keterangan: keterangan
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/editSuratKeluar', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Dokumen berhasil diperbarui!');
        } else {
            alert(`Gagal memperbarui dokumen: ${result.detail}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat memperbarui dokumen.');
    }
    // Mengosongkan kolom input setelah submit
    document.getElementById('nomorSuratEdit').value = '';
    document.getElementById('kepadaEdit').value = '';
    document.getElementById('tanggalSuratEdit').value = '';
    document.getElementById('perihalEdit').value = '';
    document.getElementById('keteranganEdit').value = '';
});