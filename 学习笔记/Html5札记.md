# Html5

## 基础

HTML5的设计目的是为了在移动设备上支持多媒体。

HTML5 中的一些有趣的新特性：

    用于绘画的 canvas 元素
    用于媒介回放的 video 和 audio 元素
    对本地离线存储的更好的支持
    新的特殊内容元素，比如 article、footer、header、nav、section
    新的表单控件，比如 calendar、date、time、email、url、search

`<!doctype>` 声明必须位于 HTML5 文档中的第一行,使用非常简单: `<!DOCTYPE html>`

IE9 以下版本浏览器兼容HTML5的方法，静态资源的html5shiv包。

> 引用代码必须放在 `<head>` 元素中，因为 IE 浏览器在解析 HTML5 新元素时需要先加载该文件。

```html
<!--[if lt IE 9]>
    <script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->
```

载入后，初始化新标签的CSS：

```css
/*html5*/
article,aside,dialog,footer,header,section,nav,figure,menu{display:block}
```

### 新元素

```html
<!--
1. 新多媒体元素（ IE 8 或更早版本的 IE 浏览器不支持 <audio> 标签。）
<audio>	定义音频内容, 比如音乐或其他音频流。目前，<audio> 元素支持的3种文件格式：MP3、Wav、Ogg。
属性：
autoplay	autoplay	如果出现该属性，则音频在就绪后马上播放。
controls	controls	如果出现该属性，则向用户显示音频控件（比如播放/暂停按钮）。
loop	    loop	    如果出现该属性，则每当音频结束时重新开始播放。
muted	    muted	    如果出现该属性，则音频输出为静音。
preload	    auto        规定当网页加载时，音频是否默认被加载以及如何被加载。
            metadata
            none	    
src	        URL	        规定音频文件的 URL。

<video>	定义视频（video 或者 movie）
属性同audio， 多了两个属性
poster	    URL	        规定视频正在下载时显示的图像，直到用户点击播放按钮。
height	    pixels	    设置视频播放器的高度。
width	    pixels	    设置视频播放器的宽度。

<source>为媒体元素（比如 <video> 和 <audio>）定义媒体资源。
<source> 标签允许您规定两个视频/音频文件共浏览器根据它对媒体类型或者编解码器的支持进行选择。
media	    media_query	规定媒体资源的类型，供浏览器决定是否下载。
src	        URL	        规定媒体文件的 URL。
type	    MIME_type	规定媒体资源的 MIME 类型。	

规定媒体资源的 MIME 类型。常见的 MIME 类型：
视频：
    MP4	 video/mp4
    WebM video/webm
    Ogg	 video/ogg
音频：
    MP3	audio/mpeg
    Ogg	audio/ogg
    Wav	audio/wav

<embed>	定义嵌入的内容，比如插件。所有主流浏览器都支持 <embed> 标签。<embed> 标签定义了一个容器，用来嵌入外部应用或者互动程序（插件）。
属性： 
height	    pixels	规定嵌入内容的高度。
src	        URL	规定被嵌入内容的 URL。
type	    MIME_type	规定嵌入内容的 MIME 类型。注：MIME = Multipurpose Internet Mail Extensions。
width	    pixels	规定嵌入内容的宽度。

<track>	为诸如 <video> 和 <audio> 元素之类的媒介规定外部文本轨道。IE 10、Opera 和 Chrome 浏览器支持 <track> 标签。
-->
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  您的浏览器不支持 audio 元素。
</audio>

<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    您的浏览器不支持 video 标签。
</video>

<embed src="helloworld.swf">

<video width="320" height="240" controls>
    <source src="forrest_gump.mp4" type="video/mp4">
    <source src="forrest_gump.ogg" type="video/ogg">
    <track src="subtitles_en.vtt" kind="subtitles" srclang="en"
    label="English">
    <track src="subtitles_no.vtt" kind="subtitles" srclang="no"
    label="Norwegian">
</video>

<!-- 
2.新表单元素
<datalist>	定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。被用来在为 <input> 元素提供"自动完成"的特性。用户能看到一个下拉列表，里边的选项是预先定义好的，将作为用户的输入数据。
<output>	定义不同类型的输出，比如脚本的输出。 
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
3. 新的语义和结构元素
HTML5提供了新的元素来创建更好的页面结构：
标签	描述
<article>	定义页面独立的内容区域。
<aside>	定义页面的侧边栏内容。
<bdi>	允许您设置一段文本，使其脱离其父元素的文本方向设置。
<command>	定义命令按钮，比如单选按钮、复选框或按钮
<details>	用于描述文档或文档某个部分的细节
<dialog>	定义对话框，比如提示框，目前，只有 Chrome 和 Safari 6 支持 <dialog> 标签。
<summary>	标签包含 details 元素的标题，标签为 <details> 元素定义一个可见的标题。 当用户点击标题时会显示出详细信息。
<figure>	规定独立的流内容（图像、图表、照片、代码等等）。
<figcaption>	定义 <figure> 元素的标题
<footer>	定义 section 或 document 的页脚。
<header>	定义了文档的头部区域
<mark>	定义带有记号的文本。
<meter>	定义度量衡。仅用于已知最大和最小值的度量。
<nav>	定义导航链接的部分。
<progress>	定义任何类型的任务的进度。
    max	    number	规定需要完成的值。
    value	number	规定进程的当前值。
<ruby>	定义 ruby 注释（中文注音或字符）。IE 9+、Firefox、Opera、Chrome 和 Safari 支持 <ruby> 标签。注释：IE 8 或更早版本的 IE 浏览器不支持 <ruby> 标签。
<rt>	定义字符（中文注音或字符）的解释或发音。
<rp>	在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。
<section>	定义文档中的节（section、区段）。
<time>	定义日期或时间。
<time datetime="YYYY-MM-DDThh:mm:ssTZD">
    YYYY-MM-DDThh:mm:ssTZD	
    日期或时间。下面解释了其中的成分：
    YYYY - 年 (例如 2011)
    MM - 月 (例如 01 表示 January)
    DD - 天 (例如 08)
    T - 必需的分隔符，若规定时间的话
    hh - 时 (例如 22 表示 10.00pm)
    mm - 分 (例如 55)
    ss - 秒 (例如 03)
    TZD - 时区标识符 (Z 表示祖鲁，也称为格林威治时间)
<wbr>	规定在文本中的何处适合添加换行符。 如果单词太长，或者您担心浏览器会在错误的位置换行，那么您可以使用 <wbr> 元素来添加 Word Break Opportunity（单词换行时机）
-->
<article>
    <header>
        <h1>Internet Explorer 9</h1>
        <p><time pubdate datetime="2011-03-15"></time></p>
    </header>
    <p> Windows Internet Explorer 9(缩写为 IE9 )是在2011年3月14日21:00发布的</p>
</article>

<aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>

<details>
<summary>Copyright 1999-2011.</summary>
<p> - by Refsnes Data. All Rights Reserved.</p>
<p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
</details>

<figure>
  <img src="img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228">
</figure>

<footer>
  <p>Posted by: Hege Refsnes</p>
  <p><time pubdate datetime="2012-03-01"></time></p>
</footer>

<p>Do not forget to buy <mark>milk</mark> today.</p>

<meter value="2" min="0" max="10">2 out of 10</meter><br>
<meter value="0.6">60%</meter>

<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>

<progress value="22" max="100"></progress>

<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>

<section>
<h1>WWF</h1>
<p>The World Wide Fund for Nature (WWF) is....</p>
</section>

<p>我们在每天早上 <time>9:00</time> 开始营业。</p>
<p>我在 <time datetime="2016-02-14">情人节</time> 有个约会。</p>

<!-- 
4. MathML
HTML5 可以在文档中使用 MathML 元素，对应的标签是 <math>...</math> 。
MathML 是数学标记语言，是一种基于XML（标准通用标记语言的子集）的标准，用来在互联网上书写数学符号和公式的置标语言。
 -->
<math xmlns="http://www.w3.org/1998/Math/MathML"> 
    <mrow>
        <mrow>
            <msup>
                <mi>x</mi>
                <mn>2</mn>
            </msup>
            <mo>+</mo>
            <mrow>
                <mn>4</mn>
                <mo>⁢</mo>
                <mi>x</mi>
            </mrow>
            <mo>+</mo>
            <mn>4</mn>
        </mrow>
        <mo>=</mo>
        <mn>0</mn>
    </mrow>
</math>
```

