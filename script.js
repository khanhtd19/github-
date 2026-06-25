// ==========================================
// 1. SCROLL ANIMATION (Dùng chung)
// ==========================================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});
document.querySelectorAll(".card").forEach(el => observer.observe(el));

// ==========================================
// 2. FADE-OUT KHI CHUYỂN TRANG (Dùng chung)
// ==========================================
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");
        if (href && !href.startsWith("http") && !href.startsWith("#") && !href.startsWith("javascript")) {
            e.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => window.location.href = href, 250);
        }
    });
});

// ==========================================
// 3. LOGIC TRANG CHỦ (Tìm kiếm khóa học)
// ==========================================
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", function () {
        const keyword = this.value.toLowerCase();
        document.querySelectorAll(".card").forEach(card => {
            const title = card.querySelector("h3")?.innerText.toLowerCase() || "";
            card.style.display = title.includes(keyword) ? "block" : "none";
        });
    });
}

// ==========================================
// 4. LOGIC TRANG KHÓA HỌC (Modal & Form)
// ==========================================
const modal = document.getElementById("registerModal");
const registerForm = document.getElementById("registerForm");

// Đóng/Mở Modal
document.querySelectorAll(".register-btn").forEach(btn => {
    btn.addEventListener("click", () => { if(modal) modal.style.display = "flex"; });
});
document.querySelector(".close")?.addEventListener("click", () => { modal.style.display = "none"; });

// Xử lý Form Đăng ký
if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // Giữ nguyên logic validation của bạn tại đây...
        // Sau khi validate thành công, lưu vào localStorage:
        const registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
        registrations.push({ name: document.getElementById("name").value, date: new Date().toISOString() });
        localStorage.setItem("registrations", JSON.stringify(registrations));
        
        modal.style.display = "none";
        alert("Đăng ký thành công!");
    });
}

// ==========================================
// 5. LOGIC TRANG BÀI VIẾT (Modal hiển thị)
// ==========================================
const articleData = {
    1: { title: "HTML & CSS", content: "Nội dung về HTML & CSS..." },
    2: { title: "JavaScript ES6", content: "Nội dung về JS ES6..." }
    // Thêm các bài viết còn lại của bạn vào đây
};

function openModal(id) {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "flex";
        document.getElementById("title").innerText = articleData[id]?.title || "";
        document.getElementById("content").innerText = articleData[id]?.content || "";
    }
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}