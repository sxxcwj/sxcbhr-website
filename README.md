# 长伴咨询网站部署指南

## 当前 GitHub Pages 发布方式

当前网站绑定域名为 `www.learnity.net.cn`，发布源为 `main` 分支的仓库根目录。完整 React / Vite 前端源码现位于 `website-src/`。根目录仍保存当前线上预构建文件；根目录的静态产物由该源码构建生成，GitHub Pages 直接发布这些文件。

- 根目录 `index.html` 必须使用构建后的首页，不能引用 `/src/main.tsx`。
- JS 和 CSS 必须保留在 `assets/` 子目录，首页引用对应的构建资源。
- 更新网站时，从完整源码项目构建后，将 `dist/static/` 内的内容发布到仓库根目录；仅上传 `dist.zip` 不会自动展开发布。
- `.nojekyll` 用于按静态文件直接发布；`CNAME` 保留自定义域名。
- 域名服务商处应将 `www` 的 CNAME 指向 `sxxcwj.github.io`，DNS 生效及证书就绪后启用 Enforce HTTPS。

以下为本地构建与其他平台部署说明。

## 源码与优化版本

- `website-src/src/`：页面和组件源码。
- `website-src/tests/`：咨询草稿及自动提交测试。
- `website-src/public/`：自定义域名和静态托管配置。
- `website-src/dist/static/`：本地生成的发布文件，已被 Git 忽略。
- 当前源码里程碑：`0.4.0`，含导航、图片与资源体积优化、Formspree 自动咨询通知，以及三个明确标注的咨询情境示例。
- 点击“提交咨询”会向 Formspree 提交并保存咨询内容，由后台通知 `wangjian@cbrlzy.com`；提交失败保留内容，可改用邮件草稿自行发送。
- 原始本地源码目录和当前线上产物均已保留。

## 自动咨询邮件接入状态

公开表单地址已配置，后台通知收件人为 `wangjian@cbrlzy.com`。2026-10-08 经用户授权发送了一条功能测试，页面返回成功，后台完整保留字段、中文和换行，邮件通知状态为 `dispatched`（已发出），用户已确认邮箱收到邮件。12 项自动化测试、类型检查及生产构建通过。页面的“咨询已提交”只代表服务确认接收。配置与维护步骤见 [配置说明](website-src/docs/formspree-setup.md)。

## 咨询情境示例

经用户于 2026-10-08 授权发布，网站增加三个咨询情境示例：制造企业的组织与绩效、成长型企业的人才梯队、服务企业的中层管理。它们明确标为模拟咨询情境，展示建议工作路径与可形成的交付，不代表历史客户项目。案例导航、手机菜单、页脚与咨询入口均已连接。案例内容与维护说明见 [案例说明](website-src/docs/case-studies.md)。转为正式客户案例时，真实项目事实与可公开范围仍需由用户确认。

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
