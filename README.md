# 长伴咨询网站部署指南

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