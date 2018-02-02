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

class Base {
    public function sayHello() {
        echo "hello ";
    }
}

trait SayWorld {
    public function sayHello() {
        parent::sayHello();
        echo "world!";
    }
}

class MyHelloWorld extends Base {
    use SayWorld;
}

$o = new MyHelloWorld();
$o->sayHello();

// __METHOD__ 类的方法名（PHP 5.0.0 新加）。返回该方法被定义时的名字（区分大小写）。

// __NAMESPACE__ 当前命名空间的名称（区分大小写）。

?>
```

##### PHP 命名空间

PHP 命名空间可以解决以下两类问题：
    用户编写的代码与PHP内部的类/函数/常量或第三方类/函数/常量之间的名字冲突。
    为很长的标识符名称(通常是为了缓解第一类问题而定义的)创建一个别名（或简短）的名称，提高源代码的可读性。

```php
<?php
// 定义代码在 'MyProject' 命名空间中
namespace MyProject;

// ... 代码 ...
namespace MyProject {
    const CONNECT_OK = 1;
    class Connection { /* ... */ }
    function connect() { /* ... */  }
}

namespace AnotherProject {
    const CONNECT_OK = 1;
    class Connection { /* ... */ }
    function connect() { /* ... */  }
}

namespace { // 全局代码
    session_start();
    $a = MyProject\connect();
    echo MyProject\Connection::start();
}

// 在声明命名空间之前唯一合法的代码是用于定义源文件编码方式的 declare 语句。所有非 PHP 代码包括空白符都不能出现在命名空间的声明之前。
declare(encoding='UTF-8'); //定义多个命名空间和不包含在命名空间中的代码

// 子命名空间 与目录和文件的关系很象，PHP 命名空间也允许指定层次化的命名空间的名称。因此，命名空间的名字可以使用分层次的方式定义：
namespace MyProject\Sub\Level;  //声明分层次的单个命名空间

const CONNECT_OK = 1;
class Connection { /* ... */ }
function Connect() { /* ... */  }




?>
```

##### 命名空间使用

PHP 命名空间中的类名可以通过三种方式引用：

非限定名称，或不包含前缀的类名称，例如 `$a=new foo();` 或 `foo::staticmethod();`。如果当前命名空间是 currentnamespace，foo 将被解析为 `currentnamespace\foo`。如果使用 foo 的代码是全局的，不包含在任何命名空间中的代码，则 foo 会被解析为foo。 警告：如果命名空间中的函数或常量未定义，则该非限定的函数名称或常量名称会被解析为全局函数名称或常量名称。

限定名称,或包含前缀的名称，例如 `$a = new subnamespace\foo();` 或 `subnamespace\foo::staticmethod();`。如果当前的命名空间是 currentnamespace，则 foo 会被解析为 `currentnamespace\subnamespace\foo`。如果使用 foo 的代码是全局的，不包含在任何命名空间中的代码，foo 会被解析为subnamespace\foo。

完全限定名称，或包含了全局前缀操作符的名称，例如，`$a = new \currentnamespace\foo();` 或 `\currentnamespace\foo::staticmethod();`。在这种情况下，foo 总是被解析为代码中的文字名`(literal name)currentnamespace\foo`。

```php
<?php
/* 非限定名称 */
foo(); // 解析为 Foo\Bar\foo resolves to function Foo\Bar\foo
foo::staticmethod(); // 解析为类 Foo\Bar\foo的静态方法staticmethod。resolves to class Foo\Bar\foo, method staticmethod
echo FOO; // resolves to constant Foo\Bar\FOO

/* 限定名称 */
subnamespace\foo(); // 解析为函数 Foo\Bar\subnamespace\foo
subnamespace\foo::staticmethod(); // 解析为类 Foo\Bar\subnamespace\foo, 以及类的方法 staticmethod
echo subnamespace\FOO; // 解析为常量 Foo\Bar\subnamespace\FOO

/* 完全限定名称 */
\Foo\Bar\foo(); // 解析为函数 Foo\Bar\foo
\Foo\Bar\foo::staticmethod(); // 解析为类 Foo\Bar\foo, 以及类的方法 staticmethod
echo \Foo\Bar\FOO; // 解析为常量 Foo\Bar\FOO

// 在命名空间内部访问全局类、函数和常量
namespace Foo;

function strlen() {}
const INI_ALL = 3;
class Exception {}

