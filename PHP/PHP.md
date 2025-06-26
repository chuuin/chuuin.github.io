# 基礎 PHP - 前言

PHP 不像一般 HTML 網頁，只要單機下開啟檔案就可以檢視網頁， PHP 必須先在伺服器端執行完後，在將結果傳至使用者端瀏覽器中檢視結果，所以必須使用網站伺服器，且伺服器要支援 PHP

## PHP 資料型態

### Bollean (布林值)

簡單的資料型態，可以為 ture & false 不區分大小寫。

```php
<?php
$foo = ture; //設置 foo 變數為 ture
?>
```

常用在判斷式

```php
<?php
// 兩個等於(=)代表操作符，檢測是否相等，返回 Bollean
if ($password == '123'){
    echo 'pass';
}

// 這樣寫是不必要的
if ($check == ture){
    echo 'check in';
}

// 可以使用以下方法
if ($check){
    echo 'check in';
}
?>
```
- - -
### Integer(整數型態)

整型值 int 可以使用二進制、八進制、十進制或十六進制表示，前面可以加上可選的符號( - 或者 + )。 可以用負運算式來表示一個負的 int 。

```php
<?php
$a = 10; // 十進位
$a = 012; // 八進位 (等於十進位)
$a = 0xa; // 十六進制數字(等於十進制 10)
$a = 0b1010; //二進制數字 (等于十進制 10)
$a = 1_0_1_0; // 整型數值 (PHP 7.4.0 以後)輸出1010
?>
```
整數溢出，如果超過int範圍會轉換成float型態。

```php
<?php
// var_dump()是判斷變量的類型與長度，並輸出變量的數值。
$large_number = 2147483647;
var_dump($large_number); // int(2147483647)

$large_number = 2147483648;
var_dump($large_number); // float(2147483648)
?>
```
- - -

### Float(小數點)
擁有小數點的正負數值。

```php
<?php
$num = 99.99;
$num = -88.88;
?>
```
- - -
### String (字串)
由字符組成，每個字符等同於一個字節。  
定義一個 String 最簡單就是用 ' '(單引號)包起來。

```php
<?php
$text = 'This is a test String';
echo $text; // 輸出: This is a String
?>
```
如果包含在 " "(雙引號)就可以對特殊字符進行解析。

```php
<?php
//可以直接將變數帶入
$dog = "Baekhyun";
echo "My wife's favorite idol is $dog "
?>
```
- - -
### Array(陣列)
PHP 中的 Array 實際上是一個有序映射。  
映射是一種把 values 關連到 keys 的類型。
可以用 array() 方法來結構一個 Array。 接受任意數量並用逗號分隔的 key => values。

```php
<?php
$fruit = array( 0 => "apple", 1 => "tomato", 2 => "banana");
echo $fruit[0]; // apple

// 可以使用以下短語法
$fruit = [ 0 => "apple", 1 => "tomato", 2 => "banana"];
echo $fruit[0]; // apple
?>
```
沒有 keys 的 Array

```php
<?php
$fruit = array("apple", "tomato", "banana");
var_dump($fruit);

//輸出結果
/*array(3) {
    [0] =>
    string(5) "apple"
    [1] =>
    string(6) "tomato"
    [2] =>
    string(6) "banana"
}*/
?>
```
Array 可以用在許多地方，以下範例

```php
<?php
$map = array( "version" => 4, "OS" => "Linux", "lang" => "english", "short_tags" => true);

// . . . 完全等同於 :
$a = array();
$a["version"] = 4
$a["os"] = "Linux";
$a["lang"] = "english";
$a["short_tags"] = true;

unset($a["os"]); // 刪除 "Linux"
?>
```

#### 輸出集合

```php
<?php
$maps = array( "version" => 4,
              "OS" => "Linux",
              "lang" => "english",
              "short_tags" => true
        );

foreach ($maps as $key => $value) {
    echo "$key is $value\n";
}
// version is 4
// OS is Linux
// lang is english
// short_tags is 1
?>
```
Array 是有序的。  
也可以使用不同的排序函数来改變順序。

Array 排序範例

```php
<?php
sort($files); // 對 value 排序
print_r($files);
?>
```
- - -
### Iterable (可疊代對象)

接受任何 Array 或實現 Traversable (可遍歷) 接口的對象。  
這些類型都能用 foreach 疊代，也可以和 生成器 裡的 yield form 一起使用。

```php
<?php
function gen(): iterable { // 建立一個可以疊代生成器
yield 1;
yield 2;
yield 3;
};

$iterable = gen() // 實例化
foreach($iterable as $value){
    echo "$value\n" // \n -> 代表換行。
}
// 輸出
// 1
// 2
// 3

// 答案相同
function gen(): iterable{
    return [1, 2, 3];
}
$iterable = gen();
foreach($iterable as $value){
    echo "$values\n";
}

?>
```
- - -

