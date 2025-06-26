# **XAMPP** Windows安裝流程和使用教學

## 安裝流程
 1. 前往以下網址下載 [**XAMPP**](https://www.apachefriends.org/zh_tw/download.html)

 2. 有三個版本可以下載! 但建議下載最新版本(目前是8.2.12，如果有其他版本需求，可以點擊更多下載)
 ![XAMPP for Windows](/XAMPP/img/download%20windows.jpg "XAMPP for Windows")

 3. 下載完後，會有以下畫面:  
 ![Setup](/XAMPP/img/setup.png "Setup")  
 一定要勾選 **MySQL** 和 **phpMyAdmin** 兩個選項，如果有其他需求，可以照自己需求去勾選(建議全勾選，省的之後麻煩)

 4. 接著一路點選 **Next** ，最後跑出以下畫面就代表安裝完成了:  
 ![XAMPP console](/XAMPP/img/XAMPP%20Control%20Panel.jpg "XAMPP console")

## 使用教學
 1. 點選 **Apache** & **MySQL** 的兩個Start按鈕(如下圖)  
    ![Start](/XAMPP/img/Start.jpg "Start")

 2. 打開Chrome，在網址列輸入 : localhost，看到以下畫面代成功!  
    ![localhost](/XAMPP/img/localhost.png)

 3. 點選 PHPinfo，確認PHP版本  
    ![PHPinfo](/XAMPP/img/PHPinfo.png "PHPinfo")

 4. 點選 phpMyAdmin，就能看到 **MySQL** 資料庫  
    ![phpMyAdmin](/XAMPP/img/phpMyAdmin.png "phpMyAdmin")

## 更改預設路徑
 1. XAMPP 的檔案位置預設路徑是 : C:\xampp\htdocs  
    ![htdocs](/XAMPP/img/htdocs.jpg "htdocs")

 2. 想要更改預設路徑，點開 Apache 那行的 Config 並點選 **httpd.conf** (如下圖)  
    ![httpd.conf](/XAMPP/img/httpd.conf.jpg "httpd.conf")

 3. 使用快捷鍵 Ctrl + F，搜尋 **DocumentRoot** (如下圖)  
    ![httpd.conf-note](/XAMPP/img/httpd.conf-note.jpg "httpd.conf-note")  
    看到 **Document** & **Directory**，把這兩行改為你自己的工作資料夾  
    (ex : C:\Users\user01\Desktop\PHP code)
> 1. ***注意!!!*** 兩行都必須更改成相同路徑，少一個都不行!  
> 2. 有修改過 config 的話，都必須重新啟動 Apache !

## 環境測試
 1. 打開 **Visual Studio Code**，打開剛剛預設路徑的資料夾，建立一個 PHP 檔並輸入以下程式碼(如下圖)  
    ```
    <?php 
        echo "Hello world!";
    ?>    
    ```
    ![index](/XAMPP/img/index.png "index")

 2. 打開 Chrome，網址列輸入 localhost，看到以下畫面，就代表成功!!  
    ![Success](/XAMPP/img/Success.png "Success")

## 總結

以上就是 **XAMPP** 的安裝和使用的紀錄，內容只是簡單說明了一些新手入門該注意的地方和技巧。