$a = \strlen('hi'); // 调用全局函数strlen
$b = \INI_ALL; // 访问全局常量 INI_ALL
$c = new \Exception('error'); // 实例化全局类 Exception
?>
```

##### 使用命名空间：别名/导入

PHP 命名空间支持 有两种使用别名或导入方式：为类名称使用别名，或为命名空间名称使用别名。

在PHP中，别名是通过操作符 use 来实现的. 下面是一个使用所有可能的三种导入方式的例子：

```php
<?php
// 1、使用use操作符导入/使用别名
namespace foo;
use My\Full\Classname as Another;

// 下面的例子与 use My\Full\NSname as NSname 相同
use My\Full\NSname;

// 导入一个全局类
use \ArrayObject;

$obj = new namespace\Another; // 实例化 foo\Another 对象
$obj = new Another; // 实例化 My\Full\Classname　对象
NSname\subns\func(); // 调用函数 My\Full\NSname\subns\func
$a = new ArrayObject(array(1)); // 实例化 ArrayObject 对象
// 如果不使用 "use \ArrayObject" ，则实例化一个 foo\ArrayObject 对象

// 2、 一行中包含多个use语句
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // 实例化 My\Full\Classname 对象
NSname\subns\func(); // 调用函数 My\Full\NSname\subns\func
导入操作是在编译执行的，但动态的类名称、函数名称或常量名称则不是。

// 3、导入和动态名称
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // 实例化一个 My\Full\Classname 对象
$a = 'Another';
$obj = new $a;      // 实际化一个 Another 对象
另外，导入操作只影响非限定名称和限定名称。完全限定名称由于是确定的，故不受导入的影响。

// 4、导入和完全限定名称
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
$obj = new \Another; // instantiates object of class Another
$obj = new Another\thing; // instantiates object of class My\Full\Classname\thing
$obj = new \Another\thing; // instantiates object of class Another\thing

// 全局空间
// 如果没有定义任何命名空间，所有的类与函数的定义都是在全局空间，与 PHP 引入命名空间概念前一样。在名称前加上前缀 \ 表示该名称是全局空间中的名称，即使该名称位于其它的命名空间中时也是如此。
namespace A\B\C;

/* 这个函数是 A\B\C\fopen */
function fopen() {
     /* ... */
     $f = \fopen(...); // 调用全局的fopen函数
     return $f;
}
?>
```

##### 调用顺序

名称解析遵循下列规则：

1. 对完全限定名称的函数，类和常量的调用在编译时解析。例如 new \A\B 解析为类 A\B。

2. 所有的非限定名称和限定名称（非完全限定名称）根据当前的导入规则在编译时进行转换。例如，如果命名空间 A\B\C 被导入为 C，那么对 C\D\e() 的调用就会被转换为 A\B\C\D\e()。

3. 在命名空间内部，所有的没有根据导入规则转换的限定名称均会在其前面加上当前的命名空间名称。例如，在命名空间 A\B 内部调用 C\D\e()，则 C\D\e() 会被转换为 A\B\C\D\e() 。

4. 非限定类名根据当前的导入规则在编译时转换（用全名代替短的导入名称）。例如，如果命名空间 A\B\C 导入为C，则 new C() 被转换为 new A\B\C() 。

5. 在命名空间内部（例如A\B），对非限定名称的函数调用是在运行时解析的。例如对函数 foo() 的调用是这样解析的：
    在当前命名空间中查找名为 A\B\foo() 的函数
    尝试查找并调用 全局(global) 空间中的函数 foo()。

6. 在命名空间（例如A\B）内部对非限定名称或限定名称类（非完全限定名称）的调用是在运行时解析的。下面是调用 new C() 及 new D\E() 的解析过程： new C()的解析:
    在当前命名空间中查找A\B\C类。
    尝试自动装载类A\B\C。
new D\E()的解析:
    在类名称前面加上当前命名空间名称变成：A\B\D\E，然后查找该类。
    尝试自动装载类 A\B\D\E。
为了引用全局命名空间中的全局类，必须使用完全限定名称 new \C()。

```php
namespace A;
use B\D, C\E as F;

// 函数调用

foo();      // 首先尝试调用定义在命名空间"A"中的函数foo()
            // 再尝试调用全局函数 "foo"

\foo();     // 调用全局空间函数 "foo" 

my\foo();   // 调用定义在命名空间"A\my"中函数 "foo" 

F();        // 首先尝试调用定义在命名空间"A"中的函数 "F" 
            // 再尝试调用全局函数 "F"

// 类引用

new B();    // 创建命名空间 "A" 中定义的类 "B" 的一个对象
            // 如果未找到，则尝试自动装载类 "A\B"

new D();    // 使用导入规则，创建命名空间 "B" 中定义的类 "D" 的一个对象
            // 如果未找到，则尝试自动装载类 "B\D"

