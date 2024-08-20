import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firestore DB
cred = credentials.Certificate(r"sadk.json") #sesuai in aja
firebase_admin.initialize_app(cred)

db = firestore.client() #koneksi ke firestore default

def save_to_firestore(data):
    try:
        # Menyimpan data ke Firestore ke koleksi "Detail_arsip"
        db.collection('Detail_arsip').add(data)#isi
        return True
    except Exception as e:
        print(f"An error occurred: {e}")
        return False

    
#utuh
def get_all_documents():
    try:
        # Mendapatkan semua dokumen dari koleksi 'Detail_arsip'
        docs = db.collection('Detail_arsip').stream()
        results = [doc.to_dict() for doc in docs]
        return results
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

#by document id
def get_document_by_id(doc_id):
    try:
        # Mendapatkan dokumen berdasarkan ID
        doc = db.collection('Detail_arsip').document(doc_id).get()
        if doc.exists:
            return doc.to_dict()
        else:
            return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None   
    
#berdasar isi dokumen dari tiap dokumen (kasus ini mencari pake nomor surat)
def get_documents_by_title(nomor_surat):
    try:
        # Membuat query untuk mencari dokumen berdasarkan Nomor_Surat
        docs = db.collection('Detail_arsip').where('Nomor_Surat', '==', nomor_surat).stream()
        results = [doc.to_dict() for doc in docs]
        
        # Jika tidak ada hasil dari pencarian berdasarkan Nomor_Surat, coba cari berdasarkan perihal
        if not results:
            per = db.collection('Detail_arsip').where('perihal', '==', nomor_surat).stream()
            results = [doc.to_dict() for doc in per]

        return results
    except Exception as e:
        print(f"An error occurred: {e}")
        return []
    
#edit isi dokument berdasar nama momor_surat
def put_documents_by_title(Nomorsurat, update_data):
    try:
         # Membuat query untuk mencari dokumen berdasarkan judul
        docs = db.collection('Detail_arsip').where('Nomor_Surat', '==', Nomorsurat).stream()
        updated = False
        for doc in docs:
            doc_ref = db.collection('Detail_arsip').document(doc.id)
            doc_ref.update(update_data)
            updated = True
        return updated
    except Exception as e:
        print(f"An error occurred: {e}")
        return False
    
#-------------------------------------------------------------
#bagian untuk surat keluar
#-------------------------------------------------------------
def save_to_firestore_suratKeluar(data):
    try:
        # Menyimpan data ke Firestore ke koleksi "Detail_arsip_keluar"
        db.collection('Detail_arsip_keluar').add(data)#isi
        return True
    except Exception as e:
        print(f"An error occurred: {e}")
        return False

    
#utuh
def get_all_documents_suratKeluar():
    try:
        # Mendapatkan semua dokumen dari koleksi 'Detail_arsip_keluar'
        docs = db.collection('Detail_arsip_keluar').stream()
        results = [doc.to_dict() for doc in docs]
        return results
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

#by document id
def get_document_by_id_suratKeluar(doc_id):
    try:
        # Mendapatkan dokumen berdasarkan ID
        doc = db.collection('Detail_arsip_keluar').document(doc_id).get()
        if doc.exists:
            return doc.to_dict()
        else:
            return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None   
    
#berdasar isi dokumen dari tiap dokumen (kasus ini mencari pake nomor_surat)
def get_documents_by_title_suratKeluar(nomor_surat):
    try:
        # Membuat query untuk mencari dokumen berdasarkan judul
        docs = db.collection('Detail_arsip_keluar').where('Nomor_surat', '==', nomor_surat).stream()
        results = [doc.to_dict() for doc in docs]

        # Jika tidak ada hasil dari pencarian berdasarkan Nomor_Surat, coba cari berdasarkan perihal
        if not results:
            per = db.collection('Detail_arsip_keluar').where('perihal', '==', nomor_surat).stream()
            results = [doc.to_dict() for doc in per]

        return results
    except Exception as e:
        print(f"An error occurred: {e}")
        return []
    
#edit isi dokument berdasar nama judul
def put_documents_by_title_suratKeluar(Nomorsurat, update_data):
    try:
        # Membuat query untuk mencari dokumen berdasarkan Nomor_surat
        docs = db.collection('Detail_arsip_keluar').where('Nomor_surat', '==', Nomorsurat).stream()
        updated = False
        for doc in docs:
            doc_ref = db.collection('Detail_arsip_keluar').document(doc.id)
            doc_ref.update(update_data)
            updated = True
        return updated
    except Exception as e:
        print(f"An error occurred: {e}")
        return False

#tampilkan semua sesuai isi dokument
def get_all_documents_suratKeluar():
    try:
        # Mendapatkan semua dokumen dari koleksi 'ocr_results'
        docs = db.collection('Detail_arsip_keluar').stream()
        results = [doc.to_dict() for doc in docs]
        return results
    except Exception as e:
        print(f"An error occurred: {e}")
        return []