#### 已经移除的元素

    <acronym>
    <applet>
    <basefont>
    <big>
    <center>
    <dir>
    <font>
    <frame>
    <frameset>
    <noframes>
    <strike>

#### 为HTML添加新元素

```html
<!-- 1. 首先JS放在head里，创建新元素 -->
<script>
document.createElement("myHero");
</script>

<!-- 2. 设置CSS样式 -->
<style>
    myHero {
        display: block;
        background-color: #ddd;
        padding: 50px;
        font-size: 30px;
    }
</style>

<!-- 3. 使用标签 -->
<myHero>我的第一个新元素</myHero>
```

### 2D/3D 制图

#### Canvas

`<canvas>`标签定义图形，比如图表和其他图像。`<canvas>` 标签通过脚本（通常是 JavaScript）来绘制图形（比如图表和其他图像）。它只是图形容器，您必须使用脚本来绘制图形。canvas 是一个二维网格。canvas 的左上角坐标为 `(0,0)`

`<canvas>` 元素中的任何文本将会被显示在不支持它的浏览器中。

```js
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

// fillRect(x,y,width,height) 方法定义了矩形当前的填充方式。
ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,150,75);

// 画线
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

// arc(x,y,r,start,stop)   绘制圆形，圆心坐标，半径，起始角度，结束角度（Math.PI表示180°）
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

/*
绘制文本: 三个属性
    font - 定义字体
    fillText(text,x,y) - 在 canvas 上绘制实心的文本
    strokeText(text,x,y) - 在 canvas 上绘制空心的文本
*/
ctx.font="30px Arial";
ctx.fillText("Hello World",10,50);

ctx.font="30px Arial";
ctx.strokeText("Hello World",10,50);

/*
渐变：
渐变可以填充在矩形, 圆形, 线条, 文本
等等

createLinearGradient(x,y,x1,y1) - 创建线条渐变   左上角，右下角坐标
createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变，渐变开始圆的圆心坐标，开始圆的半径，渐变结束圆的圆心坐标，结束圆的半径

当我们使用渐变对象，必须使用两种或两种以上的停止颜色。
addColorStop()方法指定颜色停止，参数使用坐标来描述，可以是0至1.
使用渐变，设置fillStyle或strokeStyle的值为 渐变，然后绘制形状，如矩形，文本，或一条线。
使用 createLinearGradient():
*/

// 创建线性渐变
var grd=ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// 填充渐变
ctx.fillStyle=grd;
ctx.fillRect(10,10,150,80);

// 创建圆形渐变
var grd=ctx.createRadialGradient(150,150,5,150,150,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// 填充渐变
ctx.fillStyle=grd;
ctx.fillRect(50,50,250,250);

// 一幅图像放置到画布上
/*
<p>Image to use:</p>
<img id="scream" src="img_the_scream.jpg" alt="The Scream" width="220" height="277"><p>Canvas:</p>
<canvas id="myCanvas" width="250" height="300" style="border:1px solid #d3d3d3;">
您的浏览器不支持 HTML5 canvas 标签。</canvas>
*/

var img = document.getElementById("scream");
ctx.drawImage(img,10,10);

```

