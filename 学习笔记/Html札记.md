# Html

## 基础

HTML 是用来描述网页的一种语言。
HTML 指的是超文本标记语言: HyperText Markup Language
HTML 不是一种编程语言，而是一种标记语言
标记语言是一套标记标签 (markup tag)
HTML 使用标记标签来描述网页
HTML 文档包含了HTML 标签及文本内容
HTML文档也叫做 web 页面

只有在MySQL中可以使用"utf-8"的别名"utf8"，但是在其他地方一律使用大写"UTF-8"。

`<!DOCTYPE>` 声明有助于浏览器中正确显示网页。
网络上有很多不同的文件，如果能够正确声明HTML的版本，浏览器就能正确显示网页内容。

> 注释： 请始终将正斜杠添加到子文件夹。假如这样书写链接：`href="http://www.runoob.com/html"`，就会向服务器产生两次 HTTP 请求。这是因为服务器会添加正斜杠到这个地址，然后创建一个新的请求，就像这样：`href="http://www.runoob.com/html/"`。

Tip: 使用 CSS 最大的好处是，如果把 CSS 代码存放到外部样式表中，那么站点会更易于维护。通过编辑单一的文件，就可以改变所有页面的布局。

Tip: 由于创建高级的布局非常耗时，使用模板是一个快速的选项。通过搜索引擎可以找到很多免费的网站模板（您可以使用这些预先构建好的网站布局，并优化它们）。

### HTML 全局属性

属性|	描述
---|---
accesskey|	设置访问元素的键盘快捷键。
class|	规定元素的类名（classname）
contenteditableNew|	规定是否可编辑元素的内容。
contextmenuNew|	指定一个元素的上下文菜单。当用户右击该元素，出现上下文菜单
data-*New|	用于存储页面的自定义数据
dir|	设置元素中内容的文本方向。
draggableNew|	指定某个元素是否可以拖动
dropzoneNew|	指定是否将数据复制，移动，或链接，或删除
hiddenNew|	`hidden` 属性规定对元素进行隐藏。
id|	规定元素的唯一 id
lang|	设置元素中内容的语言代码。
spellcheckNew|	检测元素是否拼写错误
style|	规定元素的行内样式（`inline style`）
tabindex|	设置元素的 Tab 键控制次序。
title|	规定元素的额外信息（可在工具提示中显示）
translateNew|	指定是否一个元素的值在页面载入时是否需要翻译

### HTML 全局事件属性

属性|	值|	描述
---|---|---
onafterprintNew|	script|	在打印文档之后运行脚本
onbeforeprintNew|	script|	在文档打印之前运行脚本
onbeforeonloadNew|	script|	在文档加载之前运行脚本
onblur|	script|	当窗口失去焦点时运行脚本
onerrorNew|	script|	当错误发生时运行脚本
onfocus|	script|	当窗口获得焦点时运行脚本
onhaschangeNew|	script|	当文档改变时运行脚本
onload|	script|	当文档加载时运行脚本
onmessageNew|	script|	当触发消息时运行脚本
onofflineNew|	script|	当文档离线时运行脚本
ononlineNew|	script|	当文档上线时运行脚本
onpagehideNew|	script|	当窗口隐藏时运行脚本
onpageshowNew|	script|	当窗口可见时运行脚本
onpopstateNew|	script|	当窗口历史记录改变时运行脚本
onredoNew|	script|	当文档执行再执行操作（redo）时运行脚本
onresizeNew|	script|	当调整窗口大小时运行脚本
onstorageNew|	script|	当 Web Storage 区域更新时（存储空间中的数据发生变化时）运行脚本
onundoNew|	script|	当文档执行撤销时运行脚本
onunloadNew|	script|	当用户离开文档时运行脚本

### 事件

#### 表单事件(Form Events)

表单事件在HTML表单中触发 (适用于所有 HTML 元素, 但该HTML元素需在form表单内):

属性|	值|	描述
---|---|---
onblur|	script|	当元素失去焦点时运行脚本
onchange|	script|	当元素改变时运行脚本
oncontextmenuNew|	script|	当触发上下文菜单时运行脚本
onfocus|	script|	当元素获得焦点时运行脚本
onformchangeNew|	script|	当表单改变时运行脚本
onforminputNew|	script|	当表单获得用户输入时运行脚本
oninputNew|	script|	当元素获得用户输入时运行脚本
oninvalidNew|	script|	当元素无效时运行脚本
onreset|	script|	当表单重置时运行脚本。HTML 5 不支持。
onselect|	script|	当选取元素时运行脚本
onsubmit|	script|	当提交表单时运行脚本