new F();    // 使用导入规则，创建命名空间 "C" 中定义的类 "E" 的一个对象
            // 如果未找到，则尝试自动装载类 "C\E"

new \B();   // 创建定义在全局空间中的类 "B" 的一个对象
            // 如果未发现，则尝试自动装载类 "B"

new \D();   // 创建定义在全局空间中的类 "D" 的一个对象
            // 如果未发现，则尝试自动装载类 "D"

new \F();   // 创建定义在全局空间中的类 "F" 的一个对象
            // 如果未发现，则尝试自动装载类 "F"

// 调用另一个命名空间中的静态方法或命名空间函数

B\foo();    // 调用命名空间 "A\B" 中函数 "foo"

B::foo();   // 调用命名空间 "A" 中定义的类 "B" 的 "foo" 方法
            // 如果未找到类 "A\B" ，则尝试自动装载类 "A\B"

D::foo();   // 使用导入规则，调用命名空间 "B" 中定义的类 "D" 的 "foo" 方法
            // 如果类 "B\D" 未找到，则尝试自动装载类 "B\D"

\B\foo();   // 调用命名空间 "B" 中的函数 "foo"

\B::foo();  // 调用全局空间中的类 "B" 的 "foo" 方法
            // 如果类 "B" 未找到，则尝试自动装载类 "B"

// 当前命名空间中的静态方法或函数

A\B::foo();   // 调用命名空间 "A\A" 中定义的类 "B" 的 "foo" 方法
              // 如果类 "A\A\B" 未找到，则尝试自动装载类 "A\A\B"

\A\B::foo();  // 调用命名空间 "A\B" 中定义的类 "B" 的 "foo" 方法
              // 如果类 "A\B" 未找到，则尝试自动装载类 "A\B"

```

### PHP 对象

对象的主要三个特性：

    对象的行为：可以对 对象施加那些操作，开灯，关灯就是行为。
    对象的形态：当施加那些方法是对象如何响应，颜色，尺寸，外型。
    对象的表示：对象的表示就相当于身份证，具体区分在相同的行为与状态下有什么不同。

`类` − 定义了一件事物的抽象特点。类的定义包含了数据的形式以及对数据的操作。

`对象` − 是类的实例。

`成员变量` − 定义在类内部的变量。该变量的值对外是不可见的，但是可以通过成员函数访问，在类被实例化为对象后，该变量即可称为对象的属性。

`成员函数` − 定义在类的内部，可用于访问对象的数据。

`继承` − 继承性是子类自动共享父类数据结构和方法的机制，这是类之间的一种关系。在定义和实现一个类的时候，可以在一个已经存在的类的基础之上来进行，把这个已经存在的类所定义的内容作为自己的内容，并加入若干新的内容。

`父类` − 一个类被其他类继承，可将该类称为父类，或基类，或超类。

`子类` − 一个类继承其他类称为子类，也可称为派生类。

`多态` − 多态性是指相同的函数或方法可作用于多种类型的对象上并获得不同的结果。不同的对象，收到同一消息可以产生不同的结果，这种现象称为多态性。

`重载` − 简单说，就是函数或者方法有同样的名称，但是参数列表不相同的情形，这样的同名不同参数的函数或者方法之间，互相称之为重载函数或者方法。

`抽象性` − 抽象性是指将具有一致的数据结构（属性）和行为（操作）的对象抽象成类。一个类就是这样一种抽象，它反映了与应用有关的重要性质，而忽略其他一些无关内容。任何类的划分都是主观的，但必须与具体的应用有关。

`封装` − 封装是指将现实世界中存在的某个客体的属性与行为绑定在一起，并放置在一个逻辑单元内。

`构造函数` − 主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中。

`析构函数` − 析构函数(destructor) 与构造函数相反，当对象结束其生命周期时（例如对象所在的函数已调用完毕），系统自动执行析构函数。析构函数往往用来做"清理善后" 的工作（例如在建立对象时用new开辟了一片内存空间，应在退出前在析构函数中用delete释放）。

```php
<?php
/*
类使用 class 关键字后加上类名定义。
类名后的一对大括号({})内可以定义变量和方法。
类的变量使用 var 来声明, 变量也可以初始化值。
函数定义类似 PHP 函数的定义，但函数只能通过该类及其实例化的对象访问。
*/
class Site {
  /* 成员变量 */
  var $url;
  var $title;

  /* 成员函数 */
  function setUrl($par){
     $this->url = $par;
  }

