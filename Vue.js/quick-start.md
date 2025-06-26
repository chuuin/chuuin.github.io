# 📒 Creating a Vue Application
>[!NOTE] Prerequisites (先決條件)  
  > - Familiarity with the command line. (熟悉命令列)  
  > - Install Node.js version 18.3 or higher. (安裝 Node.js 18.3 或更高版本)

In this section we will introduce how to scaffold a Vue Single Page Application on your local machine. The created project will be using a build setup based on Vite and allow us to use Vue Single-File Components (SFCs).  

在本節中，我們將介紹如何在本機電腦上建立 Vue單一頁面應用程式。建立的專案將使用基於Vite 的建置設置，並允許我們使用 Vue單一檔案元件（SFC）。

Make sure you have an up-to-date version of Node.js installed and your current working directory is the one where you intend to create a project. Run the following command in your command line:  

確保您安裝了最新版本的Node.js ，並且目前工作目錄是您打算建立專案的目錄。在命令列中執行以下命令：

```
  npm create vue@latest
```
This command will install and execute create-vue, the official Vue project scaffolding tool. You will be presented with prompts for several optional features such as TypeScript and testing support:  

此命令將安裝並執行create-vue ，官方 Vue 專案腳手架工具。您將看到幾個可選功能的提示，例如 TypeScript 和測試支援：
```
✅ Project name: … <your-project-name>
✅ Add TypeScript? … <No> / Yes
✅ Add JSX Support? … <No> / Yes
✅ Add Vue Router for Single Page Application development? … <No> / Yes
✅ Add Pinia for state management? … <No> / Yes
✅ Add Vitest for Unit testing? … <No> / Yes
✅ Add an End-to-End Testing Solution? … <No> / Cypress / Nightwatch / Playwright
✅ Add ESLint for code quality? … No / <Yes>
✅ Add Prettier for code formatting? … <No> / Yes
✅ Add Vue DevTools 7 extension for debugging? (experimental) … <No>/ Yes

Scaffolding project in ./<your-project-name>...
Done.
```

If you are unsure about an option, simply choose No by hitting enter for now. Once the project is created, follow the instructions to install dependencies and start the dev server:  

如果您不確定某個選項，只需暫時按 Enter 鍵選擇 *No* 即可。建立專案後，請按照說明安裝依賴項並啟動開發伺服器：

```
cd <your-project-name>
npm install
npm run dev
```