```html
<canvas id="myCanvas" width="200" height="100"></canvas>

<script type="text/javascript">
    var canvas=document.getElementById('myCanvas'); // 内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
    var ctx=canvas.getContext('2d');
    ctx.fillStyle='#FF0000';
    ctx.fillRect(0,0,80,100);
</script>
```

#### 内联SVG

Internet Explorer 9+, Firefox, Opera, Chrome, 和 Safari 支持内联SVG。

    SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
    SVG 用于定义用于网络的基于矢量的图形
    SVG 使用 XML 格式定义图形
    SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
    SVG 是万维网联盟的标准

与其他图像格式相比（比如 JPEG 和 GIF），使用 SVG 的优势在于：

    SVG 图像可通过文本编辑器来创建和修改
    SVG 图像可被搜索、索引、脚本化或压缩
    SVG 是可伸缩的
    SVG 图像可在任何的分辨率下被高质量地打印
    SVG 可在图像质量不下降的情况下被放大

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
  <polygon points="100,10 40,180 190,60 10,60 160,180"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;">
</svg>
```

SVG 是一种使用 XML 描述 2D 图形的语言。Canvas 通过 JavaScript 来绘制 2D 图形。

SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

Canvas|	SVG
---|---
依赖分辨率| 不依赖分辨率
不支持事件处理器| 支持事件处理器
弱的文本渲染能力| 最适合带有大型渲染区域的应用程序（比如谷歌地图）
能够以 .png 或 .jpg 格式保存结果图像| 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
最适合图像密集型的游戏，其中的许多对象会被频繁重绘| 不适合游戏应用

### 新属性

#### HTML5 拖放（Drag 和 Drop）

Internet Explorer 9+, Firefox, Opera, Chrome, 和 Safari 支持拖动。

```
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>H5拖放测试</title>
<style>
#div1 {width:350px;height:70px;padding:10px;border:1px solid #aaaaaa;}
</style>
</head>