### Object (物件)

要創建新的 Object， 使用 new 語句

```php
<?php
class SayHi{
    function do_sayhi(){
        echo "Hello!!";
    }
}

$bar = new $foo;
$bar -> do_sayhi(); // Hello!!
?>
```
如果將 Object 轉換成 Object 將不會有任何變化，如果其他類型的值被轉換成 Object， 將會創建一個內置類 stdClass 的實例。  
如果該值為 null， 則新的值為空。  
Array 轉換成 Object 將使 key 值成為屬性名並具有相對應的值，參考以下範例:

```php
<?php
$obj = (object) array('1' => 'foo');
var_dump(isset($obj -> {'1'})); // bool(ture)
var_dump(key($obj)); // string(1) "1"
?>
```

對於其他值，會包含進成員遍量名 scalar。

```php
<?php
$obj = (object) 'hello';
echo $obj -> scalar; // outputs 'hello'
?>
```
- - -

### Null (類型)

特殊的 null 值表示一個變數沒有值。  
NULL 類型唯一可能的值就是 null。  

在下列情況下變數被認為是 null :  
- 被賦值為 null。
- 尚未被賦值。
- 被 unset()。

Null 類型只有一個值，就是不區分大小寫的常量 null。

```php
<?php
$var = NULL;
?>
```
- - -

### PHP 變數命名規則

PHP 中的變數用一個 $ 跟 變數名稱連表示。 變數名是區分大小寫的。

變數名與 PHP 中其他的標籤一樣遵循相同規則。有效的變量名由字或者 _ (底線)開頭，後面追加上任意數量的字母、數字或者底線。  
 > $this 是一個特殊變數，他不能被賦值。

```php
<?php
$firstName = "Wang";
$lastName = "Yin";
echo "$firstName, $lastName"; // 輸出 "Wang, Yin"

$4site = "not yet"; // 非法變數名; 以數字開頭
$_4site = "not yet"; // 合法變數名; 以點線開頭
?>
```
- - -

### PHP 常量

可以使用 const 關鍵字或 define() 函數兩種方法來定義常量。  
函數 define() 允許將常量定義為一個表達式，而 const 關鍵字有一些限制。  
常量一旦被定義，就不能再改變或者取消定義。

使用 const 關鍵字定義常量時，只能包含標量數據( bool、int、float、string)。  
可以將常量定義為一個表達式，也可以定義為 Array。
可以簡單的通過指定期名字來取得常量的值，與變量不同，不應該再常量面前加上 $。  
如果常量名是動態的，也可以用函數 constant() 來獲取常量的值。  
用 get_defined_constants() 可以獲得所有已定義的常量列表。

以下為定義常量範例

```php
<?php
define("CONSTANT","Hello world.");

echo CONSTANT; // 輸出 "Hello world."
echo Constant; // 拋出錯誤 : 未定義的常量 "Constant"
?>
```

以下範例為使用關鍵字 const 定義常量

```php
<?php
// 簡單的標量質
const CONSTANT = "Hello world";

echo CONSTANT;

// 標量表達式
const ANOTHER_CONST = CONSTANT."; Goodbye World";
echo ANOTHER_CONST;

const ANIMALS = array("dog","cat", "bird");
echo ANIMALS[1]; // 將輸出 "cat"

// 常量數組
define("ANIMALS", array("dog","cat", "bird"));
echo ANIMALS[2]; // 輸出 "bird"

?>

```
#### 魔術常量

|名字|說明|
|:---|:---|
|_ LINE _|文件中的當前行號|
|_ FILE _|文件的完整路徑和文件名。 如果用在被包含的文件中，則返回被包含的文件名。
|_ DIR _|文件所在的目錄。 如果用在被包括文件中，則返回被包括的文件所在目錄。 他等於 dirname(_ FILE _)。 除非是跟目錄，否則目錄中名不包括末尾的斜杠。
|_ FUNCTON _|當前函數的名稱。 匿名函數則為 {closure}。
|_ CLASS _|當前"類"的名稱。 類名包括齊備聲明的作用域 (例如 Foo / Bar)。 當用在 trait 方法中時，_ CLASS _ 是調用 trait 方法的類的名字。
|_ TRAIT _|Trait 的名字。 Trait 名包括其被聲明的作用域 (例如 Foo / Bar)。
|_ METHOD _|class 的方法名。
|_ NAMESPACE _|當前命名空間名稱。
|ClassName::class|完整的 class 名稱。

以下為魔術常量範例:

```php
<?php
namespace UserModel {
    class User {
        public function _construct(){
            echo 'I am in '._CALSS_."\n";
        }

        public function showData(){
            echo 'I am in '._METHOD_."\n";
        }
    }

    $obj = new User;
    $obj -> showData();
    echo _NAMESPACE_;
}
?>

// outputs
// I am in UserModel/User
// I am in UserModel/User::showData
// UserModel

```