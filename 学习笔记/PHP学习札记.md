# PHP

PHP：超文本预处理器 （Hypertext Preprocessor）

    PHP 文件可包含文本、HTML、JavaScript代码和 PHP 代码
    PHP 代码在服务器上执行，结果以纯 HTML 形式返回给浏览器
    PHP 文件的默认文件扩展名是 ".php"

## 基础

PHP 能做什么？

    PHP 可以生成动态页面内容
    PHP 可以创建、打开、读取、写入、关闭服务器上的文件
    PHP 可以收集表单数据
    PHP 可以发送和接收 cookies
    PHP 可以添加、删除、修改您的数据库中的数据
    PHP 可以限制用户访问您的网站上的一些页面
    PHP 可以加密数据

通过 PHP，您不再限于输出 HTML。您可以输出图像、PDF 文件，甚至 Flash 电影。您还可以输出任意的文本，比如 XHTML 和 XML。

### 语法

PHP 中的每个代码行都必须以分号结束。分号是一种分隔符，用于把指令集区分开来。

```php
<?php
// php代码
echo "hh";

// echo - 可以输出一个或多个字符串
// print - 只允许输出一个字符串，返回值总为 1
// echo 输出的速度比 print 快， echo 没有返回值，print有返回值1。
echo "<h2>PHP 很有趣!</h2>";
echo "Hello world!<br>";
echo "我要学 PHP!<br>";
echo "这是一个", "字符串，", "使用了", "多个", "参数。";

// 显示变量
$txt1="学习 PHP";
$txt2="RUNOOB.COM";
$cars=array("Volvo","BMW","Toyota");

$a = array("fasaf","fafa","fafags");

echo $txt1;
echo "<br>";
echo "在 $txt2 学习 PHP ";
echo "<br>";
echo "我车的品牌是 {$cars[0]}";

// var_dump 调试的时候用， 判断一个变量的类型与长度,并输出变量的数值,如果变量有值输的是变量的值并回返数据类型。此函数显示关于一个或多个表达式的结构信息，包括表达式的类型与值。数组将递归展开值，通过缩进显示其结构。
$x = 5985;
var_dump($x);

?>
```

#### PHP 变量

##### 规则

    变量以 $ 符号开始，后面跟着变量的名称
    变量名必须以字母或者下划线字符开始
    变量名只能包含字母数字字符以及下划线（A-z、0-9 和 _ ）
    变量名不能包含空格
    变量名是区分大小写的（$y 和 $Y 是两个不同的变量）
    PHP 语句和 PHP 变量都是区分大小写的。

##### PHP 变量作用域

变量的作用域是脚本中变量可被引用/使用的部分。PHP 有四种不同的变量作用域：

    local
    global: 在函数内调用函数外定义的全局变量，我们需要在函数中的变量前加上 global 关键字
    static: 当一个函数完成时，它的所有变量通常都会被删除。然而，有时候您希望某个局部变量不要被删除。就需要使用static，注释：该变量仍然是函数的局部变量。
    parameter： 参数作用域，参数是通过调用代码将值传递给函数的局部变量。

PHP 将所有全局变量存储在一个名为 `$GLOBALS[index]` 的数组中。 index 保存变量的名称。这个数组可以在函数内部访问，也可以直接用来更新全局变量。

#### 数据类型

String（字符串）, Integer（整型）, Float（浮点型）, Boolean（布尔型）, Array（数组）, Object（对象）, NULL（空值）。

整数是一个没有小数的数字。

整数规则:

    整数必须至少有一个数字 (0-9)
    整数不能包含逗号或空格
    整数是没有小数点的
    整数可以是正数或负数
    整型可以用三种格式来指定：十进制， 十六进制（ 以 0x 为前缀）或八进制（前缀为 0）。

对象数据类型也可以用于存储数据。在 PHP 中，对象必须声明。首先，你必须使用class关键字声明类对象。类是可以包含属性和方法的结构。

NULL 值表示变量没有值。NULL 是数据类型为 NULL 的值。指明一个变量是否为空值。 同样可用于数据空值和NULL值的区别。可以通过设置变量值为 NULL 来清空变量数据：

##### PHP常量

是一个简单值的标识符。该值在脚本中不能改变。一个常量由英文字母、下划线、和数字组成,但数字不能作为首字母出现。 (常量名不需要加 $ 修饰符)。

