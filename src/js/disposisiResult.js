document.getElementById('disposisiForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        Dari: document.getElementById('dari').value,
        Tanggal_Terima: document.getElementById('tanggal_terima').value,
        No: document.getElementById('no').value,
        Nomor_Surat: document.getElementById('nomor_surat').value,
        Tanggal_Surat: document.getElementById('tanggal_surat').value,
        perihal: document.getElementById('perihal').value,
        Keterangan: document.getElementById('keterangan').value,
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/download-disposisi/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Gagal mengunduh file.');
        }

        // Membuat tautan unduhan untuk file
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'disposisi_output.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        alert(error.message);
    }
});