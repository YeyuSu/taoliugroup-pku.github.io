# LiuLab 实验室网站（简化版）

这是 LiuLab 网站的纯静态版本，包含 HTML/CSS/JS 以及必须的图片资源，便于本地浏览与 GitHub Pages 托管。

## 目录结构

```
LiuLab_Simplified/
├── css/
│   └── Homepage.css          # 全站样式
├── js/
│   └── SliderShow.js         # 首页轮播脚本
├── images/                   # 静态图片（已就位）
├── index.html                # 首页（由 LiuLab.html 拷贝而来）
├── LiuLab.html               # 首页原文件（保留以兼容）
├── About Liu.html            # 关于页面
├── Research.html             # 研究方向
├── Publications.html         # 论文发表
├── News.html                 # 新闻动态
├── Members.html              # 团队成员
├── Photos.html               # 照片总览及子页入口
└── README.md                 # 项目说明
```

## 本地预览

1. 直接双击打开 `index.html`（或拖到浏览器）。
2. 若浏览器有跨域限制，建议使用任意本地静态服务器启动（可选）：
   - Python: `python -m http.server 8080`，然后访问 `http://localhost:8080`。

## 部署与访问（GitHub Pages）

该仓库已配置为直接从 `main` 分支根目录部署：

1. 仓库 Settings → Pages → Source 选择 “Deploy from a branch”。
2. 分支选择 `main`，文件夹选择 `/ (root)`，保存。
3. 稍等数分钟后访问站点：
   - `https://taoliugroup-pku.github.io/`
   - 或 `https://yeyusu.github.io/taoliugroup-pku.github.io/`

若首页未生效，请确认根目录存在 `index.html`。

## 资源说明

- 所有页面内图片路径均指向 `images/` 相对目录；如需替换图片，保持同名覆盖即可。
- 首页轮播与「论文/成员/相册」等栏目均已配好示例图片。
- 大图加载较慢时，建议先压缩图片或使用 Web 格式（如 `.webp`）。

## 常见问题

- 站点显示为 README 内容：请确认根目录存在 `index.html`（已添加）。
- 推送后页面未更新：等待 2–5 分钟，或在仓库的 Actions/Pages 查看部署状态。
- 图片不显示：检查图片是否已放入 `images/`，且文件名（含大小写与空格）与页面引用完全一致。

## 维护建议

- 新增页面时，遵循现有文件命名与相对路径组织方式。
- 大批量替换图片后，建议本地打开 `index.html` 逐页点击验证链接与图片。

如需进一步功能（中英文切换、移动端自适应优化、自动化构建等），可在此基础上逐步扩展。
