# Fake Uniswap Interface

这是一个完全复制Uniswap界面的网站项目，包括所有按钮、颜色、字体和布局。

## 功能特点

- ✨ 完全复制Uniswap的设计风格
- 🎨 使用Uniswap的粉色主题色 (#FF007A)
- 📱 响应式设计，支持移动端
- 🔄 交互式Swap界面
- 🎯 现代化的UI/UX设计
- 🎬 使用Tailwind CSS实现流畅动画效果
  - 淡入淡出动画（fade-in）
  - 缩放动画（scale-in）
  - 滑动展开动画（slide-down）
  - 悬停和点击效果

## 技术栈

- React 18
- Vite
- Tailwind CSS 3（含自定义动画）
- Inter字体

## 安装和运行

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

然后在浏览器中访问 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
Fake-Uniswap/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Header.css
        ├── SwapInterface.jsx
        └── SwapInterface.css
```

## 主要组件

### Header
- 导航菜单（Swap, Tokens, NFTs, Pool）
- 搜索按钮
- 连接钱包按钮
- 响应式设计

### SwapInterface
- 代币输入框
- 代币选择器
- Swap按钮
- 交易详情显示
- 价格影响指示器

## 颜色方案

- 主色：#FF007A (Uniswap粉色)
- 背景：渐变粉色 (#fdeef4 → #fbf9fe)
- 文字：#222 (深灰)
- 次要文字：#7d7d7d (中灰)
- 卡片背景：#ffffff (白色)
- 输入框背景：#f7f8fa (浅灰)

## 字体

使用Google Fonts的Inter字体，权重包括400、500、600、700。

## 许可证

MIT



