// ===========================
// HAMBURGER MENU TOGGLE
// ===========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Tutup menu saat klik link
navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// ===========================
// FORM HANDLING
// ===========================
const form = document.getElementById("formPendaftaran");
const notif = document.getElementById("notif");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const hp = document.getElementById("hp");
const kategori = document.getElementById("kategori");
const pesan = document.getElementById("pesan");

const preview = document.getElementById("preview");
const listData = document.getElementById("listData");


// =========================
// PREVIEW INPUT (input event)
// =========================
nama.addEventListener("input", () => {
    preview.innerHTML = `<p>Halo, <b>${nama.value}</b></p>`;
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let error = "";

    // VALIDASI NAMA
    if (nama.value.length < 3) {
        error = "Nama minimal 3 karakter!";
    }

    // VALIDASI NO HP (hanya angka & min 10 digit)
    else if (!/^[0-9]{10,}$/.test(hp.value)) {
        error = "No HP harus angka dan minimal 10 digit!";
    }

    // VALIDASI EMAIL
    else if (!email.value.includes("@")) {
        error = "Format email tidak valid!";
    }

    // VALIDASI KATEGORI
    else if (kategori.value === "") {
        error = "Silakan pilih kategori!";
    }

    if (error !== "") {
        notif.innerHTML = `<p style="color:#e94560;">❌ ${error}</p>`;
        return;
    }

    notif.innerHTML = `<p style="color:#38a169;">✅ Data berhasil dikirim!</p>`;

    // =========================
    // DOM MANIPULATION
    // =========================
    const li = document.createElement("li");
    li.innerHTML = `
    <b>${nama.value}</b> - ${kategori.value} <br>
    ${email.value} | ${hp.value}
  `;

    listData.appendChild(li);

    // RESET FORM
    form.reset();
    preview.innerHTML = "";
});

notif.addEventListener("click", () => {
    notif.innerHTML = "";
});

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ===========================
// SCROLL REVEAL (IntersectionObserver)
// ===========================
const revealElements = document.querySelectorAll("section, article, .sosmed-item");

revealElements.forEach(el => {
    el.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
});

revealElements.forEach(el => observer.observe(el));

