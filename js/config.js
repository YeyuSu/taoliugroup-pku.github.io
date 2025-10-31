// ============================================
// LiuLab Website - Configuration
// ============================================
// 集中管理网站配置信息，修改时只需更新此文件

const SiteConfig = {
    // 网站基本信息
    siteName: "LiuLab",
    siteTitle: "LiuLab - Tao Liu Research Group",
    
    // 联系信息
    contact: {
        email: "taoliupku@pku.edu.cn",
        tel: "010-82805519",
        address: {
            line1: "Peking University Health Science Center,",
            line2: "38 Xueyuan Rd, Haidian Distrcit, Beijing, 100191, China"
        }
    },
    
    // 外部链接
    links: {
        pku: "http://www.pku.edu.cn/",
        hsc: "http://www.bjmu.edu.cn/",
        sps: "http://sps.bjmu.edu.cn/",
        sklnbd: "http://sklnbd.bjmu.edu.cn/"
    },
    
    // 导航菜单（便于后续动态生成）
    navItems: [
        { name: "Home", url: "index.html" },
        { name: "About Liu", url: "About%20Liu.html" },
        { name: "Research", url: "Research.html" },
        { name: "Publications", url: "Publications.html" },
        { name: "News", url: "News.html" },
        { name: "Members", url: "Members.html" },
        { name: "Photos", url: "Photos.html" }
    ],
    
    // 当前年份（自动更新）
    get currentYear() {
        return new Date().getFullYear();
    }
};

// 辅助函数：获取当前页面名称
function getCurrentPageName() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page;
}

// 辅助函数：判断是否为当前页面
function isCurrentPage(url) {
    const current = getCurrentPageName();
    return url === current || 
           (current === '' && url === 'index.html') ||
           (current === 'index.html' && url === 'index.html');
}

