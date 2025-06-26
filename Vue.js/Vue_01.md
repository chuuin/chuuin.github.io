# Web 應用程式與 Vue.js 生命週期

## **1-1** Web應用程式開發

當我們建構 Web應用系統時，可分為:
- 前端 : 主要進行使用者介面的建構及視覺化處理。
- 後端 : 主要進行採集資訊及資料處理。

## **1-1-1** 前端開發

透過撰寫 HTML 語法建構頁面，搭配 CSS 建立及管理 HTML頁面中各 Element 樣式，也可用 JavaScript 讓網頁中具備各類效果。

## **1-1-2** 後端開發

後端開發人員主要進行資料的採集及資料處理，常見的語言有 : ASP.NET、JAVA、PHP ...等。

## **1-1-3** 框架 *( Framework )*

框架是為了提升城市開發的效率所提供的架構及規範。 為了避免開發團隊中的成員撰寫程式的邏輯、習慣不同，導致系統難以維護。因此需要共同的規範，以確保系統發展越大時，除了提升開發樹洞外，也降低維護的複雜。

程式語言中，現在軍可以用的框架，例 : 

> 前端
> - HTML / CSS : Bootstrap
> - JavaScript : AngularJs、React.js、[Vue.js](https://vuejs.org/)
> 
> 後端
> - PHP : CodeIgniter、Yii、Laravel、Symfony
> - Python : Django
> - Java : Spring MVC
> - ASP.NET : ASP.NET MVC Framework
>
>目前已 [Vue.js](https://github.com/vuejs/vue)、[React.js](https://github.com/facebook/react)、[AngularJs](https://github.com/angular/angular.js) 為前端三大框架

## **1-2-1** MVC架構

![MVC](/Vue.js/img/MVC.webp "MVC")

MVC 架構中，Web 應用程式分為 Model *(資料模型)*、View *(視圖)*、Controller *(控制器)*，簡稱 MVC。

> ### Model *( 資料模型 )*  
> 資料模型的職責在於資料管理，將會使用到的資料進行包裝、儲存，提供系統內部程式利用，通常搭配 MySQL、Microsoft SQL Server 等資料庫軟體使用。
> ### View *(視圖)*
> 視圖主要專注呈現給使用者的操作介面，主要為 HTML 樣板。 當 HTML 需要呈現動態資訊時，框架會提供模板引擎，透過取得資料模型，顯示取得的資料，讓使用者瀏覽。
> ### Controller *(控制器)*
> 控制器主要處理 Web 應用程式各項作業的流程。當使用者操作處於不同階段時，控制器定義使用者應看見 View 的頁面，並提取所需的資料給 View 給使用者觀看。

MVC 架構的優缺點如下 : 

> 優點
> - 職責分離 : 不論開發人員分別負責 Model、View 或 Controller ，都可以專注在自己負責的部分。
> - 可重用性 : MVC 透過職責分離，可將不同的部分拆解為數個元件進行開發，使各元件可以重複使用。
> - 提升擴充性及維護性 : 由於 MVC 各自獨立，開發人員能在不影響整體架構下，對新需求進行擴充和修改。
>
> 缺點
> - 效能降低 : 由於 MVC 的職責區分，原本能直接串接資料庫，變成需透過 Model 的程式進行連結，程式變得肥大，導致效能降低。
> - 容易關聯複雜 : Web 應用程式在 MVC 架構下開發的越來越大時，沒有合適的規劃，會導致系統中各元件關聯及複雜度增加，導致修復或追蹤問題時會變得更不容易。

## **1-2-2** Flux - 單向資料流

![MVC框架問題](/Vue.js/img/Framing%20problem.png "MVC框架問題")

雖然不是所有 MVC 的實作都如上圖般，因為雙向資料流而容易產生不好維護的問題。然而，Flux 更明確的定義了單向資料流中各角色職責及互動方式，提高了可維護性，讓 Facebook 最後選擇了它。

最後，你需要知道 Flux 是一個單向資料流的設計概念，並不是一個程式庫，因此它有非常多種的實作方式。如果把資料流想像成一齣劇，我們接下來就來探討在 Flux 這齣劇中，每位卡司負責的職責和整個劇本的編排。

![Flux - 單向資料流](/Vue.js/img/Flux.png "Flux - 單向資料流")

Flux 具有 **Action**、**View**、**Dispatcher**、**Store** 4個部分，以下將詳細介紹:

> ### **Action**  
> Action 定義使用者於介面上操作動作的內容及相關的資料。
> ### **View**
> View 的職責在於使用者介面及介面中監聽的各項操作。
> ### **Dispatcher**
> Dispatcher 為 Flux 架構中事件的系統，讓 Store 註冊 callback 及廣播事件，並接收 Action 來的資料。
> ### **Store**
> Store 是唯一可以操作資料與儲存資料的地方，向 Dispatcher 註冊 callback，並接收由 Dispatcher 監聽觸發的事件，進行資料的更新。  

>## **參考文獻**  
>[Flux 角色詳解](https://speakerdeck.com/shiningjason1989/flux-jiao-se-xiang-jie)、
>[Flux 流程詳解](https://speakerdeck.com/shiningjason1989/flux-liu-cheng-xiang-jie)