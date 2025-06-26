# HUGO 安裝(Windows)

> ## Step 1 下載 Hugo 執行檔
Hugo 安裝檔下載位置 : [GitHub Releases](https://github.com/gohugoio/hugo/releases)

![download](/Hugo/Hugoimg/download%20hugo.jpg "download")

可以選擇一般版本的 Hugo 或是 Hugo Extended，兩個版本差異在於有無內建支援SCSS、SASS。

建議直接選擇 Extended 版本，因為有許多的模板、主題都會用到 SCSS 或 SASS，可以省得之後再安裝的麻煩。

> ## Step 2 解壓縮檔案
![hugo.exe](/Hugo/Hugoimg/hugo.exe.jpg "hugo.exe")
打開下載的壓縮檔，可以看到裡面有個 **hugo.exe**，接下來在 C 槽內建立一個新資料夾[ hugo ]，並將檔案解壓縮放進去。

> ## Step 3 加入環境變數

接下來要將資料夾加到環境變數內，才可以在命令提示字元(**CMD**)裡使用 hugo 指令。

![search Evn](/Hugo/Hugoimg/searchEvn.png "Search Evn")

在 Windows 內搜尋「環境變數」，看到「編輯系統環境變數」的選項，將它打開。

![Open Evn](/Hugo/Hugoimg/open%20Evn.jpg "Open Evn")

在系統內容視窗內，點擊最下方的「環境變數」按鈕，打開環境變數的視窗。

![Path](/Hugo/Hugoimg/find_Path.jpg "Path")

在下方系統變數的框框內，找到「Path」的項目。  
點擊後按編輯，或是直接滑鼠左鍵點兩下打開也可以。

![add Path](/Hugo/Hugoimg/add-path.jpg "add Path")

複製剛剛 hugo 資料夾的路徑。  
然後在右側點擊新增，將 hugo 資料夾的路徑給貼上，就可以按確定關閉編輯頁面。

> ## 測試安裝

做好設定，接下來我們就可以測試一下是否有安裝成功。

我們打開命令提示字元輸入以下這條指令:

` hugo version `

如果有出現以下顯示版本的畫面，就代表你成功安裝好 Hugo 了！！！
![Success download](/Hugo/Hugoimg/hugo_cmd.jpg "Success download")