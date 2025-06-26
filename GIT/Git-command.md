![Git](/GIT/img/Git-Icon-1788C.png "Git")

---

# Git常用指令大全

**tags**: `初步掌握Git與Github應用`
> 希望藉由這份筆記。能讓正在學習的自己，得到些許幫助。

## 實務上的常用的 Git 指令

### 基礎設定

`git --version` : 查詢使用的 git 版本。

`git config --list` : 查詢設定列表(參數設定值)。

`git config --global user.name "名字"` : 設定使用者姓名。

`git config --global user.email "email"` : 設定使用者 email。

---

### 新增本地 / 遠端數據庫

`git init` : 在本地資料夾新增數據庫。

`git clone 遠端數據庫網址` : 複製遠端數據庫。

---

### 增加 / 刪除檔案

`git add 檔案名稱` : 增加檔案進入索引。

`git add .` : 增加全部檔案進入索引。

`git status` : 查詢狀態。

`git log` : 顯示 commit 歷史紀錄。

`git commit -m "更新訊息"` : 將索引提交到本地數據庫。

---

### 還原指令

`git reset --hard` : 還原工作目錄，會跟最後一次 commit 保持一樣。

`git reset HEAD` : 全部檔案取消索引。

`git reset HEAD 檔案名稱` : 單一檔案取消索引。

`git checkout 檔案名稱` : 恢復單一檔案到最新 commit 狀態。

`git reset --hard HEAD^` : 刪除最近一次 commit。

`git reset --hard ORIG_HEAD` : 上面語法如果刪錯了可以再用此語法還原。

`git reset --soft HEAD^` : 刪除最近一次 commit，但保留異動內容。

`git commit --amend` : commit 後發現有幾個檔案忘了加進去，想要補內容進去時。

---

### 分支

`git branch` : 顯示所有本地分支。

`git branch 分支名稱` : 新增分支。

`git checkout 分支名稱` : 切換分支。

`git merge 分支名稱` : 合併指定分支到目前的分支。

`git branch -d 分支名稱` : 刪除分支。

---

### 遠端數據庫操作

`git clone 遠端數據庫網址` : 複製遠端數據庫。

`git remote` : 查詢遠端數據庫。

`git push 遠端數據庫名稱 遠端分支名稱` : 將本地分支推送到遠端分支。

`git pull` : 將遠端分支拉下來與本地分支進行合併。

---

### 標籤

`git tag` : 查詢標籤。

`git tag -n` : 查詢詳細標籤。

`git tag -d 標籤名稱` : 刪除標籤。

`git tag 標籤名稱` : 新增輕量標籤。

`git tag -am "備註內容" 標籤名稱` : 新增標示標籤。

---

### 暫存

`git stash` : 暫時儲存當前目錄。

`git stash list` : 瀏覽 stash 列表。

`git stash pop` : 還原暫存。

`git stash drop` : 清除最新暫存。

`git stash clear` : 清除全部暫存。

---

### 專案本地端指令圖

![Git Pull](/GIT/img/git%20pull.png "Git Pull")