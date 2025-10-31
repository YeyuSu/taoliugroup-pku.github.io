# 快速优化实施指南

这是最简单的优化方案，可以立即实施，立即见效。

## ⚡ 15分钟快速优化

### 步骤1：统一首页链接（5分钟）

**问题**：所有页面导航栏中，有些链接指向`LiuLab.html`，有些指向`index.html`

**解决方法**：在代码编辑器中（如VS Code）使用批量查找替换

1. 打开VS Code
2. 按 `Ctrl+Shift+H` 打开"在文件中替换"
3. 在搜索框中输入：`href="LiuLab.html"`
4. 在替换框中输入：`href="index.html"`
5. 在"要包含的文件"中输入：`*.html`
6. 点击"全部替换"

同样替换Logo链接：
- 查找：`<a href="LiuLab.html">`
- 替换：`<a href="index.html">`

---

### 步骤2：使用公共脚本（5分钟）

**问题**："返回顶部"脚本在每个HTML文件中重复

**解决方法**：

1. ✅ 已创建 `js/common.js` 文件（包含返回顶部功能）

2. 在每个HTML文件中：
   - **删除**以下代码（在`</body>`之前）：
   ```html
   <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
   <script>
       window.onscroll = function () {
           scrollFunction()
       };
       function scrollFunction() {
           if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
               document.getElementById("myBtn").style.display = "block";
           } else {
               document.getElementById("myBtn").style.display = "none";
           }
       }
       function topFunction() {
           document.body.scrollTop = 0;
           document.documentElement.scrollTop = 0;
       }
   </script>
   ```
   
   - **替换为**：
   ```html
   <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
   <script src="js/common.js"></script>
   ```

3. 建议：先在一个文件中测试，确认正常后批量替换其他文件

---

### 步骤3：使用配置文件（5分钟，可选）

**问题**：联系方式等信息硬编码在多个文件中

**解决方法**：

1. ✅ 已创建 `js/config.js` 文件

2. 在Footer部分，可以这样使用：
   ```html
   <script src="js/config.js"></script>
   <script>
       // 更新邮箱
       document.querySelector('#footer .email').textContent = SiteConfig.contact.email;
       // 更新电话
       document.querySelector('#footer .tel').textContent = SiteConfig.contact.tel;
       // 更新年份
       document.querySelector('#footer .year').textContent = SiteConfig.currentYear;
   </script>
   ```

3. 或者在HTML中使用data属性，然后统一更新：
   ```html
   <li>E-mail: <span data-email></span></li>
   <li>Tel: <span data-tel></span></li>
   ```

---

## 📝 批量替换脚本

如果文件很多，可以使用文本编辑器的批量替换功能：

### VS Code 批量替换步骤

1. **替换所有首页链接**：
   ```
   查找：href="LiuLab.html"
   替换：href="index.html"
   范围：*.html
   ```

2. **替换Logo链接**：
   ```
   查找：<a href="LiuLab.html">
   替换：<a href="index.html">
   范围：*.html
   ```

3. **统一脚本引用**（分两步）：
   
   第一步，在所有HTML文件的`</body>`前添加：
   ```
   查找：<script src="js/SliderShow.js"></script>
   替换：<script src="js/common.js"></script>\n<script src="js/SliderShow.js"></script>
   ```
   
   第二步，删除重复的返回顶部脚本（需要手动或使用正则表达式）

---

## ✅ 验证清单

完成优化后，检查：

- [ ] 所有页面的导航栏"Home"链接都指向`index.html`
- [ ] Logo点击后跳转到`index.html`
- [ ] "返回顶部"功能在所有页面正常工作
- [ ] 浏览器控制台没有JavaScript错误
- [ ] 本地测试所有页面链接正常

---

## 🚀 提交更改

优化完成后，提交并推送：

```bash
git add .
git commit -m "Optimize: unify homepage links and extract common scripts"
git push origin main
```

---

## 📊 优化效果

**优化前**：
- 修改导航链接需要改16个文件
- 修改联系方式需要改16个文件
- "返回顶部"代码重复16次

**优化后**：
- 修改导航链接：只需改1处（如果使用组件）
- 修改联系方式：只需改1个配置文件
- "返回顶部"代码：只需维护1个文件

**代码减少**：预计减少约500行重复代码

---

**提示**：建议先在测试分支或备份中测试，确认无误后再合并到主分支。

