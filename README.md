# 长伴咨询网站部署指南

## 当前 GitHub Pages 发布方式

当前网站绑定域名为 `www.learnity.net.cn`，发布源为 `main` 分支的仓库根目录。完整 React / Vite 前端源码现位于 `website-src/`。根目录仍保存当前线上预构建文件；根目录的静态产物由该源码构建生成，GitHub Pages 直接发布这些文件。

- 根目录 `index.html` 必须使用构建后的首页，不能引用 `/src/main.tsx`。
- JS 和 CSS 必须保留在 `assets/` 子目录；首页使用相对资源路径。
- 更新网站时，从完整源码项目构建后，将 `dist/static/` 内的内容发布到仓库根目录；仅上传 `dist.zip` 不会自动展开发布。
- `.nojekyll` 用于按静态文件直接发布；`CNAME` 保留自定义域名。
- 域名服务商处应将 `www` 的 CNAME 指向 `sxxcwj.github.io`，DNS 生效及证书就绪后启用 Enforce HTTPS。

以下为本地构建与其他平台部署说明。

## 源码与优化版本

- `website-src/src/`：页面和组件源码。
- `website-src/tests/`：咨询邮件草稿测试。
- `website-src/public/`：自定义域名和静态托管配置。
- `website-src/dist/static/`：本地生成的发布文件，已被 Git 忽略。
- 当前源码里程碑：`0.2.0`，已完成导航、咨询入口、空链接、图片与资源体积优化；电话、邮箱沿用现有网站。
- 咨询方案为邮件草稿：页面不会自动发送表单，访客必须在邮件应用中发送，或复制后自行发送。
- 原始本地源码目录和当前线上产物均已保留。

## 本地部署步骤

### 1. 构建项目
首先确保电脑已安装 Node.js（22.18 或以上）和 pnpm。然后在仓库根目录运行：

```bash
pnpm --dir website-src install --frozen-lockfile
pnpm --dir website-src test
pnpm --dir website-src build
```

构建完成后，`website-src/dist/static/` 包含静态资源。

### 2. 本地预览

```bash
pnpm --dir website-src preview
```

在浏览器访问 `http://127.0.0.1:3000/`。开发时可运行 `pnpm --dir website-src dev`。

### 3. 发布方式

当前 GitHub Pages 发布源仍是 `main` 分支根目录。先检查本地预览，再将经确认的 `website-src/dist/static/` 内容更新到根目录并提交；不要仅提交源码后就认为网站已经更新。保留现有 Git 历史、`CNAME` 和 `.nojekyll`，不使用 force push。

## 生产环境部署选项

### 选项1: 使用静态托管服务
- **Netlify**: 将代码推送到GitHub仓库，在Netlify中连接仓库并设置项目目录设为 `website-src`，构建命令为 `pnpm build`，发布目录为 `dist/static`
- **Vercel**: 类似Netlify，连接GitHub仓库后配置构建设置
- **GitHub Pages**: 当前使用 `main` 分支根目录发布；未来可另行配置构建工作流。

### 选项2: 部署到自己的服务器
1. 将 `website-src/dist/static` 目录中的所有文件上传到服务器的网站根目录
2. 确保服务器已安装Nginx或Apache等Web服务器
3. 配置Web服务器指向您上传的静态文件目录

## 注意事项
- 部署前确保修改`package.json`中的项目名称和相关信息
- 生产环境中建议设置适当的缓存策略
- 如果使用API服务，需要配置跨域访问权限或代理服务器