#### 键盘事件（Keyboard Events）

属性|	值|	描述
---|---|---
onkeydown|	script|	当按下按键时运行脚本
onkeypress|	script|	当按下并松开按键时运行脚本
onkeyup|	script|	当松开按键时运行脚本

#### 鼠标事件（Mouse Events）

通过鼠标触发事件, 类似用户的行为:

属性|	值|	描述
---|---|---
onclick|	script|	当单击鼠标时运行脚本
ondblclick|	script|	当双击鼠标时运行脚本
ondragNew|	script|	当拖动元素时运行脚本
ondragendNew|	script|	当拖动操作结束时运行脚本
ondragenterNew|	script|	当元素被拖动至有效的拖放目标时运行脚本
ondragleaveNew|	script|	当元素离开有效拖放目标时运行脚本
ondragoverNew|	script|	当元素被拖动至有效拖放目标上方时运行脚本
ondragstartNew|	script|	当拖动操作开始时运行脚本
ondropNew|	script|	当被拖动元素正在被拖放时运行脚本
onmousedown|	script|	当按下鼠标按钮时运行脚本
onmousemove|	script|	当鼠标指针移动时运行脚本
onmouseout|	script|	当鼠标指针移出元素时运行脚本
onmouseover| script|	当鼠标指针移至元素之上时运行脚本
onmouseup|	script|	当松开鼠标按钮时运行脚本
onmousewheelNew	|script|	当转动鼠标滚轮时运行脚本
onscrollNew	|script|	当滚动元素的滚动条时运行脚本

属性|	值|	描述
---|---|---
onshowNew|	script|	当 `<menu>` 元素在上下文显示时触发
ontoggleNew|	script|	当用户打开或关闭 `<details>` 元素时触发

### HTML5 `<canvas>`

```js
// 定义用红色填充的矩形：
var c = document.getElementById("myCanvas");
var ctx = c.getContext();
ctx.fillStyle="#FF0000";
ctx.fillRect(20, 20, 150, 100);

// 定义从上到下的渐变，作为矩形的填充样式：

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var my_gradient=ctx.createLinearGradient(0,0,170,0);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(1,"white");
ctx.fillStyle=my_gradient;
ctx.fillRect(20,20,150,100);

// 定义从左到右的渐变，作为矩形的填充样式：
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var my_gradient=ctx.createLinearGradient(0,0,170,0);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(1,"white");
ctx.fillStyle=my_gradient;
ctx.fillRect(20,20,150,100);

// 定义从黑到红到白的的渐变，作为矩形的填充样式：
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var my_gradient=ctx.createLinearGradient(0,0,170,0);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(0.5,"red");
my_gradient.addColorStop(1,"white");
ctx.fillStyle=my_gradient;
ctx.fillRect(20,20,150,100);

// 使用图像来填充绘图：
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById("lamp");
var pat=ctx.createPattern(img,"repeat");
ctx.rect(0,0,150,100);
ctx.fillStyle=pat;
ctx.fill();
```

#### 其他标签

