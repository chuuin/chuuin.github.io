# IAN 個人作品集網站

此專案為 IAN 的前端作品集網站，採用純前端靜態頁面展示個人簡介、技能、專案與聯絡方式。

## 功能特色

- 單頁式區塊導覽（Home / About / Skills / Portfolio / Contact）
- 側邊欄導覽與行動版收合
- 深色／淺色主題切換
- 5 種主色（accent）切換
- 語系切換：繁中／English／日本語（localStorage 記憶）
- 捲動時自動高亮目前段落與回到頂部按鈕
- 作品集卡片含 Demo 與 GitHub 連結

## 專案結構

- `index.html` 單頁主結構與內容
- `css/style.css` 全站樣式
- `js/script.js` 互動邏輯（主題／語言／導覽／回頂）
- `js/i18n.js` 語系字典
- `image/` 圖片與專案縮圖

## 使用技術

- HTML5 / CSS3
- 原生 JavaScript
- Font Awesome（Icon）
- Google Fonts（Poppins、Lobster、Honk、Noto Sans TC）

## 本機預覽

- 直接以瀏覽器開啟 `index.html`

## 內容維護

- 文字內容與區塊結構：編輯 `index.html`
- 語系文字：更新 `js/i18n.js` 內的字典鍵值
- 互動行為：調整 `js/script.js`
- 圖片與縮圖：更新 `image/` 內檔案並在 `index.html` 替換路徑

## 部署

- 本專案為 GitHub Pages 形式，推送到預設分支即可更新網站
