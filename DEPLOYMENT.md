# 长伴咨询网站部署指南

## 🚀 快速部署到 www.sxcbhr.com

### 方法一：Netlify 部署（推荐）

#### 步骤1：上传到GitHub
1. 在GitHub创建新仓库：`sxcbhr-website`
2. 将项目文件夹压缩上传，或使用GitHub Desktop

#### 步骤2：Netlify部署
1. 访问 [netlify.com](https://netlify.com)
2. 点击 "New site from Git"
3. 连接GitHub账户
4. 选择 `sxcbhr-website` 仓库
5. 构建设置会自动检测（已配置netlify.toml）
6. 点击 "Deploy site"

#### 步骤3：绑定域名
1. 部署完成后，进入 Site settings → Domain management
2. 点击 "Add custom domain"
3. 输入：`www.sxcbhr.com`
4. 按照提示配置DNS

### 方法二：Vercel 部署

1. 访问 [vercel.com](https://vercel.com)
2. 导入GitHub仓库
3. 自动检测配置（已配置vercel.json）
4. 部署完成后添加自定义域名

### DNS 配置

在域名管理后台添加：
```
类型: CNAME
名称: www
值: [部署平台提供的域名]
```

### 本地测试
当前本地预览：http://localhost:3000

### 部署后访问
生产环境：https://www.sxcbhr.com

---

## 📁 项目结构
- `dist/static/` - 构建后的静态文件
- `netlify.toml` - Netlify配置
- `vercel.json` - Vercel配置
- `src/` - 源代码

## ✅ 部署检查清单
- [x] 项目构建完成
- [x] 配置文件已创建
- [ ] GitHub仓库创建
- [ ] 选择部署平台
- [ ] 域名DNS配置
- [ ] SSL证书自动配置
- [ ] 访问测试

需要帮助请联系技术支持。