```html
<!-- 
1. `noscript` 
noscript 元素用来定义在脚本未被执行时的替代内容（文本）。
此标签可被用于可识别 `<noscript>` 标签但无法支持其中的脚本的浏览器。

提示：如果浏览器支持脚本，那么它不会显示出 noscript 元素中的文本。

注释：无法识别 `<script>` 标签的浏览器会把标签的内容显示到页面上。为了避免浏览器这样做，您应当在注释标签中隐藏脚本。老式的（无法识别 `<script>` 标签的）浏览器会忽略注释，这样就不会把标签的内容写到页面上，而新式的浏览器则懂得执行这些脚本，即使它们被包围在注释标签中！

-->
<script>
document.write("Hello World!")
</script>
<noscript>抱歉，你的浏览器不支持 JavaScript!</noscript>

<script>
<!--
function displayMsg(){
  alert("Hello World!")
}
//-->
</script>

<!-- 
2. <meter> 
标签定义度量衡。仅用于已知最大和最小值的度量。比如：磁盘使用情况，查询结果的相关性等。
 -->
<meter value="2" min="0" max="10">2 out of 10</meter><br>
<meter value="0.6">60%</meter>

<!-- 
3. <progress>
提示：请将 <progress> 标签与 JavaScript 一起使用来显示任务的进度。
注释：<progress> 标签不适合用来表示度量衡（例如，磁盘空间使用情况或相关的查询结果）。表示度量衡，请使用 <meter> 标签代替。
 -->
<progress value="22" max="100"></progress>

<!-- 
4. <map>
<map> 标签用于客户端图像映射。图像映射指带有可点击区域的一幅图像。
<img>中的 usemap 属性可引用 <map> 中的 id 或 name 属性（取决于浏览器），所以我们应同时向 <map> 添加 id 和 name 属性。
area 元素永远嵌套在 map 元素内部。area 元素可定义图像映射中的区域。

在 HTML5 中, 如果 id 属性在<map> 标签中指定, 则你必须同样指定 name 属性。
 -->
<img src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
  <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
  <area shape="circle" coords="124,58,8" href="venus.htm" alt="Venus">
</map>

<!-- 
5. <mark>
部分文本高亮显示：
Internet Explorer 9+、Firefox、Opera、Chrome 和 Safari 支持 <mark> 标签。
注意：Internet Explorer 8 及更早版本不支持 <mark> 标签
 -->
<p>Do not forget to buy <mark>milk</mark> today.</p> 

<!-- 
6. <article>
<article> 标签定义独立的内容。
<article> 标签定义的内容本身必须是有意义的且必须是独立于文档的其余部分。
<article> 的潜在来源：
    论坛帖子
    博客文章
    新闻故事
    评论    
 -->
<article>
  <h1>Internet Explorer 9</h1>
  <p> Windows Internet Explorer 9(缩写为 IE9 )在2011年3月14日21:00 发布。</p>
</article>

<!-- 
7. <bdi> 元素 (双向隔离元素) 
bdi 指的是 bidi 隔离（Bi-directional Isolation）。
<bdi> 标签允许您设置一段文本，使其脱离其父元素的文本方向设置。
在发布用户评论或其他您无法完全控制的内容时，该标签很有用。

会隔离可能以不同方向进行格式化的外部文本。
当不知道是从什么方向嵌入文本，如来自于数据库的文本（有起数据库的文本方向）的时候，该元素是十分有用的。
注意：尽管同样的显示效果可以通过使用CSS规则 unicode-bidi：隔离<span>或者其他文本格式化元素，但语义信息只能通过<bdi>元素传递。特别是，当浏览器允许忽略CSS样式时，在这种情况下，使用<bdi>仍然可以保证文本正确显示，而使用CSS样式来传递语义时就显得毫无用处。
 -->
<p dir="ltr">This arabic word <bdi>ARABIC_PLACEHOLDER</bdi> is automatically displayed right-to-left.</p>
结果：
This arabic word REDLOHECALP_CIBARA is automatically displayed right-to-left.

<!-- 
8. <colgroup> 和 <col> 标签为表格中的三个列设置了背景色：    
属性
span	number	规定列组应该横跨的列数。
 -->
<table border="1">
  <colgroup>
    <col span="2" style="background-color:red">
    <col style="background-color:yellow">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
</table>

<!-- 
9. <datalist>
IE 10、Firefox、Opera 和 Chrome 支持 <datalist> 标签。
注释：IE 9 和更早版本的 IE 浏览器 以及 Safari 不支持 <datalist> 标签。

<datalist> 标签规定了 <input> 元素可能的选项列表。
<datalist> 标签被用来在为 <input> 元素提供"自动完成"的特性。用户能看到一个下拉列表，里边的选项是预先定义好的，将作为用户的输入数据。
 -->
<input list="browsers">

<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>

<!-- 
10.  <del> 和 <ins>  
<del> 和 <ins> 一起使用，描述文档中的更新和修正。浏览器通常会在已删除文本上添加一条删除线，在新插入文本下添加一条下划线。
 -->
<p>My favorite color is <del>blue</del> <ins>red</ins>!</p>

<!-- 
11. <details>
<details> 标签规定了用户可见的或者隐藏的需求的补充细节。
<details> 标签用来供用户开启关闭的交互式控件。任何形式的内容都能被放在 <details> 标签里边。
<details> 元素的内容对用户是不可见的，除非设置了 open 属性。

与 <summary> 标签配合使用可以为 details 定义标题。标题是可见的，用户点击标题时，会显示出 details。
属性
openNew	open	规定 details 是否可见。
 -->
<details>
<summary>Copyright 1999-2011.</summary>
<p> - by Refsnes Data. All Rights Reserved.</p>
<p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
</details>

<!-- 
12. <nav>  
<nav> 标签定义导航链接的部分。
并不是所有的 HTML 文档都要使用到 <nav> 元素。<nav> 元素只是作为标注一个导航链接的区域。
在不同设备上（手机或者PC）可以制定导航链接是否显示，以适应不同屏幕的需求。
 -->
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>

<!-- 
13. <meta> 
<meta> 标签提供了 HTML 文档的元数据。元数据不会显示在客户端，但是会被浏览器解析。
META元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者及其他元数据。
元数据可以被使用浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 Web 服务调用。

charsetNew	character_set	    定义文档的字符编码。
content	    text	            定义与 http-equiv 或 name 属性相关的元信息。
http-equiv	content-type
            default-style
            refresh	            把 content 属性关联到 HTTP 头部。
name	    application-name
            author
            description
            generator
            keywords	        把 content 属性关联到一个名称。
 -->
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->

<!-- 
14. <wbr> (Word Break Opportunity) 
标签规定在文本中的何处适合添加换行符。
提示：如果单词太长，或者您担心浏览器会在错误的位置换行，那么您可以使用 <wbr> 元素来添加 Word Break Opportunity（单词换行时机）。    
 -->
<p>学习 AJAX ,您必须熟悉 <wbr>Http<wbr>Request 对象。</p>

<!-- 
15.  HTML 空元素
没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的。
即使 `<br>` 在所有浏览器中都是有效的，但使用 `<br />` 其实是更长远的保障。

当显示页面时，浏览器会移除源代码中多余的空格和空行。所有连续的空格或空行都会被算作一个空格。需要注意的是，HTML 代码中的所有连续的空行（换行）也被显示为一个空格。
 -->

<!-- 
16. HTML 链接- id 属性
id属性可用于创建在一个HTML文档书签标记。
提示: 书签是不以任何特殊的方式显示，在HTML文档中是不显示的，所以对于读者来说是隐藏的。
 -->
<a id="tips">有用的提示部分</a>
在HTML文档中创建一个链接到"有用的提示部分(id="tips"）"：
<a href="#tips">访问有用的提示部分</a>
或者，从另一个页面创建一个链接到"有用的提示部分(id="tips"）"：
<a href="http://www.runoob.com/html/html-links.html#tips">访问有用的提示部分</a>

```

