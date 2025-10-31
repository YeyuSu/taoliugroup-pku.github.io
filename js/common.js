// ============================================
// LiuLab Website - Common Scripts
// ============================================

// 返回顶部功能
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const btn = document.getElementById("myBtn");
    if (!btn) return;
    
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// 自动设置当前年份（版权信息）
function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('[data-year]');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    updateCopyrightYear();
});