<script>
function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}
</script>

<body>
    <p>拖动图片到矩形框里</p>
    <img src="/images/logo.png" id="drag1" draggable="true" ondragstart="drag(event)"  alt="" width="336" height="69"><br />
    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)" width="336" height="69"></div>

</body>
</html>
```

##### 设置元素为可拖放

首先，为了使元素可拖动，把 `draggable` 属性设置为 `true` ：

```html
<img draggable="true">
```

##### 拖动什么 - `ondragstart` 和 `setData()`

然后，规定当元素被拖动时，会发生什么。
在上面的例子中，`ondragstart` 属性调用了一个函数，`drag(event)`，它规定了被拖动的数据。
`dataTransfer.setData()` 方法设置被拖数据的数据类型和值：

```js
function drag(ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
}
```

在这个例子中，数据类型是 "Text"，值是可拖动元素的 id ("drag1")。

##### 放到何处 - ondragover

ondragover 事件规定在何处放置被拖动的数据。
默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。
这要通过调用 `ondragover` 事件的 `event.preventDefault()` 方法：
`event.preventDefault()`

##### 进行放置 - ondrop

当放置被拖数据时，会发生 drop 事件。
在上面的例子中，ondrop 属性调用了一个函数，`drop(event)`：

```js
function drop(ev) {
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}
```

调用 `preventDefault()` 来避免浏览器对数据的默认处理（`drop 事件的默认行为是以链接形式打开`）
通过 `dataTransfer.getData("Text")` 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据。
被拖数据是被拖元素的 `id ("drag1")`
把被拖元素追加到放置元素（目标元素）中

#### 获取地理位置

Internet Explorer 9+, Firefox, Chrome, Safari 和 Opera 支持Geolocation（地理定位）.
注意: Geolocation（地理定位）对于拥有 GPS 的设备，比如 iPhone，地理定位更加精确。

```html
<p id="demo">点击按钮获取您当前坐标（可能需要比较长的时间获取）：</p>
<button onclick="getLocation()">点我</button>
<div id="mapholder"></div>

<script>
    var x=document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        }else {
            x.innerHTML="该浏览器不支持获取地理位置。";
        }
    }

    function showPosition(position) {
        /*
        x.innerHTML="纬度: " + position.coords.latitude +
        "<br>经度: " + position.coords.longitude;
        */
        var latlon = position.coords.latitude+","+position.coords.longitude;
        var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
        + latlon + "&zoom=14&size=400x300&sensor=false";
        document.getElementById("mapholder").innerHTML="<img src='"+img_url+"'>";
    }

    // 错误处理
    function showError(error)
    {
        switch(error.code)
        {
            case error.PERMISSION_DENIED:   // 用户不允许地理定位
                x.innerHTML="用户拒绝对获取地理位置的请求。"
                break;
            case error.POSITION_UNAVAILABLE:    // 无法获取当前位置
                x.innerHTML="位置信息是不可用的。"
                break;
            case error.TIMEOUT:         // 操作超时
                x.innerHTML="请求用户地理位置超时。"
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML="未知错误。"
                break;
        }
    }

