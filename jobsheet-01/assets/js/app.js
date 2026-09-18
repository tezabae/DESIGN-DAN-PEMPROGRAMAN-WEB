// ==========================================
// SIMPUS-MINI: JOBSHEET 5 (DOM & EVENT)
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initHapusConfirm();
    initTableFilter();
    initValidasiForm();
});

// ==========================================
// 1. MENU HAMBURGER (JS-Driven)
// ==========================================
function initNavToggle() {
    const toggleBtn = document.getElementById("nav-toggle-btn");
    const nav = document.querySelector("header nav");
    
    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener("click", function () {
        nav.classList.toggle("nav-open");
    });
}

// ==========================================
// 2. CONFIRM DELETE (Front-end Row Removal)
// ==========================================
function initHapusConfirm() {
    const deleteButtons = document.querySelectorAll(".btn-hapus");
    
    if (deleteButtons.length === 0) return;

    deleteButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const row = btn.closest("tr");
            const name = row ? row.querySelector("td")?.textContent : "data ini";
            const yakin = confirm("Yakin ingin menghapus \"" + name + "\"?");
            
            if (yakin && row) {
                row.remove();
            }
        });
    });
}

// ==========================================
// 3. REAL-TIME TABLE FILTER / SEARCH
// ==========================================
function initTableFilter() {
    const input = document.getElementById("search-input");
    const table = document.querySelector(".table-responsive table");
    
    if (!input || !table) return;

    input.addEventListener("keyup", function () {
        const keyword = input.value.toLowerCase();
        const rows = table.querySelectorAll("tbody tr");

        rows.forEach(function (row) {
            const teks = row.textContent.toLowerCase();
            row.style.display = teks.includes(keyword) ? "" : "none";
        });
    });
}

// ==========================================
// 4. CLIENT-SIDE FORM VALIDATION
// ==========================================
function tampilkanError(input, message) {
    hapusError(input);
    const span = document.createElement("span");
    span.className = "error";
    span.textContent = message;
    input.insertAdjacentElement("afterend", span);
}

function hapusError(input) {
    const next = input.nextElementSibling;
    if (next && next.classList.contains("error")) {
        next.remove();
    }
}

function initValidasiForm() {
    const form = document.getElementById("form-tambah");
    
    if (!form) return;

    form.addEventListener("submit", function (e) {
        let valid = true;

        // Validasi Field Judul / Nama
        const title = form.querySelector("[name='title'], [name='name']");
        if (title && title.value.trim() === "") {
            tampilkanError(title, "Kolom ini wajib diisi.");
            valid = false;
        } else if (title) {
            hapusError(title);
        }

        // Validasi Field Tahun (jika ada)
        const year = form.querySelector("[name='year']");
        if (year) {
            const value = parseInt(year.value, 10);
            if (isNaN(value) || value < 1900 || value > 2026) {
                tampilkanError(year, "Tahun harus di antara 1900-2026.");
                valid = false;
            } else {
                hapusError(year);
            }
        }

        // Jika ada data yang tidak valid, batalkan pengiriman form
        if (!valid) {
            e.preventDefault();
        }
    });
}