注意： 常量在整个脚本中都可以使用, 常量在定义后，默认是全局变量，可以在整个运行的脚本的任何地方使用。

设置常量，使用 define() 函数，函数语法如下：

```php
bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )
/*
该函数有三个参数:

name：必选参数，常量名称，即标志符。
value：必选参数，常量的值。
case_insensitive ：可选参数，如果设置为 TRUE，该常量则大小写不敏感。默认是大小写敏感的。
*/
define("GREETING", "欢迎访问 Runoob.com");
define("GREETING", "欢迎访问 Runoob.com", true);

```

### 操作符

#### 字符串操作符

在 PHP 中，只有一个字符串运算符。并置运算符 `(.)` 用于把两个字符串值连接起来。

```php
<?php
$txt1="Hello world!";
$txt2="What a nice day!";
echo $txt1 . " " . $txt2;

// strlen() 函数返回字符串的长度（字符数）
echo strlen("Hello world!");

// strpos() 函数用于在字符串内查找一个字符或一段指定的文本。
// 如果在字符串中找到匹配，该函数会返回第一个匹配的字符位置。如果未找到匹配，则返回 FALSE。
echo strpos("Hello world!","world");

echo strlen("中文字符");   // 输出 12, 因为一个中文占 3 个字符数。

// mb_strlen 设置指定编码输出中文字符个数：
echo mb_strlen("中文字符",'utf-8');  // 输出 4
?>
```

#### 算术操作符

基本的加减乘除，取反，模，递增/递减，都有，还有刚刚的 `.` 并置运算符，PHP7+ 版本新增整除运算符 `intdiv()`,

```php
<?php
var_dump(intdiv(10, 3)); // int(3)

$k=15;
$k %= 4;
echo $k; // 输出3

$x="Hello";
$x .= " world!";
echo $x; // 输出Hello world!

// PHP 比较运算符
除了常见的之外， x <> y 是不等于的意思


// 逻辑运算符
x and y;
x or y;
x xor y;
x && y;
x || y;
!x;

// 优先级： &&  >  =  >  and
// 优先级： ||  >  =  >  or
/*
<=> 太空船操作符，又称组合比较运算符，结合比较运算符。

组合比较运算符，英文叫作 combined comparison operator，符号为 <=>，它有一个形象的名字，叫作太空船操作符。组合比较运算符可以轻松实现两个变量的比较，当然不仅限于数值类数据的比较。

语法是这样的：

$c = $a <=> $b;
这句代码的意思是
    如果$a > $b, $c 的值为1
    如果$a == $b, $c 的值为0
    如果$a < $b, $c 的值为-1

在没有太空船运算符的时候，我们只能这样写代码
*/
?>
```

#### PHP 数组运算符

    x + y	集合	x 和 y 的集合
    x == y	相等	如果 x 和 y 具有相同的键/值对，则返回 `true`
    x === y	恒等	如果 x 和 y 具有相同的键/值对，且顺序相同类型相同，则返回 `true`
    x != y	不相等	如果 x 不等于 y，则返回 `true`
    x <> y	不相等	如果 x 不等于 y，则返回 `true`
    x !== y	不恒等	如果 x 不等于 y，则返回 `true`

注意：PHP_EOL 是一个换行符，兼容更大平台。

### PHP数组

数值数组 - 带有数字 ID 键的数组
关联数组 - 带有指定的键的数组，每个键关联一个值
多维数组 - 包含一个或多个数组的数组

```php
<?php
// count() 函数用于返回数组的长度（元素的数量）
$cars=array("Volvo","BMW","Toyota");
echo count($cars);

// 关联数组是使用您分配给数组的指定的键的数组。
$age = array(
    "11" => "35",
    "22" => "dfaff",
    "33" => "hahaha",
);

foreach($age as $x => $x_value) {
    echo "key: " . $x . ", value: ". $x_value . "\n";
}
?>
```

#### PHP - 数组排序函数

在本章中，我们将一一介绍下列 PHP 数组排序函数：

    sort() - 对数组进行升序排列
    rsort() - 对数组进行降序排列
    asort() - 根据关联数组的值，对数组进行升序排列
    ksort() - 根据关联数组的键，对数组进行升序排列
    arsort() - 根据关联数组的值，对数组进行降序排列
    krsort() - 根据关联数组的键，对数组进行降序排列