/* 持续定位
    watchPosition() - 返回用户的当前位置，并继续返回用户移动时的更新位置（就像汽车上的 GPS）。
    clearWatch() - 停止 watchPosition() 方法
*/
var x=document.getElementById("demo");
function getLocation()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.watchPosition(showPosition);
    }
    else
    {
        x.innerHTML="该浏览器不支持获取地理位置。";
    }
}
function showPosition(position)
{
    x.innerHTML="纬度: " + position.coords.latitude +
    "<br>经度: " + position.coords.longitude;
}
</script>>
```

1. 检测是否支持地理定位
2. 如果支持，则运行 `getCurrentPosition()` 方法。如果不支持，则向用户显示一段消息。
3. 如果 `getCurrentPosition()` 运行成功，则向参数`showPosition`中规定的函数返回一个`coordinates`对象
4. `showPosition()` 函数获得并显示经度和纬度

##### `getCurrentPosition()` 方法 - 返回数据

若成功，则 getCurrentPosition() 方法返回对象。始终会返回 latitude、longitude 以及 accuracy 属性。如果可用，则会返回其他下面的属性。

属性|	描述
---|---
coords.latitude|	十进制数的纬度
coords.longitude|	十进制数的经度
coords.accuracy|	位置精度
coords.altitude|	海拔，海平面以上以米计
coords.altitudeAccuracy|	位置的海拔精度
coords.heading|	方向，从正北开始以度计
coords.speed|	速度，以米/每秒计
timestamp|	响应的日期/时间

#### input 属性增加

```html
color 类型用在input字段主要用于选取颜色 <input type="color" name="favcolor">

date 类型允许你从一个日期选择器选择一个日期。<input type="date" name="bday">

datetime 类型允许你选择一个日期（UTC 时间） <input type="datetime" name="bdaytime">

datetime-local 类型允许你选择一个日期和时间 (无时区). <input type="datetime-local" name="bdaytime">

email 类型用于应该包含 e-mail 地址的输入域。E-mail: <input type="email" name="email">

month 类型允许你选择一个月份。<input type="month" name="bdaymonth">

number 类型用于应该包含数值的输入域。 <input type="number" name="points" min="0" max="10" step="3" value="6">
<!-- 
disabled	规定输入字段是禁用的
max	规定允许的最大值
maxlength	规定输入字段的最大字符长度
min	规定允许的最小值
pattern	规定用于验证输入字段的模式
readonly	规定输入字段的值无法修改
required	规定输入字段的值是必需的
size	规定输入字段中的可见字符数
step	规定输入字段的的合法数字间隔
value	规定输入字段的默认值
 -->

range 类型用于应该包含一定范围内数字值的输入域。range 类型显示为滑动条。
<input type="range" name="points" min="1" max="10">
<!-- 
max - 规定允许的最大值
min - 规定允许的最小值
step - 规定合法的数字间隔
value - 规定默认值
 -->

search 类型用于搜索域，比如站点搜索或 Google 搜索。Search Google: <input type="search" name="googlesearch">

定义输入电话号码字段: <input type="tel" name="usrtel">

time 类型允许你选择一个时间。<input type="time" name="usr_time">

url 类型用于应该包含 URL 地址的输入域。在提交表单时，会自动验证 url 域的值。<input type="url" name="homepage">

week 类型允许你选择周和年。<input type="week" name="week_year">

autofocus 属性是一个 boolean 属性.规定在页面加载时，域自动地获得焦点。First name:<input type="text" name="fname" autofocus>

form 属性规定输入域所属的一个或多个表单。提示:如需引用一个以上的表单，请使用空格分隔的列表。
<form action="demo-form.php" id="form1">
  First name: <input type="text" name="fname"><br>
  <input type="submit" value="提交">
</form>

Last name: <input type="text" name="lname" form="form1">

formaction 属性用于描述表单提交的URL地址. 会覆盖<form> 元素中的action属性.The formaction 属性用于 type="submit" 和 type="image".

<form action="demo-form.php">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="提交"><br>
  <input type="submit" formaction="demo-admin.php"
  value="提交">
</form>

