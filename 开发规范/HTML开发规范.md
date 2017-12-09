# HTML规范

> 本文档内容整理自网络，来源
> 1. 网易 nec 前端规范指南，链接： [http://nec.netease.com/](http://nec.netease.com/)
> 2. 待补充（会持续更新）
>> `@Author`: &nbsp;&nbsp;陶孝林

## 整体结构

### HTML基础设施

文件应以 `“<!DOCTYPE ......>”` 首行顶格开始，推荐使用 `“<!DOCTYPE html>”`。

必须申明文档的编码 charset，且与文件本身编码保持一致，推荐使用 UTF-8 编码`<meta charset="utf-8"/>`。

根据页面内容和需求填写适当的 keywords 和 description。

页面 title 是极为重要的不可缺少的一项。

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>NEC：更好的CSS方案</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="shortcut icon" href="img/favicon.ico" />
    <link rel="apple-touch-icon" href="img/touchicon.png" />
</head>

<body>
</body>

</html>
```

### 结构顺序和视觉顺序基本保持一致

1. 按照从上至下、从左到右的视觉顺序书写 HTML 结构。
2. 有时候为了便于搜索引擎抓取，我们也会将重要内容在 HTML 结构顺序上提前。
3. 用 div 代替 table 布局，可以使 HTML 更具灵活性，也方便利用 CSS 控制。
4. table 不建议用于布局，但表现具有明显表格形式的数据， table 还是首选。

#### 结构、表现、行为三者分离，避免内联

1. 使用 link 将 css 文件引入，并置于 head 中。
2. 使用 script 将 js 文件引入，并置于 body 底部。

### 保持良好的简洁的树形结构

1. 每一个块级元素都另起一行，每一行都使用 Tab 缩进对齐（ head 和 body 的子元素不需要缩进）。删除冗余的行尾的空格。
2. 使用4个空格代替1个 Tab（大多数编辑器中可设置）。
3. 对于内容较为简单的表格，建议将 tr 写成单行。
4. 你也可以在大的模块之间用空行隔开，使模块更清晰。

```html
<body>
<!-- 侧栏内容区 -->
<div class="m-side">
    <div class="side">
        <div class="sidein">
            <!-- 热门标签 -->
            <div class="sideblk">
                <div class="m-hd3"><h3 class="tit">热门标签</h3> </div>
                ...
            </div>
            <!-- 最热TOP5 -->
            <div class="sideblk">
                <div class="m-hd3"><h3 class="tit">最热TOP5</h3> <a href="#" class="s-fc02 f-fr">更多»</a></div>
                ...
            </div>
        </div>
    </div>
</div>
<!-- /侧栏内容区 -->
</body>
```

### 另外，请做到以下几点

1. 结构上如果可以并列书写，就不要嵌套。如果可以写成 `<div></div><div></div>` 那么就不要写成 `<div><div></div></div>`
2. 如果结构已经可以满足视觉和语义的要求，那么就不要有额外的冗余的结构。比如 `<div><h2></h2></div>` 已经能满足要求，那么就不要再写成`<div><div><h2></h2></div></div>`
3. 一个标签上引用的className不要过多，越少越好。比如不要出现这种情况：`<div class="class1 class2 class3 class4"></div>`
4. 对于一个语义化的内部标签，应尽量避免使用 className。比如在这样一个列表中，li 标签中的 itm 应去除 `：<ul class="m-help"><li class="itm"></li><li class="itm"></li></ul>`


## 代码格式

### 说明文案的注释方法

采用类似标签闭合的写法，与 HTML 统一格式；注释文案两头空格，与 CSS注 释统一格式。

1. 开始注释：`<!-- 注释文案 -->`（文案两头空格）。
2. 结束注释：`<!-- /注释文案 -->`（文案前加 “/” 符号，类似标签的闭合）。
3. 允许只有开始注释！

```html
<!-- 头部 -->
<div class="g-hd">
    <!-- LOGO -->
    <h1 class="m-logo"><a href="#">LOGO</a></h1>
    <!-- /LOGO -->
    <!-- 导航 -->
    <ul class="m-nav">
        <li><a href="#">NAV1</a></li>
        <li><a href="#">NAV2</a></li>
        <!-- 更多导航项 -->
    </ul>
    <!-- /导航 -->
</div>
<!-- /头部 -->
```

### 代码本身的注释方法

单行代码的注释也保持同行，两端空格；多行代码的注释起始和结尾都另起一行并左缩进对齐。

```html
<!-- <h1 class="m-logo"><a href="#">LOGO</a></h1> -->
<!--
<ul class="m-nav">
    <li><a href="#">NAV1</a></li>
    <li><a href="#">NAV2</a></li>
</ul>
-->
```

### HTML注释在IE6中的BUG

1. 如果两个浮动元素之间存在注释，那么可能导致布局错位或文字的 BUG。
2. 所以，这种情况下，我们通常将注释去掉，或者索性采用模板语言（ftl、vm）的注释。

### 严格的嵌套

1. 尽可能以最严格的 xhtml strict 标准来嵌套，比如内联元素不能包含块级元素等等。
2. 正确闭合标签且必须闭合。

### 严格的属性

1. 属性和值全部小写，每个属性都必须有一个值，每个值必须加双引号。
2. 没有值的属性必须使用自己的名称做为值（checked、disabled、readonly、selected等等）。
3. 可以省略style标签和script标签的type属性。

### 常用的标签

常见标签表

标签|	语义     |	嵌套常见错误|	常用属性（加粗的为不可缺少的或建议的）
---|---|---|---
`<a></a>`|	超链接/锚|	a不可嵌套a|	href,name,title,rel,target
`<br />`|	换行||
`<button></button>`|按钮|	不可嵌套表单元素|	type,disabled
`<dd></dd>`|	定义列表中的定义（描述内容）|	只能以dl为父容器，对应一个dt|	 
`<del></del>`|	文本删除|	 |
`<div></div>`|	块级容器|	 	|
`<dl></dl>`|	定义列表|	只能嵌套dt和dd|	 
`<dt></dt>`|	定义列表中的定义术语|	只能以dl为父容器，对应多个dd|	 
`<em></em>`|	强调文本|	 	|
`<form></form>`|	表单|	 	`action`,target,method,name|
`<h1></h1>`|	标题|	从h1到h6，不可嵌套块级元素	|
`<iframe></iframe>`|	内嵌一个网页|	 	frameborder,width,height,src,scrolling,name
`<img />`|	图像|	 	`alt`,src,width,height|
`<input />`|	各种表单控件|	 	`type`,name,value,checked,disabled,maxlength,readonly,accesskey|
`<label></label>`|	标签为input元素定义标注|	 	for|
`<li></li>`|	列表项|	只能以ul或ol为父容器|
`<link />`|	引用样式或icon|	不可嵌套任何元素|	`type`,`rel`,href
`<meta />`|	文档信息|	只用于head	content,http-equiv,name|
`<ol></ol>`|	有序列表|	只能嵌套li| 
`<option></option>`|	select中的一个选项|	仅用于select|	`value`,selected,disabled
`<p></p>`|	段落|	不能嵌套块级元素|
`<script></script>`|	引用脚本|	不可嵌套任何元素|	type,src
`<select></select>`|	列表框或下拉框|	只能嵌套option或optgroup	name,disabled,multiple| 
`<span></span>`|内联容器||
`<strong></strong>`|强调文本||
`<style></style>`|引用样式|	不可嵌套任何元素|	`type`,media
`<sub></sub>`|	下标|	 |
`<sup></sup>`|	上标|	 	|
`<table></table>`|	表格|	只可嵌套表格元素|	width,align,background,cellpadding,cellspacing,summary,border
`<tbody></tbody>`|	表格主体|	只用于table	|
`<td></td>`|	表格中的单元格|	只用于tr|	colspan,rowspan
`<textarea></textarea>`|	多行文本输入控件|	 	name,accesskey,disabled,readonly,rows,cols
`<tfoot></tfoot>`|	表格表尾|	只用于table	|
`<th></th>`|	表格中的标题单元格|	只用于tr|	colspan,rowspan
`<thead></thead>`|	表格表头|	只用于table |
`<title></title>`|	文档标题|	只用于head |
`<tr></tr>`|	表格行|	嵌套于table或thead、tbody、tfoot	|
`<ul></ul>`|	无序列表|	只能嵌套li	 |

## 内容语义

### 内容类型决定使用的语义标签

在网页中某种类型的内容必定需要某种特定的 HTML 标签来承载，也就是我们常常提到的根据你的内容语义化 HTML 结构。

### 加强“资源型”内容的可访问性和可用性

在资源型的内容上加入描述文案，比如给 img 添加 alt 属性，在 audio 内加入文案和链接等等。

### 加强“不可见”内容的可访问性

背景图上的文字应该同时写在 html 中，并使用 css 使其不可见，有利于搜索引擎抓取你的内容，也可以在 css 失效的情况下看到内容。

### 适当使用实体

以实体代替与 HTML 语法相同的字符，避免浏览解析错误。

常用 HTML 字符实体（建议使用实体）：

字符|	名称|	实体名|	实体数
---|---|---|---
`"`|	双引号|	`&quot;`|	`&#34;`
`&`|	&符|	`&amp;`|	`&#38;`
`<`|	左尖括号（小于号）|	`&lt;`|	`&#60;`
`>`|	右尖括号（大于号）|	`&gt;`|	`&#62;`
` `|	空格|	`&nbsp;`|	`&#160;`
`　`|	中文全角空格|	 |	`&#12288;`

常用特殊字符实体（不建议使用实体）：

字符|	名称|	实体名|	实体数
---|---|---|---
`¥`|	元|	`&yen;`|	`&#165;`
`¦`|	断竖线|	`&brvbar;`|	`&#166;`
`©`| 版权|	`&copy;`|	`&#169;`
`®`|	注册商标R|	`&reg;`|	`&#174;`
`™`|	商标TM|	`&trade;`|	`&#8482;`
`·`|	间隔符|	`&middot;`|	`&#183;`
`«`|	左双尖括号|	`&laquo;`|	`&#171;`
`»`|	右双尖括号|	`&raquo;`|	`&#187;`
`°`|	度|	`&deg;`|	`&#176;`
`×`|	乘|	`&times;`|	`&#215;`
`÷`|	除|	`&divide;`|	`&#247;`
`‰`|	千分比|	`&permil;`|	`&#8240;`

## 邮件内容

### 邮件环境

邮件内容所在上下文或者说所在外部容器（以下简称环境）都是由邮箱服务商决定的，这就要求邮件内容需要在任何一种情况下都要正确显示。

这些环境可能是以下某几种情况：

1. 可能是个 iframe ，你的内容是被放在 body 里面的；可能只是个 div ，你的内容就被放在这个 div 里面。
2. 可能邮箱自身设置了些 css ，他可能对你产生未知的影响。
3. 可能根本没有申明 doctype ，即使申明了，也不是你想要的 doctype。

### 避免被嵌套在不正确的容器里

惑：因为容器可能是 body 或 div ，所以，我们邮件内容不应该是一个完整的 html。

解：所以邮件内容应该是以 div 为根节点的 html 片段。

### 避免css冲突或被覆盖

惑：因为环境中可能已经设置了 css，比如一些 reset 、一些 .class。

解：所以我们只能使用行内 style 来确保我们的效果，并且在内容根节点上设置基础 style ，并且尽量使用 div、span 等无语义标签。

```html
<!-- 根节点 -->
<div style="width:600px;text-align:left;color:#000;font:normal 12px/15px arial,simsun;background:#fff;">
    内容区域
</div>
<!-- 根节点-邮件内容居中 -->
<div style="text-align:center;">
    <div style="width:600px;margin:0 auto;text-align:left;color:#000;font:normal 12px/15px arial,simsun;background:#fff;">
        内容区域
    </div>
</div>
<!-- 如果使用语义化标签，那么需要多写一些style，以避免被环境中的css覆盖 -->
<h2 style="width:100px;height:100px;margin:0;padding:0;fong-weight:normal;font-size:12px;"></h2>
<!-- 而使用无语义标签，就可以省下很多style -->
<div style="width:100px;height:100px;"></div>
```

### 避免盒模型错误

惑：因为 doctype 的不确定性，我们在写 style 的时候，应该考虑无论 doctype 是什么情况，都可以正常显示，doctype 影响最大的就是盒模型的解析。

解：所以我们要将盒模型拆分开来写，比如我们将原本要定义在某个 div 上的 height 和 padding 分别写到这个 div 和他的父元素或子元素上。

```html
<div style="height:100px;padding:20px 0;">内容</div>
<!-- 上面的写法应该改成以下写法 -->
<div style="padding:20px 0;"><div style="height:100px;">内容</div></div>
```

其他注意事项

1. 因为只能使用行内 style ，所以清除浮动需要使用额外标签。
2. 避免使用绝对定位，可能会被过滤。
3. 避免使用 js，可能会被过滤。
4. 避免使用 table 布局，不易于修改维护。
5. 背景图片或内容图片上的文字信息，必须在代码中可见。
6. 如果没有特殊要求，所有a链接都要从新窗口打开，即`target="_blank"`，且 a 标签内容不能为空。
7. 所有链接必须设置使用颜色、是否下划线，即`style="text-decoration:;color:;"`。
8. 重点检查 ie！！！

```html
<div style="width:600px;text-align:left;color:#000;font:normal 12px/15px simsun;background:#d9d9d9;">
    <div style="height:268px;background:url(images/bg1.jpg) no-repeat;">
        <div style="height:228px;">
            <div style="padding:21px 0 0 21px;">
                <a href="http://yuedu.163.com/" target="_blank" style="display:block;width:111px;height:28px;overflow:hidden;text-indent:-2000px;text-decoration:none;" title="网易阅读-随时随地品质阅读">网易阅读-随时随地品质阅读</a>
            </div>
            <h2 style="margin:0;padding:0;width:0;height:0;overflow:hidden;text-indent:-2000px;">你的iPad够有料吗？iPad不等于愤怒的小鸟！不等于切水果！下载网易阅读，给你的iPad添点料，打造你独一无二的iPad！</h2>
        </div>
        <div style="padding:0 0 0 35px;"><a href="http://itunes.apple.com/cn/app/id421092396?mt=8" target="_blank" style="color:#f00;text-decoration:none;" title="下载网易阅读">下载网易阅读</a></div>
    </div>
</div>
```

### 发现的问题及解决方案

问题：部分智能手机的邮件客户端可能会有只显示部分的 bug（宽度被截）。

解决：在外面套一个同宽的 table 即可。

```html
<table width="600" cellpadding="0" cellspacing="0" border="0"><tr><td>
    <div style="width:600px;text-align:left;color:#000;font:normal 12px/15px simsun;background:#d9d9d9;">
        ......
    </div>
</td></tr></table>
```

### 使用框架

推荐使用 email 框架 来创建邮件内容。

```html
<table width="600" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td>
    <div style="width:600px;text-align:left;font:12px/15px simsun;color:#000;background:#fff;">
        <!-- 水平居左的邮件 -->
    </div>
</td></tr></tbody></table>
<div style="text-align:center;">
    <table width="600" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;"><tbody><tr><td>
        <div style="width:600px;text-align:left;font:12px/15px simsun;color:#000;background:#fff;">
            <!-- 水平居中的邮件 -->
        </div>
    </td></tr></tbody></table>
</div>
```

## 补充

### html template

包含完整头部信息和主体结构的 HTML 基础模板。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>NEC：更好的CSS方案</title>
<meta name="keywords" content=""/>
<meta name="description" content=""/>
<meta name="viewport" content="width=device-width"/>
<link rel="stylesheet" href="css/style.css"/>
<link rel="shortcut icon" href="img/favicon.ico"/>
<link rel="apple-touch-icon" href="img/touchicon.png"/>
</head>
<body>
<div class="g-doc">
    <div class="g-hd">
    </div>
    <div class="g-bd">
        <div class="g-mn">
        </div>
        <div class="g-sd">
        </div>
    </div>
    <div class="g-ft">
    </div>
</div>
</body>
</html>
```