#### PHP 超级全局变量

PHP中预定义了几个超级全局变量（superglobals） ，这意味着它们在一个脚本的全部作用域中都可用。 你不需要特别说明，就可以在函数及类中使用。

PHP 超级全局变量列表:

    $GLOBALS
    $_SERVER
    $_REQUEST
    $_POST
    $_GET
    $_FILES
    $_ENV
    $_COOKIE
    $_SESSION

##### $_SERVER

$_SERVER 是一个包含了诸如头信息(header)、路径(path)、以及脚本位置(script locations)等等信息的数组。这个数组中的项目由 Web 服务器创建。不能保证每个服务器都提供全部项目；服务器可能会忽略一些，或者提供一些没有在这里列举出来的项目。

```php
<?php
echo $_SERVER['PHP_SELF'];
echo "<br>";
echo $_SERVER['SERVER_NAME'];
echo "<br>";
echo $_SERVER['HTTP_HOST'];
echo "<br>";
echo $_SERVER['HTTP_REFERER'];
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];

// 输出
/*
/try/demo_source/demo_global_server.php
www.runoob.com
www.runoob.com
http://www.runoob.com/try/showphp.php?filename=demo_global_server
Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36
/try/demo_source/demo_global_server.php
*/

?>
```

2. PHP $_REQUEST

PHP $_REQUEST 用于收集HTML表单提交的数据。使用超级全局变量 $_REQUEST 来收集表单中的 input 字段数据:

3. PHP $_POST

PHP $_POST 被广泛应用于收集表单数据，在HTML form标签的指定该属性："method="post"。

4. PHP $_GET
PHP $_GET 同样被广泛应用于收集表单数据，在HTML form标签的指定该属性："method="get"。

```html
<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
Name: <input type="text" name="fname">
<input type="submit">
</form>

<?php
$name = $_REQUEST['fname'];
echo $name;
?>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
Name: <input type="text" name="fname">
<input type="submit">
</form>

<a href="test_get.php?subject=PHP&web=runoob.com">Test $GET</a>

<?php
$name = $_POST['fname'];
echo $name;

echo "Study " . $_GET['subject'] . " at " . $_GET['web'];
?>

</body>
</html>
```

#### PHP 函数

PHP 的真正威力源自于它的函数。

函数的名称应该提示出它的功能
函数名称以字母或下划线开头（不能以数字开头）

#### PHP 魔术变量

PHP 向它运行的任何脚本提供了大量的预定义常量。

不过很多常量都是由不同的扩展库定义的，只有在加载了这些扩展库时才会出现，或者动态加载后，或者在编译时已经包括进去了。

有八个魔术常量它们的值随着它们在代码中的位置改变而改变。

```php
<?php
// __LINE__ 的值就依赖于它在脚本中所处的行来决定。这些特殊的常量不区分大小写，
echo '这是第 " '  . __LINE__ . ' " 行';

// __FILE__ 文件的完整路径和文件名。如果用在被包含文件中，则返回被包含的文件名。
echo '该文件位于 " '  . __FILE__ . ' " ';

// __DIR__ 文件所在的目录。如果用在被包括文件中，则返回被包括的文件所在的目录。
echo '该文件位于 " '  . __DIR__ . ' " ';

// __FUNCTION__ 返回该函数被定义时的名字（区分大小写）
function test() {
    echo  '函数名为：' . __FUNCTION__ ;
}
test();

// __CLASS__ 返回该类被定义时的名字（区分大小写）
class test {
    function _print() {
        echo '类名为：'  . __CLASS__ . "<br>";
        echo  '函数名为：' . __FUNCTION__ ;
    }
}
$t = new test();
$t->_print();

// __TRAIT__ PHP 实现了代码复用的一个方法，称为 traits。Trait 名包括其被声明的作用区域（例如 Foo\Bar）。
// 从基类继承的成员被插入的 SayWorld Trait 中的 MyHelloWorld 方法所覆盖。其行为 MyHelloWorld 类中定义的方法一致。优先顺序是当前类中的方法会覆盖 trait 方法，而 trait 方法又覆盖了基类中的方法。





?>
```




