formmethod 属性定义了表单提交的方式。覆盖了 <form> 元素的的method 属性。
注意: 该属性可以与 type="submit" 和 type="image" 配合使用。
<form action="demo-form.php" method="get">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="提交">
  <input type="submit" formmethod="post" formaction="demo-post.php"
  value="使用 POST 提交">
</form>

height 和 width 属性规定用于 image 类型的 <input> 标签的图像高度和宽度。
注意: height 和 width 属性只适用于 image 类型的<input> 标签。
提示:图像通常会同时指定高度和宽度属性。如果图像设置高度和宽度，图像所需的空间 在加载页时会被保留。如果没有这些属性， 浏览器不知道图像的大小，并不能预留 适当的空间。图片在加载过程中会使页面布局效果改变 （尽管图片已加载）。

<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">

multiple 属性是一个 boolean 属性.
multiple 属性规定<input> 元素中可选择多个值。
注意: multiple 属性适用于以下类型的 <input> 标签：email 和 file:

Select images: <input type="file" name="img" multiple>

placeholder 属性提供一种提示（hint），描述输入域所期待的值。简短的提示在用户输入值前会显示在输入域上。
注意: placeholder 属性适用于以下类型的 <input> 标签：text, search, url, telephone, email 以及 password。

<input type="text" name="fname" placeholder="First name">

required 属性是一个 boolean 属性. 规定必须在提交之前填写输入域（不能为空）。
注意:required 属性适用于以下类型的 <input> 标签：text, search, url, telephone, email, password, date pickers, number, checkbox, radio 以及 file。
OperaSafariChromeFirefoxInternet Explorer

Username: <input type="text" name="usrname" required>

```

#### 表单 属性增加

```html
<!-- 
1. <form> / <input> autocomplete 属性
autocomplete 属性规定 form 或 input 域应该拥有自动完成功能。
当用户在自动完成域中开始输入时，浏览器应该在该域中显示填写的选项。
提示: autocomplete 属性有可能在 form元素中是开启的，而在input元素中是关闭的。
注意: autocomplete 适用于 <form> 标签，以及以下类型的 <input> 标签：text, search, url, telephone, email, password, datepickers, range 以及 color。 
-->
<form action="demo-form.php" autocomplete="on">
  First name:<input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  E-mail: <input type="email" name="email" autocomplete="off"><br>
  <input type="submit">
</form>

<!-- 
2. <form> novalidate 属性
novalidate 属性是一个 boolean(布尔) 属性.
novalidate 属性规定在提交表单时不应该验证 form 或 input 域。
 -->
<form action="demo-form.php" novalidate>
  E-mail: <input type="email" name="user_email">
  <input type="submit">
</form>

<figure>标签规定独立的流内容（图像、图表、照片、代码等等）。 元素的内容应该与主内容相关，但如果被删除，则不应对文档流产生影响。
<figcaption> 标签定义 <figure> 元素的标题.元素应该被置于 "figure" 元素的第一个或最后一个子元素的位置。

<figure>
  <img src="img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228">
  <figcaption>Fig1. - The Pulpit Pock, Norway.</figcaption>
</figure>

```

### 本地存储

HTML5 web 存储,一个比cookie更好的本地存储方式。

使用HTML5可以在本地存储用户的浏览数据。

早些时候,本地存储使用的是 cookie。但是Web 存储需要更加的安全与快速. 这些数据不会被保存在服务器上，但是这些数据只用于用户请求网站数据上.它也可以存储大量的数据，而不影响网站的性能.

数据以 键/值 对存在, web网页的数据只允许该网页访问使用。

Internet Explorer 8+, Firefox, Opera, Chrome, 和 Safari支持Web 存储。
注意: Internet Explorer 7 及更早IE版本不支持web 存储.

#### localStorage与sessionStorage

localStorage - 没有时间限制的数据存储
sessionStorage - 针对一个 session 的数据存储

```js
if(typeof(Storage)!=="undefined") {
    // 是的! 支持 localStorage  sessionStorage 对象!
    // 一些代码.....
    localStorage.sitename="XXX";
    document.getElementById("result").innerHTML="网站名：" + localStorage.sitename;
} else{
    document.getElementById("result").innerHTML="对不起，您的浏览器不支持 web 存储。";
}
```

不管是 localStorage，还是 sessionStorage，可使用的API都相同，常用的有如下几个（以localStorage为例）：

    保存数据：localStorage.setItem(key,value);
    读取数据：localStorage.getItem(key);
    删除单个数据：localStorage.removeItem(key);
    删除所有数据：localStorage.clear();
    得到某个索引的key：localStorage.key(index);

提示: 键/值对通常以字符串存储，你可以按自己的需要转换该格式。

sessionStorage 方法针对一个 session 进行数据存储。当用户关闭浏览器窗口后，数据会被删除。

```js
// 关闭浏览器选项卡(或窗口),重新打开此页面,计数器将继续计数(不是重置)。
if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
        localStorage.clickcount=Number(localStorage.clickcount)+1;
    }else {
        localStorage.clickcount=1;
    }
    document.getElementById("result").innerHTML=" 你已经点击了按钮 " + localStorage.clickcount + " 次 ";
}

