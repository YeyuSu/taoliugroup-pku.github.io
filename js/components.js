// ============================================
// LiuLab Website - Component Loader
// ============================================
// 动态加载Header和Footer组件

// 页面路径映射（用于判断当前页面）
const pageMap = {
    'index.html': 'Home',
    '': 'Home',  // 根路径
    'About%20Liu.html': 'About Liu',
    'About Liu.html': 'About Liu',
    'Research.html': 'Research',
    'Publications.html': 'Publications',
    'News.html': 'News',
    'Members.html': 'Members',
    'Photos.html': 'Photos'
};

// 获取当前页面名称
function getCurrentPageName() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page;
}

// 获取当前页面对应的导航名称
function getCurrentPageNavName() {
    const page = getCurrentPageName();
    return pageMap[page] || '';
}

// Header HTML（作为fallback）
const headerHTML = `<!-- Header -->
<div class="compact" id="header">
    <div id="header-logo">
        <a href="index.html"><img alt="LiuLab" src="images/LiuLogo.jpg" height="64px"/></a>
    </div>
    <div id="nav-block">
        <ul id="nav" role="menubar">
            <li><a href="index.html">Home</a></li>
            <li><a href="About%20Liu.html">About Liu</a></li>
            <li><a href="Research.html">Research</a></li>
            <li><a href="Publications.html">Publications</a></li>
            <li><a href="News.html">News</a></li>
            <li><a href="Members.html">Members</a></li>
            <li><a href="Photos.html">Photos</a></li>
        </ul>
    </div>
    <div class="clear">
    </div>
</div>
<!-- Header End -->`;

// Footer HTML（作为fallback）
const footerHTML = `<!-- Footer -->
<div id="footer">
    <div class="compact">
        <div class="link-block">
            <h4>Links</h4>
            <ul id="footer-links">
                <li><a href="http://www.pku.edu.cn/" target="_blank"><abbr title="Peking University">PKU</abbr></a></li>
                <li><a href="http://www.bjmu.edu.cn/" target="_blank"><abbr title="Health Science Center">HSC</abbr></a></li>
                <li><a href="http://sps.bjmu.edu.cn/" target="_blank"><abbr title="School of Pharmaceutical Sciences">SPS</abbr></a></li>
                <li><a href="http://sklnbd.bjmu.edu.cn/" target="_blank"><abbr title="State Key Laboratory of Natural and Biomimetic Drugs">SKLNBD</abbr></a></li>
            </ul>
        </div>
        <div class="contact-block">
            <h4>Contact Us</h4>
            <ul>
                <li>
                    <address>Peking University Health Science Center,</address>
                    <address>38 Xueyuan Rd, Haidian Distrcit, Beijing, 100191, China</address>
                </li>
                <li>E-mail: taoliupku@pku.edu.cn</li>
                <li>Tel: 010-82805519</li>
            </ul>
        </div>
        <div class="clear">
        </div>
        <div id="sub-footer">
            &copy; <span data-year>2025</span> Tao Liu &middot; All Rights Reserved.
        </div>
    </div>
</div>
<!-- Footer End -->`;

// 加载Header组件
function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;
    
    // 先尝试使用fetch加载（适用于GitHub Pages）
    fetch('components/header.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load header');
            return response.text();
        })
        .then(html => {
            headerContainer.innerHTML = html;
            setActiveNavItem();
        })
        .catch(error => {
            console.warn('Fetch failed, using inline header:', error);
            // 如果fetch失败（本地文件系统），使用内联HTML
            headerContainer.innerHTML = headerHTML;
            setActiveNavItem();
        });
}

// 加载Footer组件
function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;
    
    // 先尝试使用fetch加载（适用于GitHub Pages）
    fetch('components/footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load footer');
            return response.text();
        })
        .then(html => {
            footerContainer.innerHTML = html;
            updateCopyrightYear();
        })
        .catch(error => {
            console.warn('Fetch failed, using inline footer:', error);
            // 如果fetch失败（本地文件系统），使用内联HTML
            footerContainer.innerHTML = footerHTML;
            updateCopyrightYear();
        });
}

// 设置当前激活的导航项
function setActiveNavItem() {
    const currentPageNav = getCurrentPageNavName();
    if (!currentPageNav) return;
    
    const navLinks = document.querySelectorAll('#nav a');
    navLinks.forEach(link => {
        const linkText = link.textContent.trim();
        if (linkText === currentPageNav) {
            // 如果是当前页面，添加高亮样式
            link.innerHTML = '<big style="color: #0080af">' + linkText + '</big>';
        }
    });
}

// 更新版权年份
function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('[data-year]');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});