  function getUrl(){
     echo $this->url . PHP_EOL; // 变量 $this 代表自身的对象。 PHP_EOL 为换行符。
  }

  function setTitle($par){
     $this->title = $par;
  }

  function getTitle(){
     echo $this->title . PHP_EOL;
  }

  // 构造函数
  function __construct( $par1, $par2 ) {
      print "构造函数\n";
      $this->url = $par1;
      $this->title = $par2;
  }
  // 析构函数
  function __destruct() {
      print "销毁 " . $this->name . "\n";
  }
}

$newObj = new Site;
$newObj->setTitle("hhhhhhhhh");
$newObj->getTitle();

```

#### PHP 继承

```php
<?php
// 继承，PHP 使用关键字 extends 来继承一个类，PHP 不支持多继承
class Child extends Parent {
   // 代码部分
}

// 方法重写，如果从父类继承的方法不能满足子类的需求，可以对其进行改写，这个过程叫方法的覆盖
function getUrl() {
   echo $this->url . PHP_EOL;
   return $this->url;
}

function getTitle(){
   echo $this->title . PHP_EOL;
   return $this->title;
}

// 访问控制
/*
PHP 对属性或方法的访问控制，是通过在前面添加关键字 public（公有），protected（受保护）或 private（私有）来实现的。

public（公有）：公有的类成员可以在任何地方被访问。
protected（受保护）：受保护的类成员则可以被其自身以及其子类和父类访问。
private（私有）：私有的类成员则只能被其定义所在的类访问。
*/

// 属性的访问控制，类属性必须定义为公有，受保护，私有之一。如果用 var 定义，则被视为公有。

class MyClass
{
    public $public = 'Public';
    protected $protected = 'Protected';
    private $private = 'Private';
    // 声明一个公有的方法
    public function MyPublic() { }

    // 声明一个受保护的方法
    protected function MyProtected() { }

    // 声明一个私有的方法
    private function MyPrivate() { }

    // 此方法为公有
    function Foo()
    {
        $this->MyPublic();
        $this->MyProtected();
        $this->MyPrivate();
    }
    function printHello()
    {
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}

$obj = new MyClass();
echo $obj->public; // 这行能被正常执行
echo $obj->protected; // 这行会产生一个致命错误
echo $obj->private; // 这行也会产生一个致命错误
$obj->printHello(); // 输出 Public、Protected 和 Private

class MyClass2 extends MyClass
{
    // 可以对 public 和 protected 进行重定义，但 private 而不能
    protected $protected = 'Protected2';

    function printHello()
    {
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}

$obj2 = new MyClass2();
echo $obj2->public; // 这行能被正常执行
echo $obj2->private; // 未定义 private
echo $obj2->protected; // 这行会产生一个致命错误
$obj2->printHello(); // 输出 Public、Protected2 和 Undefined

```

#### PHP 接口

```php
<?php
// 声明一个'iTemplate'接口
interface iTemplate
{
    public function setVariable($name, $var);
    public function getHtml($template);
}

// 实现接口
class Template implements iTemplate
{
    private $vars = array();

    public function setVariable($name, $var)
    {
        $this->vars[$name] = $var;
    }

    public function getHtml($template)
    {
        foreach($this->vars as $name => $value) {
            $template = str_replace('{' . $name . '}', $value, $template);
        }

        return $template;
    }
}

```

可以把在类中始终保持不变的值定义为常量。在定义和使用常量的时候不需要使用 $ 符号。常量的值必须是一个定值，不能是变量，类属性，数学运算的结果或函数调用。

#### 抽象类

任何一个类，如果它里面至少有一个方法是被声明为抽象的，那么这个类就必须被声明为抽象的。

定义为抽象的类不能被实例化。

被定义为抽象的方法只是声明了其调用方式（参数），不能定义其具体的功能实现。

继承一个抽象类的时候，子类必须定义父类中的所有抽象方法；另外，这些方法的访问控制必须和父类中一样（或者更为宽松）。例如某个抽象方法被声明为受保护的，那么子类中实现的方法就应该声明为受保护的或者公有的，而不能定义为私有的。此外方法的调用方式必须匹配，即类型和所需参数数量必须一致。例如，子类定义了一个可选参数，而父类抽象方法的声明里没有，则两者的声明并无冲突。

```php
<?php
abstract class AbstractClass
{
 // 强制要求子类定义这些方法
    abstract protected function getValue();
    abstract protected function prefixValue($prefix);

    // 普通方法（非抽象方法）
    public function printOut() {
        print $this->getValue() . PHP_EOL;
    }
}

class ConcreteClass1 extends AbstractClass
{
    protected function getValue() {
        return "ConcreteClass1";
    }