文本显示为单行，超过部分隐藏并使用省略号

```css
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;

/* 使用 display:-webkit-box; 让文本显示为多行(只有-webkit内核才有作用)*/
overflow:hidden;
text-overflow:ellipsis;
display:-webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient:vertical;
width:100px;
```

#### ASCII 字符集

ASCII ，它的全称是"美国信息交换标准代码"。它设计于60年代早期，是计算机和诸如打印机、磁带驱动器之类的硬件设备的标准字符集。
ASCII 是 7 比特字符集，包含了 128 个不同的字符值。
ASCII 支持 0-9 的数字，A-Z大写和小写英文字母，以及一些特殊字符。
被广泛使用于现代计算机、HTML和因特网上的字符集都是基于 ASCII 。

### HTTP 状态消息

当浏览器从 web 服务器请求服务时，可能会发生错误。
以下列举了有可能会返回的一系列 HTTP 状态消息：

#### 1xx: 信息

消息：|	描述：
---|---
`100 Continue`|	`服务器仅接收到部分请求，但是一旦服务器并没有拒绝该请求，客户端应该继续发送其余的请求。`
`101 Switching Protocols`|	`服务器转换协议：服务器将遵从客户的请求转换到另外一种协议。`
`103 Checkpoint`|	`用于 PUT 或者 POST 请求恢复失败时的恢复请求建议。`

#### 2xx: 成功

消息：|	描述：
---|---
`200 OK`|	`请求成功（这是对HTTP请求成功的标准应答。）`
`201 Created`	|`请求被创建完成，同时新的资源被创建。`
202 Accepted|	供处理的请求已被接受，但是处理未完成。
203 Non-Authoritative Information|	请求已经被成功处理，但是一些应答头可能不正确，因为使用的是其他文档的拷贝。
`204 No Content`|	`请求已经被成功处理，但是没有返回新文档。浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而Servlet可以确定用户文档足够新，这个状态代码是很有用的。`
205 Reset Content|	请求已经被成功处理，但是没有返回新文档。但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容。
206 Partial Content|	客户发送了一个带有Range头的GET请求，服务器完成了它。

