# AI 文章生成器系統

由 [React(18.3.1 版)](https://react.dev/) 所構建，使用vite [Vite](https://vitejs.dev/) 開發。

## Nodejs 版本

v22.4.1

## 技術列表

- [React](https://react.dev/) - React 是一個用於構建用戶界面的 JavaScript 庫，通過組件化的方式高效地更新和渲染複雜的用戶界面。
- [TanStack-Router](https://tanstack.com/router/latest) - 適用於 React 應用程式的現代且可擴展的路由。
- [Zustand](https://router.vuejs.org/zh/) - Zustand 是一個輕量級的狀態管理庫，通過簡單的 API 和直接的狀態更新機制提供高效的狀態管理解決方案。
- [tailwindcss](https://tailwindcss.com/) - Utility 式 CSS 庫。
- [Axios](https://axios-http.com/) - 基於 Promise 的 HTTP 用戶端，適用於瀏覽器和 Node.js。
<!-- - [bootstrap-icons](https://icons.getbootstrap.com/) - 由 Bootstrap 提供的 svg icon 庫。 -->

<!-- 以下還沒更新 -->
## 專案結構

基本上遵循 React + Vite 的開發結構：

- public/\* - 你的非程式碼、未處理的資源。
- src/\* - 你的專案原始碼。
- `api` - 全站使用的 API 封裝集結。
- `assets` - 全站使用靜態資源。
- `components` - 共用元件。
- `layout` - 共用模板。
- `router` - 全站路由管理。
- `stores` - 全站及共用元件狀態管理。
- `utils` - 通用函式、套件設定檔、型別及正則...等封裝集結。
- `views` - 「頁面」檔案。
- package.json - 專案使用套件列表。
- tailwind.config.js - tailwind 設定檔。
- vite.config.ts - vite 設定檔。
- tsconfig.app.json - typescript 設定檔。

## 開發

根目錄下，直接執行：

```bash
# Project Setup
npm ci

# Compile and Hot-Reload for Development
npm run dev
```

進入 localhost:5173 即可預覽輸出結果。

## 打包

根目錄下，直接執行：

```bash
# Compile and Minify for Production
npm run build
```

然後開啟後端專案 [AIF-TW/Popo_Server](https://github.com/AIF-TW/Popo_Server)，於 `frontend_app` 分支，將打包後的 `index.html` 放在 `Popo_Server/poposerver/templates/registration`，`assets` 放在 `Popo_Server/poposerver/static/poposerver`，然後發 PR 通知後端人員 merge。

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
