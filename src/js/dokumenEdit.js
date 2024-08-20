document.getElementById('addSuratMasukForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil nilai dari form input
    const No = document.getElementById('NoEdit').value;
    const Dari = document.getElementById('DariEdit').value;
    const TanggalSurat = document.getElementById('tanggalSuratEdit').value;
    const Nomorsurat = document.getElementById('NomorSuratEdit').value;
    const Perihal = document.getElementById('PerihalEdit').value;
    const IsiDisposisi = document.getElementById('isiDisposisiEdit').value;
    const Keterangan = document.getElementById('KeteranganEdit').value;
    const suratDiterima = document.getElementById('tanggalTerimaSuratEdit').value;

    // Buat objek data yang akan dikirim ke backend
    const data = {
        No: No,
        Dari: Dari,
        TanggalSurat: TanggalSurat,
        TerimaTanggal: suratDiterima,
        Nomorsurat: Nomorsurat,
        Perihal: Perihal,
        IsiDisposisi: IsiDisposisi,
        Keterangan: Keterangan
    };

    try {
        // Kirim data ke backend menggunakan metode PUT
        const response = await fetch('http://127.0.0.1:8000/edit', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Handle response dari server
        if (response.ok) {
            const result = await response.json();
            alert('Dokumen berhasil diperbarui');
            console.log(result);
        } else {
            const error = await response.json();
            alert(`Gagal memperbarui dokumen: ${error.detail}`);
        }
    } catch (err) {
        console.error('Error:', err);
        alert('Terjadi kesalahan saat memperbarui dokumen');
    }
    // Mengosongkan kolom input setelah submit
    document.getElementById('NomorSuratEdit').value = '';
    document.getElementById('NoEdit').value = '';
    document.getElementById('DariEdit').value = '';
    document.getElementById('tanggalSuratEdit').value = '';
    document.getElementById('PerihalEdit').value = '';
    document.getElementById('isiDisposisiEdit').value = '';
    document.getElementById('KeteranganEdit').value = '';
    document.getElementById('tanggalTerimaSuratEdit').value = '';
});
