// ==========================================
// JOBSHEET 6: FETCH & RENDER BUKU
// ==========================================

async function loadBookList() {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    
    if (!tbody) return;

    // Tampilkan indikator loading dan kosongkan tbody
    if (loading) loading.style.display = "block";
    tbody.innerHTML = "";

    try {
        // Simulasi jeda jaringan selama 600ms agar indikator loading terlihat
        await new Promise((resolve) => setTimeout(resolve, 600));

        // Mengambil data dari file buku.json (sesuaikan path jika diperlukan)
        const res = await fetch("../data/buku.json");
        
        if (!res.ok) {
            throw new Error("Gagal mengambil data (status " + res.status + ")");
        }

        const listBook = await res.json();

        // Loop data buku dan buat baris <tr> baru secara dinamis
        listBook.forEach(function (book) {
            const tr = document.createElement("tr");
            tr.innerHTML = 
                "<td>" + book.title + "</td>" +
                "<td>" + book.author + "</td>" +
                "<td>" + book.year + "</td>" +
                "<td>" + book.stock + "</td>" +
                "<td>" +
                    "<button type=\"button\">Edit</button> " +
                    "<button type=\"button\" class=\"btn-delete\">Delete</button>" +
                "</td>";
            tbody.appendChild(tr);
        });

    } catch (err) {
        // Jika terjadi error, tampilkan pesan error di dalam tabel
        tbody.innerHTML = "<tr><td colspan=\"5\">Gagal memuat data: " + err.message + "</td></tr>";
    } finally {
        // Sembunyikan kembali indikator loading (baik sukses maupun gagal)
        if (loading) loading.style.display = "none";
    }
}

// Jalankan fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", loadBookList);

// Fungsi Event Delegation untuk tombol Delete yang digenerate secara dinamis
function initHapusConfirm() {
    document.addEventListener("click", function (e) {
        const btn = e.target.closest(".btn-delete");
        if (!btn) return;

        const row = btn.closest("tr");
        const name = row ? row.querySelector("td")?.textContent : "data ini";
        const yakin = confirm("Yakin ingin menghapus \"" + name + "\"?");
        
        if (yakin && row) {
            row.remove();
        }
    });
}

// Pastikan initHapusConfirm dipanggil saat DOM sudah siap (jika belum dipanggil sebelumnya)
document.addEventListener("DOMContentLoaded", function () {
    initHapusConfirm();
});