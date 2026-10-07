# 长伴咨询网站部署指南

## 当前 GitHub Pages 发布方式

当前网站绑定域名为 `www.learnity.net.cn`，发布源为 `main` 分支的仓库根目录。仓库当前保存预构建文件，完整前端源码尚未入库；不要直接从这个不完整源码仓库运行构建。

- 根目录 `index.html` 必须使用构建后的首页，不能引用 `/src/main.tsx`。
- JS 和 CSS 必须保留在 `assets/` 子目录；首页使用相对资源路径。
- 更新网站时，从完整源码项目构建后，将 `dist/static/` 内的内容发布到仓库根目录；仅上传 `dist.zip` 不会自动展开发布。
- `.nojekyll` 用于按静态文件直接发布；`CNAME` 保留自定义域名。
- 域名服务商处应将 `www` 的 CNAME 指向 `sxxcwj.github.io`，DNS 生效及证书就绪后启用 Enforce HTTPS。

以下为本地构建与其他平台部署说明。

## 本地部署步骤

### 1. 构建项目
首先确保您的电脑已安装Node.js和pnpm。然后在项目根目录运行：

```bash
pnpm install
pnpm build
```

构建完成后，会生成`dist`文件夹，包含所有静态资源。

### 2. 本地测试
安装本地服务器（如未安装）：

```bash
pnpm install -g serve
```

运行本地服务器：

```bash
serve -s dist/static
```

在浏览器中访问 `http://localhost:3000` 即可查看网站。

## 生产环境部署选项

### 选项1: 使用静态托管服务
- **Netlify**: 将代码推送到GitHub仓库，在Netlify中连接仓库并设置构建命令为`pnpm build`，发布目录为`dist/static`
- **Vercel**: 类似Netlify，连接GitHub仓库后配置构建设置
- **GitHub Pages**: 需要额外配置部署工作流，将`dist/static`目录部署到gh-pages分支

### 选项2: 部署到自己的服务器
1. 将`dist/static`目录中的所有文件上传到服务器的网站根目录
2. 确保服务器已安装Nginx或Apache等Web服务器
3. 配置Web服务器指向您上传的静态文件目录

## 注意事项
- 部署前确保修改`package.json`中的项目名称和相关信息
- 生产环境中建议设置适当的缓存策略
- 如果使用API服务，需要配置跨域访问权限或代理服务器