#### 3xx: 重定向

消息：|描述：
---|---
`300 Multiple Choices`|	`多重选择。链接列表。用户可以选择某链接到达目的地。最多允许五个地址。`
`301 Moved Permanently`|	`所请求的页面已经转移至新的 URL 。`
`302 Found`|	`所请求的页面已经临时转移至新的 URL 。`
303 See Other|	所请求的页面可在别的 URL 下被找到。
`304 Not Modified`|	`未按预期修改文档。客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用。`
305 Use Proxy|	客户请求的文档应该通过Location头所指明的代理服务器提取。
306 Switch Proxy|	目前已不再使用，但是代码依然被保留。
307 Temporary Redirect|	被请求的页面已经临时移至新的 URL 。
308 Resume Incomplete|	用于 PUT 或者 POST 请求恢复失败时的恢复请求建议。

#### 4xx: 客户端错误

消息：|	描述：
---|---
`400 Bad Request`|	`因为语法错误，服务器未能理解请求。`
`401 Unauthorized`|	`合法请求，但对被请求页面的访问被禁止。因为被请求的页面需要身份验证，客户端没有提供或者身份验证失败。`
402 Payment Required|	此代码尚无法使用。
`403 Forbidden`|	`合法请求，但对被请求页面的访问被禁止。`
`404 Not Found`|	`服务器无法找到被请求的页面。`
`405 Method Not Allowed`|	`请求中指定的方法不被允许。`
`406 Not Acceptable`|	`服务器生成的响应无法被客户端所接受。`
407 Proxy Authentication Required|	用户必须首先使用代理服务器进行验证，这样请求才会被处理。
`408 Request Timeout|`	`请求超出了服务器的等待时间。`
`409 Conflict`|	`由于冲突，请求无法被完成。`
410 Gone|	被请求的页面不可用。
411 Length Required|	"Content-Length" 未被定义。如果无此内容，服务器不会接受请求。
412 Precondition Failed|	请求中的前提条件被服务器评估为失败。
`413 Request Entity Too Large`|	`由于所请求的实体太大，服务器不会接受请求。`
`414 Request-URI Too Long`|	`由于 URL 太长，服务器不会接受请求。当 POST 请求被转换为带有很长的查询信息的 GET 请求时，就会发生这种情况。`
415 Unsupported Media Type|	由于媒介类型不被支持，服务器不会接受请求。
416 Requested Range Not Satisfiable|	客户端请求部分文档，但是服务器不能提供被请求的部分。
417 Expectation Failed|	服务器不能满足客户在请求中指定的请求头。

#### 5xx: 服务器错误

消息：|	描述：
---|---
`500 Internal Server Error`|	`请求未完成。服务器遇到不可预知的情况。`
501 Not Implemented|	请求未完成。服务器不支持所请求的功能，或者服务器无法完成请求。
`502 Bad Gateway`|	`请求未完成。服务器充当网关或者代理的角色时，从上游服务器收到一个无效的响应。`
`503 Service Unavailable`| `服务器当前不可用（过载或者宕机）。`
`504 Gateway Timeout`|	`网关超时。服务器充当网关或者代理的角色时，未能从上游服务器收到一个及时的响应。`
`505 HTTP Version Not Supported`|	`服务器不支持请求中指明的HTTP协议版本。`
511 Network Authentication Required|	用户需要提供身份验证来获取网络访问入口。

### HTTP 方法：GET 对比 POST

两种最常用的 HTTP 方法是：GET 和 POST。

超文本传输协议（HTTP）的设计目的是保证客户端与服务器之间的通信。HTTP 的工作方式是客户端与服务器之间的请求-应答协议。

web 浏览器可能是客户端，而计算机上的网络应用程序也可能作为服务器端。
举例：客户端（浏览器）向服务器提交 HTTP 请求；服务器向客户端返回响应。响应包含关于请求的状态信息以及可能被请求的内容。

#### 两种 HTTP 请求方法：GET 和 POST

在客户机和服务器之间进行请求-响应时，两种最常被用到的方法是：GET 和 POST。

    GET - 从指定的资源请求数据。
    POST - 向指定的资源提交要被处理的数据。

##### GET 方法