// 关闭浏览器选项卡(或窗口),重新打开此页面,计数器将重置。
if(typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount=Number(sessionStorage.clickcount)+1;
    }else {
        sessionStorage.clickcount=1;
    }
    document.getElementById("result").innerHTML="在这个会话中你已经点击了该按钮 " + sessionStorage.clickcount + " 次 ";
}
```

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>HTML5本地存储之Web Storage篇</title>
</head>
<body>
    <div style="border: 2px dashed #ccc;width:320px;text-align:center;">
        <label for="sitename">网站名(key)：</label>
        <input type="text" id="sitename" name="sitename" class="text"/>
        <br/>
        <label for="siteurl">网 址(value)：</label>
        <input type="text" id="siteurl" name="siteurl"/>
        <br/>
        <input type="button" onclick="save()" value="新增记录"/>
        <hr/>
        <label for="search_phone">输入网站名：</label>
        <input type="text" id="search_site" name="search_site"/>
        <input type="button" onclick="find()" value="查找网站"/>
        <p id="find_result"><br/></p>

        <label for="2search_phone">输入网站名：</label>
        <input type="text" id="delete_site" name="delete_site"/>
        <input type="button" onclick="removesite()" value="删除网站"/>
        <p id="delete_result"><br/></p>
    </div>
    <br/>
    <div id="list">
    </div>
    <script>
    // 载入所有存储在localStorage的数据
    loadAll();

    //保存数据
    function save(){
        var siteurl = document.getElementById("siteurl").value;
        var sitename = document.getElementById("sitename").value;
        localStorage.setItem(sitename, siteurl);
        alert("添加成功");
    }
    //查找数据
    function find(){
        var search_site = document.getElementById("search_site").value;
        var siteurl = localStorage.getItem(search_site);
        var find_result = document.getElementById("find_result");
        find_result.innerHTML = search_site + "的网址是：" + siteurl;
    }
    //删除数据
    function removesite(){
        var delete_site = document.getElementById("delete_site").value;
        var siteurl = localStorage.getItem(delete_site);
        var delete_result = document.getElementById("delete_result");
        delete_result.innerHTML = delete_site + "的网址是：" + siteurl;
        localStorage.removeItem(delete_site);
        //删除后刷新数据列表 loadAll();
        loadAll();
    }

    //将所有存储在localStorage中的对象提取出来，并展现到界面上
    function loadAll(){
        var list = document.getElementById("list");
        if(localStorage.length>0){
            var result = "<table border='1'>";
            result += "<tr><td>key</td><td>value</td></tr>";
            for(var i=0;i<localStorage.length;i++){
                var sitename = localStorage.key(i);
                var siteurl = localStorage.getItem(sitename);
                result += "<tr><td>"+sitename+"</td><td>"+siteurl+"</td></tr>";
            }
            result += "</table>";
            list.innerHTML = result;
        }else{
            list.innerHTML = "数据为空……";
        }
    }

    fucntion loadAll() {
        var list = 
    }

    </script>
</body>
</html>
```




### 本地 SQL 数据


### Web 应用

    使用 HTML5 你可以简单地开发应用
    本地数据存储
    访问本地文件
    本地 SQL 数据
    缓存引用
    Javascript 工作者
    XHTMLHttpRequest 2






