    public function prefixValue($prefix) {
        return "{$prefix}ConcreteClass1";
    }
}

class ConcreteClass2 extends AbstractClass
{
    public function getValue() {
        return "ConcreteClass2";
    }

    public function prefixValue($prefix) {
        return "{$prefix}ConcreteClass2";
    }
}

$class1 = new ConcreteClass1;
$class1->printOut();
echo $class1->prefixValue('FOO_') . PHP_EOL;

$class2 = new ConcreteClass2;
$class2->printOut();
echo $class2->prefixValue('FOO_') . PHP_EOL;
?>

```

声明类属性或方法为 static(静态)，就可以不实例化类而直接访问。静态属性不能通过一个类已实例化的对象来访问（但静态方法可以）。

由于静态方法不需要通过对象即可调用，所以伪变量 $this 在静态方法中不可用。 静态属性不可以由对象通过 -> 操作符来访问。

PHP 5 新增了一个 final 关键字。如果父类中的方法被声明为 final，则子类无法覆盖该方法。如果一个类被声明为 final，则不能被继承。

```php
<?php
class Foo {
  public static $my_static = 'foo';

  public function staticValue() {
     return self::$my_static;
  }
}

print Foo::$my_static . PHP_EOL;
$foo = new Foo();

print $foo->staticValue() . PHP_EOL;

class BaseClass {
   public function test() {
       echo "BaseClass::test() called" . PHP_EOL;
   }

   final public function moreTesting() {
       echo "BaseClass::moreTesting() called"  . PHP_EOL;
   }
}

class ChildClass extends BaseClass {
   public function moreTesting() {
       echo "ChildClass::moreTesting() called"  . PHP_EOL;
   }
}
// 报错信息 Fatal error: Cannot override final method BaseClass::moreTesting()

```

PHP 不会在子类的构造方法中自动的调用父类的构造方法。要执行父类的构造方法，需要在子类的构造方法中调用 `parent::__construct()` 。

### PHP 表单

当处理 HTML 表单时，PHP 能把来自 HTML 页面中的表单元素自动变成可供 PHP 脚本使用。

```php
// php 获取input框值
<form action="test.php" method="post">
    名字: <input type="text" name="fname">
    年龄: <input type="text" name="age">
    <input type="submit" value="提交">
</form>

欢迎<?php echo $_POST["fname"]; ?>!<br>
你的年龄是 <?php echo $_POST["age"]; ?>  岁。

// PHP 获取下拉菜单的数据
// 单选
<form action="XXX.php" method="get">
    <select name="q">
        <option value="">选择一个站点:</option>
        <option value="RUNOOB">Runoob</option>
        <option value="GOOGLE">Google</option>
        <option value="TAOBAO">Taobao</option>
    </select>
    <input type="submit" value="提交">
</form>

$q = isset($_GET['q']) ? htmlspecialchars($_GET['qq']) : '';

// 多选
<form action="" method="post">
    <select multiple="multiple" name="q[]">
        <option value="">选择一个站点:</option>
        <option value="RUNOOB">Runoob</option>
        <option value="GOOGLE">Google</option>
        <option value="TAOBAO">Taobao</option>
    </select>
    <input type="submit" value="提交">
</form>

<form action="" method="post">
    <input type="checkbox" name="q[]" value="RUNOOB"> Runoob<br>
    <input type="checkbox" name="q[]" value="GOOGLE"> Google<br>
    <input type="checkbox" name="q[]" value="TAOBAO"> Taobao<br>
    <input type="submit" value="提交">
</form>

$q = isset($_POST['q']) ? $_POST['q'] : '';
if(is_array($q)) {
    $sites = array(
            'RUNOOB' => '菜鸟教程: http://www.runoob.com',
            'GOOGLE' => 'Google 搜索: http://www.google.com',
            'TAOBAO' => '淘宝: http://www.taobao.com',
    );
    foreach($q as $val) {
        // PHP_EOL 为常量，用于换行
        echo $sites[$val] . PHP_EOL;
    }
}

// 单选按钮表单
// PHP 单选按钮表单中 name 属性的值是一致的，value 值是不同的

/*
应该在任何可能的时候对用户输入进行验证（通过客户端脚本）。浏览器验证速度更快，并且可以减轻服务器的负载。

如果用户输入需要插入数据库，您应该考虑使用服务器验证。在服务器验证表单的一种好的方式是，把表单传给它自己，而不是跳转到不同的页面。这样用户就可以在同一张表单页面得到错误信息。用户也就更容易发现错误了。
*/

```





















