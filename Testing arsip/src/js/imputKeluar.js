// TambahSuratKeluar.js
document.getElementById('addSuratKeluarForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Mencegah form dari submit secara default

    // Ambil nilai dari form
    const nomorSurat = document.getElementById('nomorSurat').value;
    const kepada = document.getElementById('kepada').value;
    const tanggalSurat = document.getElementById('tanggalSurat').value;
    const perihal = document.getElementById('perihal').value;
    const keterangan = document.getElementById('keterangan').value;

    // Buat objek data yang akan dikirim ke backend
    const data = {
        nomorSurat: nomorSurat,
        kepada: kepada,
        tanggalSurat: tanggalSurat,
        perihal: perihal,
        keterangan: keterangan
    };

    try {
        // Kirim data ke backend dengan fetch
        const response = await fetch('http://127.0.0.1:8000/saveKeluar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        // Cek respon dari server
        if (response.ok) {
            const result = await response.json();
            alert('Data berhasil disimpan: ' + result["berhasil menambahkan"]);
        } else {
            const error = await response.json();
            alert('Gagal menyimpan data: ' + error.detail);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat menyimpan data');
    }
     // Mengosongkan kolom input setelah submit
     document.getElementById('nomorSurat').value = '';
     document.getElementById('kepada').value = '';
     document.getElementById('tanggalSurat').value = '';
     document.getElementById('perihal').value = '';
     document.getElementById('keterangan').value = '';
});
