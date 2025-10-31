# 组件系统迁移进度

## 已完成 ✅
- index.html
- LiuLab.html
- About Liu.html
- Research.html
- Publications.html
- News.html

## 待处理 ⏳
- Members.html
- Photos.html
- Photos-2017 Spring Travel.html
- Photos-2018 Spring Travel.html
- Photos-2019 Spring Travel.html
- Photos-First Anniversary.html
- Photos-Liulab Members.html
- Photos-awards.html
- Photos-visitors.html

## 替换模式

### Header替换
查找：
```html
<!-- Header -->
<div class="compact" id="header">
    <div id="header-logo">
        <a href="index.html"><img alt="LiuLab" src="images/LiuLogo.jpg" height="64px"/></a>
    </div>
    <div id="nav-block">
        <ul id="nav" role="menubar">
            ...导航项...
        </ul>
    </div>
    <div class="clear">
    </div>
</div>
<!-- Header End -->
```

替换为：
```html
<!-- Header -->
<div id="header-container"></div>
<!-- Header End -->
```

### Footer替换
查找整个Footer部分（从 `<!-- Footer -->` 到 `<!-- Footer End -->`），替换为：
```html
<!-- Footer -->
<div id="footer-container"></div>
<!-- Footer End -->
```

### 脚本引用
确保在 `</body>` 之前有：
```html
<script src="js/components.js"></script>
<script src="js/common.js"></script>
```

## 注意事项
- Photos子页面可能使用 `all pictures/homepage pictures/LiuLogo.jpg`，组件会统一使用 `images/LiuLogo.jpg`
- 确保components.js在common.js之前加载