请注意，查询字符串（名称/值对）是在 GET 请求的 URL 中发送的：
`/test/demo_form.php?name1=value1&name2=value2`
有关 GET 请求的其他一些注释：

    GET 请求可被缓存
    GET 请求保留在浏览器历史记录中
    GET 请求可被收藏为书签
    GET 请求不应在处理敏感数据时使用
    GET 请求有长度限制
    GET 请求只应当用于取回数据

##### POST 方法

请注意，查询字符串（名称/值对）是在 POST 请求的 HTTP 消息主体中发送的：
`POST /test/demo_form.php HTTP/1.1`
`Host: w3cschool.cc`
`name1=value1&name2=value2`

有关 POST 请求的其他一些注释：

    POST 请求不会被缓存
    POST 请求不会保留在浏览器历史记录中
    POST 不能被收藏为书签
    POST 请求对数据长度没有要求

#### 比较 GET 与 POST

下面的表格比较了两种 HTTP 方法：GET 和 POST。

GET||	POST
---|---|---
后退按钮/刷新|	无害|	数据会被重新提交（浏览器应该告知用户数据会被重新提交）。
书签|	可收藏为书签|	不可收藏为书签
缓存|	`能被缓存`|	`不能缓存`
编码类型|	application/x-www-form-urlencoded	|application/x-www-form-urlencoded or multipart/form-data。为二进制数据使用多重编码。
历史|	`参数保留在浏览器历史中`。|	`参数不会保存在浏览器历史中`。
对数据长度的限制|	是的。当发送数据时，GET 方法向 URL 添加数据；URL 的长度是受限制的（`URL 的最大长度是 2048 个字符`）。|	无限制。
对数据类型的限制|	只允许 ASCII 字符。|	没有限制。也允许二进制数据。
安全性|	与 POST 相比，GET 的安全性较差，因为所发送的数据是 URL 的一部分。在发送密码或其他敏感信息时绝不要使用 GET ！|	POST 比 GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中。
可见性|	数据在 URL 中对所有人都是可见的。|	数据不会显示在 URL 中。

#### 其他 HTTP 请求方法

下面的表格列出了其他一些 HTTP 请求方法：

方法|	描述
---|---
HEAD|	与 GET 相同，但只返回 HTTP 报头，不返回文档主体。
PUT|	上传指定的 URI 表示。
DELETE|	删除指定资源。
OPTIONS|	返回服务器支持的 HTTP 方法。
CONNECT|	把请求连接转换到透明的 TCP/IP 通道。

#### px、em、rem区别介绍

##### PX

px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。
PX特点

1. IE无法调整那些使用px作为单位的字体大小；
2. 国外的大部分网站能够调整的原因在于其使用了em或rem作为字体单位；
3. Firefox能够调整px和em，rem，但是96%以上的中国网民使用IE浏览器(或内核)。

##### EM

em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。
EM特点

1. em的值并不是固定的；
2. em会继承父级元素的字体大小。

> 注意：任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: `1em=16px`。那么`12px=0.75em,10px=0.625em`。为了简化font-size的换算，需要在css中的body选择器中声明`Font-size=62.5%`，这就使em值变为 `16px*62.5%=10px`, 这样`12px=1.2em, 10px=1em`, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。

所以我们在写CSS的时候，需要注意两点：

1. body选择器中声明Font-size=62.5%；
2. 将你的原来的px数值除以10，然后换上em作为单位；
3. 重新计算那些被放大的字体的em数值。避免字体大小的重复声明。

也就是避免1.2 * 1.2= 1.44的现象。比如说你在#content中声明了字体大小为1.2em，那么在声明p的字体大小时就只能是1em，而不是1.2em, 因为此em非彼em，它因继承#content的字体高而变为了1em=12px。

##### REM

rem是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。

这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。

目前，除了IE8及更早版本外，所有浏览器均已支持rem。对于不支持它的浏览器，应对方法也很简单，就是多写一个绝对单位的声明。这些浏览器会忽略用rem设定的字体大小。下面就是一个例子：

```css
p {font-size:14px; font-size:.875rem;}
```

注意： 选择使用什么字体单位主要由你的项目来决定，如果你的用户群都使用最新版的浏览器，那推荐使用rem，如果要考虑兼容性，那就使用px,或者两者同时使用。

##### px 与 rem 的选择？

对于只需要适配少部分手机设备，且分辨率对页面影响不大的，使用px即可 。
对于需要适配各种移动设备，使用rem，例如只需要适配iPhone和iPad等分辨率差别比较挺大的设备。
