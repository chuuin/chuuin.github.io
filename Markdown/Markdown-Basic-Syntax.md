# Basic Synatax(基本語法)
Create sophisticated[^1] formatting[^2] for your prose[^3] and code on Github with simple syntax.
## Headings(標題)
To create a heading, add one to six `#` symbols[^4] before your heading text. The number of `#` you use will determine[^5] the hierarchy[^6] level and typeface[^7] size of the heading.

![title](/Markdown/MDimg/Heading%20level.png "Headings")

``` HTML
# H1 -> <h1>Heading level 1</h1>
## H2 -> <h2>Heading level 1</h2>
### H3 -> <h3>Heading level 1</h3>
#### H4 -> <h4>Heading level 1</h4>
##### H5 -> <h5>Heading level 1</h5>
###### H6 -> <h6>Heading level 1</h6>
```
## Bold Text(粗體文字)

``` HTML
I just love **bold text** -> I just love <strong>bold text</strong>.
```
I just love **bold text**

## Italic Text(斜體文字)

``` HTML
I just love *Italic Text* -> I just love <em>Italic Text</em>
```
I just love *Italic Text*

## Bold and Italic Text(粗體+斜體文字)

``` HTML
This text is ***really important*** -> I just love <strong><em>Italic Text</em></strong>
```
This text is ***really important***.

## 引用警示總共有五種樣式
你可以依據不同情境選擇要使用的樣式，預設的警示文字是英文，你可以直接在`>[!NOTE]`的後面接著輸入想要替換的文字，以藍色的警示為例：

> [!NOTE]註
> 這篇筆記收錄在 HackMD 教學手冊當中，集所有的教學為一身，快收藏訂閱吧！

其他的引用警示類型還有...

> [!TIP]小提醒
> 往下滑動點擊【用雙欄模式，觀看本篇筆記的原始語法】可以開啟雙欄模式看我們怎麼寫的

> [!IMPORTANT]很重要
> 寫下你想要幫助讀者達成目標、專案目的的重要資訊

> [!WARNING]超急！！！
> 拜託 Angel 大大先幫我產出下週的廣告素材，我會請你喝飲料的～

> [!CAUTION]危險勿動
> 此區塊涉及後台數據，非管理人員請勿操作！

## Blockquotes(區塊引用)

```
> Successful use of Blockquotes
```
> Successful use of Blockquotes

## Ordered Lists(有序列表)

``` HTML
1. First item
2. Second item
3. Third item
4. Fourth item
- - - - - - - - - 
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item</li>
</ol>
```
1. First item
2. Second item
3. Third item
4. Fourth item

## Unordered Lists(無序列表)

``` HTML
- First item
- Second item
- Third item
- Fourth item
- - - - - - - - - 
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item</li>
</ul>
```
- First item
- Second item
- Third item
- Fourth item

## Table(表格)

``` 
| Name | Age | Number |
| ---- | --- | ------ |
| Boy  | 18  | 123    |
| Girl | 18  | 456    |
| Dog  | 10  | 789    |
```
| Name | Age | Number |
| :--- | :--:| -----: |
| Boy  | 18  | 123    |
| Girl | 18  | 456    |
| Dog  | 10  | 789    |

You can align text in a column to the left, right, or center by adding a colon (:) to the left, right, or both sides of the hyphen in the header row.

## Fenced Code Blocks (圍欄代碼區塊)

you’ll use three backticks (```)[^8] on the lines before and after the code block.
```HTML
( ``` )
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
( ``` )
```
##  Horizontal rules(水平線){#id}

To create a horizontal rule, use three or more asterisks (***)[^9], dashes (---)[^10] on a line by themselves.

```
***,---
```
*** 
---

## Links(連結)

```HTML
Welcome to my [Github](https://github.com/wangezi)
Welcome to my <a href="https://github.com/wangezi">Github</a>
```
Welcome to my [Github](https://github.com/wangezi).

## Images(圖片)

![Cute Panda!](/Markdown/MDimg/panda02.jpg "Cute Panda")

```HTML
![images text](url)"alt"
<img src="" alt="">
```

## Image Link(圖片連結)

[![Cute Panda!](/Markdown/MDimg/panda.jpg "Cute Panda")](/Markdown/Markdown-Basic-Syntax.md)

```HTML
[![images text](url)"alt"](URL)

<a href=""><img src="" alt=""></a>

```

## Heading ID (標題ID)

Adding custom[^11] IDs allows you to link directly[^12] to headings and modify[^13] them with CSS. 

```HTML
## Heading IDS{# custom-id}
<h2 id="custom-id">Heading IDS</h2>
```

## Linking to Heading IDs(連結到標題ID)

[Go to top](#)

```HTML
[Basic Synatax](#basic-synatax)
<a href="#basic-synatax">Basic Synatax</a>
```

## Strikethrough(刪除線)

~~Strikethrough~~
```
~~text~~
```

## Task Lists(任務清單)

- [x] Monday
- [ ] Tuesday
- [x] Wednesday
- [ ] Thursday
- [x] Friday
- [ ] Saturday
- [x] Sunday

```
- [x] Lists Text()
- [] Lists Text
        .
        .
        .
        .
        .
```
Copying and Pasting Emoji[^14]

Can simply copy an emoji from a source[^15] like [Emojipedia](https://emojipedia.org/) and paste it into your document[^16].

💀 👻 👽 🐼 🐉 🦈


[^1]:複雜的。
[^2]:格式化。
[^3]:散文。
[^4]:符號。
[^5]:決定。
[^6]:等級制度，階級。
[^7]:字體。
[^8]:反引號。
[^9]:星號。
[^10]:破折號。
[^11]:自訂。
[^12]:直接的。
[^13]:改動。
[^14]:表情符號。
[^15]:來源。
[^16]:文件。