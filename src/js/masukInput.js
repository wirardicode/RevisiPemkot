document.getElementById('submitBtn').addEventListener('click', async function () {
    const No = document.getElementById('No').value;
    const Dari = document.getElementById('Dari').value;
    const TanggalSurat = document.getElementById('TanggalSurat').value;
    const Nomorsurat = document.getElementById('Nomorsurat').value;
    const Perihal = document.getElementById('Perihal').value;
    const IsiDisposisi = document.getElementById('IsiDisposisi').value;
    const Keterangan = document.getElementById('Keterangan').value;
    const TerimaTanggal = document.getElementById('TanggalSuratTerima').value;

    const data = {
        No, Dari, TanggalSurat, TerimaTanggal, Nomorsurat, Perihal, IsiDisposisi, Keterangan
    };

    const response = await fetch('http://127.0.0.1:8000/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('result').innerText = result['berhasil menambahkan'] || result['error'];

    // Mengosongkan kolom input setelah submit
    document.getElementById('No').value = '';
    document.getElementById('Dari').value = '';
    document.getElementById('TanggalSurat').value = '';
    document.getElementById('TanggalSuratTerima').value = '';
    document.getElementById('Nomorsurat').value = '';
    document.getElementById('Perihal').value = '';
    document.getElementById('IsiDisposisi').value = '';
    document.getElementById('Keterangan').value = '';
});