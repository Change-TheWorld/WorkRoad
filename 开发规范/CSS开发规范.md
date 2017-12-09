# CSS规范

> 本文档内容整理自网络，来源
> 1. 网易 nec 前端规范指南，链接： [http://nec.netease.com/](http://nec.netease.com/)
> 2. 待补充（会持续更新）
>> `@Author`: &nbsp;&nbsp;陶孝林

## 分类方法

### CSS文件的分类和引用顺序

通常，一个项目我们只引用一个 CSS，但是对于较大的项目，我们需要把 CSS 文件进行分类。

我们按照 CSS 的性质和用途，将 CSS 文件分成 `“公共型样式”`、`“特殊型样式”`、`“皮肤型样式”`，并以此顺序引用（按需求决定是否添加版本号）。

1. 公共型样式：包括了以下几个部分：`“标签的重置和设置默认值”`、`“统一调用背景图和清除浮动或其他需统一处理的长样式”`、`“网站通用布局”`、`“通用模块和其扩展”`、`“元件和其扩展”`、`“功能类样式”`、`“皮肤类样式”`。
2. 特殊型样式：当某个栏目或页面的样式与网站整体差异较大或者维护率较高时，可以独立引用一个样式：`“特殊的布局、模块和元件及扩展”`、`“特殊的功能、颜色和背景”`，也可以是某个大型控件或模块的独立样式。
3. 皮肤型样式：如果产品需要换肤功能，那么我们需要将颜色、背景等抽离出来放在这里。

```html
<link href="assets/css/global.css" rel="stylesheet" type="text/css"/>
<link href="assets/css/index.css" rel="stylesheet" type="text/css"/>
<link href="assets/css/skin.css" rel="stylesheet" type="text/css"/>
```

### CSS内部的分类及其顺序

1. 重置（reset）和默认（base）（tags）：消除默认样式和浏览器差异，并设置部分标签的初始样式，以减少后面的重复劳动！你可以根据你的网站需求设置！
2. 统一处理：建议在这个位置统一调用背景图（这里指多个布局或模块或元件共用的图）和清除浮动（这里指通用性较高的布局、模块、元件内的清除）等统一设置处理的样式！
3. 布局`（grid）（.g-）`：将页面分割为几个大块，通常有头部、主体、主栏、侧栏、尾部等！
4. 模块`（module）（.m-）`：通常是一个语义化的可以重复使用的较大的整体！比如导航、登录、注册、各种列表、评论、搜索等！
5. 元件`（unit）（.u-）`：通常是一个不可再分的较为小巧的个体，通常被重复用于各种模块中！比如按钮、输入框、loading、图标等！
6. 功能`（function）（.f-）`：为方便一些常用样式的使用，我们将这些使用率较高的样式剥离出来，按需使用，通常这些选择器具有固定样式表现，比如清除浮动等！不可滥用！
7. 皮肤`（skin）（.s-）`：如果你需要把皮肤型的样式抽离出来，通常为文字色、背景色（图）、边框色等，非换肤型网站通常只提取文字色！非换肤型网站不可滥用此类！
8. 状态`（.z-）`：为状态类样式加入前缀，统一标识，方便识别，她只能组合使用或作为后代出现（`.u-ipt.z-dis{}`，`.m-list li.z-sel{}`），具体详见命名规则的扩展相关项。

功能类和皮肤类样式为表现化的样式，请不要滥用！以上顺序可以按需求适当调整。

以上分类的命名方法详见命名规则

```css
/* 重置 */
div,p,ul,ol,li{margin:0;padding:0;}
/* 默认 */
strong,em{font-style:normal;font-weight:bold;}
/* 统一调用背景图 */
.m-logo a,.m-nav a,.m-nav em{background:url(images/sprite.png) no-repeat 9999px 9999px;}
/* 统一清除浮动 */
.g-bdc:after,.m-dimg ul:after,.u-tab:after{display:block;visibility:hidden;clear:both;height:0;overflow:hidden;content:'.';}
.g-bdc,.m-dimg ul,.u-tab{zoom:1;}
/* 布局 */
.g-sd{float:left;width:300px;}
/* 模块 */
.m-logo{width:200px;height:50px;}
/* 元件 */
.u-btn{height:20px;border:1px solid #333;}
/* 功能 */
.f-tac{text-align:center;}
/* 皮肤 */
.s-fc,a.s-fc:hover{color:#fff;}
```

### 命名规则

#### 使用类选择器，放弃ID选择器

ID在一个页面中的唯一性导致了如果以ID为选择器来写CSS，就无法重用。

#### NEC特殊字符："-"连字符

`"-"`在本规范中并不表示连字符的含义。

她只表示两种含义：`分类前缀分隔符`、`扩展分隔符`，详见以下具体规则。

#### 分类的命名方法：使用单个字母+"-"为前缀

布局`（grid）（.g-）`；模块`（module）（.m-）`；`元件（unit）（.u-）`；功能`（function）（.f-）`；皮肤`（skin）（.s-）`；状态`（.z-）`。

对以上的解释详情参见：分类方法中的“CSS内部的分类及其顺序”。

注：在你样式中的选择器总是要以上面前五类开头，然后在里面使用后代选择器。

　　如果这五类不能满足你的需求，你可以另外定义一个或多个大类，但必须符合 `单个字母+"-"` 为前缀的命名规则，即 `.x-` 的格式。

　　特殊：`.j-` 将被专用于JS获取节点，请勿使用 `.j-` 定义样式。

#### 后代选择器命名

1. 约定`不以单个字母+"-"为前缀`且`长度大于等于2的类选择器为后代选择器`，如：.item 为 m-list 模块里的每一个项，.text 为 m-list 模块里的文本部分：`.m-list .item{}.m-list .text{}`。
2. 一个语义化的标签也可以是后代选择器，比如：`.m-list li{}`。
3. `不允许单个字母的类选择器出现`，原因详见下面的 `“模块和元件的后代选择器的扩展类”`。通过使用后代选择器的方法，你不需要考虑他的命名是否已被使用，因为他只在当前模块或元件中生效，`同样的样式名可以在不同的模块或元件中重复使用`，互不干扰；在多人协作或者分模块协作的时候效果尤为明显！

后代选择器不需要完整表现结构树层级，`尽量能短则短`。

注：`后代选择器不要在页面布局中使用`，因为污染的可能性较大；

```css
/* 这里的.itm和.cnt只在.m-list中有效 */
.m-list{margin:0;padding:0;}
.m-list .itm{margin:1px;padding:1px;}
.m-list .cnt{margin-left:100px;}
/* 这里的.cnt和.num只在.m-page中有效 */
.m-page{height:20px;}
.m-page .cnt{text-align:center;}
.m-page .num{border:1px solid #ddd;}
```

命名应简约而不失语义

```css
/* 反对：表现化的或没有语义的命名 */
.m-abc .green2{}
.g-left2{}
/* 推荐：使用有语义的简短的命名 */
.m-list .wrap2{}
.g-side2{}
```

#### 相同语义的不同类命名

方法：直接加数字或字母区分即可（如：`.m-list、.m-list2、.m-list3`等，都是列表模块，但是是完全不一样的模块）。

其他举例：`.f-fw0、.f-fw1、.s-fc0、.s-fc1、.m-logo2、.m-logo3、u-btn、u-btn2`等等。

#### 模块和元件的扩展类的命名方法

当 A、B、C、.. .它们类型相同且外形相似区别不大，那么就以它们中出现率最高的做成基类，其他做成基类的扩展。

方法：`+“-”+数字或字母`（如：.m-list的扩展类为.m-list-1、.m-list-2等）。

补充：基类自身可以独立使用（如：class="m-list"即可），扩展类必须基于基类使用（如：class="m-list m-list-2"）。

如果你的扩展类是表示不同状态，那么你可以这样命名：u-btn-dis，u-btn-hov，m-box-sel，m-box-hov等等，然后像这样使用：class="u-btn u-btn-dis"。

如果你的网站可以不兼容 IE6 等浏览器，那么你标识状态的方法也可以采取独立状态分类（.z-）方法：.u-btn.z-dis，.m-box.z-sel，然后像这样使用：class="u-btn z-dis"。

#### 模块和元件的后代选择器的扩展类

有时候模块内会有些类似的东西，如果你没有把它们做成元件和扩展，那么也可以使用后代选择器和扩展。

后代选择器：`.m-login .btn{}`。

后代选择器扩展：`.m-login .btn-1{}`，`.m-login .btn-dis{}`。

同样也可以采取独立状态分类`（.z-）`方法：`.m-login .btn.z-dis{}`，然后像这样使用：`class="btn z-dis"`。

注：此方法用于类选择器，直接使用标签做为选择器的则不需要使用此命名方法。

注：为防止后代选择器的扩展类和大类命名规范冲突，后代选择器不允许使用单个字母。

　　比如：`.m-list .a{}`是不允许的，因为当这个 .a 需要扩展的时候就会变成. a-bb，这样就和大类的命名规范冲突。

#### 分组选择器有时可以代替扩展方法

有时候虽然两个同类型的模块很相似，但是你希望他们之间不要有依赖关系，也就是说你不希望使用扩展的方法，那么你可以通过合并选择器来设置共性的样式。

使用本方法的前提是：`相同类型、功能和外观都相似，写在同一片代码区域方便维护`。

```css
/* 两个元件共性的样式 */
.u-tip1,.u-tip2{}
.u-tip1 .itm,.u-tip2 .itm{}
/* 在分别是两个元件各自的样式 */
/* tip1 */
.u-tip1{}
.u-tip1 .itm{}
/* tip2 */
.u-tip2{}
.u-tip2 .itm{}
```

#### 防止污染和被污染

当模块或元件之间互相嵌套，且使用了相同的标签选择器或其他后代选择器，那么里面的选择器就会被外面相同的选择器所影响。

所以，如果你的模块或元件可能嵌套或被嵌套于其他模块或元件，那么要慎用标签选择器，必要时采用类选择器，并注意命名方式，可以采用 `.m-layer .layerxxx、.m-list2 .list2xxx` 的形式来降低后代选择器的污染性。

### 代码格式

#### 选择器、属性和值都使用小写

在 xhtml 标准中规定了所有标签、属性和值都小写，CSS 也是如此。

#### 单行写完一个选择器定义

便于选择器的寻找和阅读，也便于插入新选择器和编辑，便于模块等的识别。去除多余空格，使代码紧凑减少换行。

如果有嵌套定义，可以采取内部单行的形式。

```css
/* 单行定义一个选择器 */
.m-list li,.m-list h3{width:100px;padding:10px;border:1px solid #ddd;}
/* 这是一个有嵌套定义的选择器 */
@media all and (max-width:600px){
    .m-class1 .itm{height:17px;line-height:17px;font-size:12px;}
    .m-class2 .itm{width:100px;overflow:hidden;}
}
@-webkit-keyframes showitm{
    0%{height:0;opacity:0;}
    100%{height:100px;opacity:1;}
}
```

#### 最后一个值也以分号结尾

通常在大括号结束前的值可以省略分号，但是这样做会对修改、添加和维护工作带来不必要的失误和麻烦。

#### 省略值为0时的单位

为节省不必要的字节同时也使阅读方便，我们将0px、0em、0%等值缩写为0。

```CSS
.m-box{margin:0 10px;background-position:50% 0;}
```

#### 使用单引号

省略 url 引用中的引号，其他需要引号的地方使用单引号。

```css
.m-box{background:url(bg.png);}
.m-box:after{content:'.';}
```

#### 使用16进制表示颜色值

除非你需要透明度而使用 rgb a，否则都使用 `#f0f0f0` 这样的表示方法，并尽量缩写。

```css
.m-box{color:#f00;background:rgba(0,0,0,0.5);}
```

#### 根据属性的重要性按顺序书写

只遵循横向顺序即可，先显示定位布局类属性，后盒模型等自身属性，最后是文本类及修饰类属性。

→|	显示属性|	自身属性|	文本属性和其他修饰
---|---|---|---
 |	|display|	width|	font
 |	|visibility|	height|	text-align
 |	|position|	margin|	text-decoration
 |	|float|	padding|	vertical-align
 |	|clear|	border|	white-space
 |	|list-style|	overflow|	color
 | 	|top|	min-width|	background

```css
.m-box{position:relative;width:600px;margin:0 auto 10px;text-align:center;color:#000;}
```

如果属性间存在关联性，则不要隔开写。

```css
/* 这里的height和line-height有关联性 */
.m-box{position:relative;height:20px;line-height:20px;padding:5px;color:#000;}
```

#### 私有在前，标准在后

先写带有 浏览器私有标志 的，后写 W3C 标准的。

```css
.m-box{-webkit-box-shadow:0 0 0 #000;-moz-box-shadow:0 0 0 #000;box-shadow:0 0 0 #000;}
```

#### 注释格式：`/* 注释文字 */`

对选择器的注释统一写在被注释对象的上一行，对属性及值的注释写于分号后。

注释内容两端需空格，已确保即使在编码错误的情况下也可以正确解析样式。

在必要的情况下，可以使用块状注释，块状注释保持统一的缩进对齐。

原则上每个系列的样式都需要有一个注释，言简意赅的表明名称、用途、注意事项等。

```css
/* 块状注释文字
 * 块状注释文字
 * 块状注释文字
 */
.m-list{width:500px;}
.m-list li{height:20px;line-height:20px;/* 这里是对line-height的一个注释 */overflow:hidden;}
.m-list li a{color:#333;}
/* 单行注释文字 */
.m-list li em{color:#666;}
```

#### 原则上不允许使用Hack

很多不兼容问题可以通过改变方法和思路来解决，并非一定需要 Hack，根据经验你完全可以绕过某些兼容问题。

一种合理的结构和合理的样式，是极少会碰到兼容问题的。

由于浏览器自身缺陷，我们无法避开的时候，可以允许使用适当的 Hack。

#### 统一Hack方法

统一使用`“*”`和`“_”`分别对IE7和6进行Hack。如下代码所示：

```css
/* IE7会显示灰色#888，IE6会显示白色#fff，其他浏览器显示黑色#000 */
.m-list{color:#000;*color:#888;_color:#fff;}
```

#### 建议并适当缩写值

“建议并适当”是因为缩写总是会包含一系列的值，而有时候我们并不希望设置某一值，反而造成了麻烦，那么这时候你可以不缩写，而是分开写。

当然，在一切可以缩写的情况下，请务必缩写，它最大的好处就是节省了字节，便于维护，并使阅读更加一目了然。

缩写方法请查阅 css手册。

#### 选择器顺序

请综合考虑以下顺序依据：

从大到小（以选择器的范围为准）
从低到高（以等级上的高低为准）
从先到后（以结构上的先后为准）
从父到子（以结构上的嵌套为准）
以下仅为简单示范：

```css
/* 从大到小 */
.m-list p{margin:0;padding:0;}
.m-list p.part{margin:1px;padding:1px;}
/* 从低到高 */
.m-logo a{color:#f00;}
.m-logo a:hover{color:#fff;}
/* 从先到后 */
.g-hd{height:60px;}
.g-bd{height:60px;}
.g-ft{height:60px;}
/* 从父到子 */
.m-list{width:300px;}
.m-list .itm{float:left;}
```

#### 选择器等级

a = 行内样式 style。

b = ID 选择器的数量。

c = 类、伪类和属性选择器的数量。

d = 类型选择器和伪元素选择器的数量。

选择器|	等级(a,b,c,d)
---|---
`style=””`|	1,0,0,0
`#wrapper #content {}`|	0,2,0,0
`#content .dateposted {}`|	0,1,1,0
`div#content {}`|	0,1,0,1
`#content p {}`|	0,1,0,1
`#content {}`|	0,1,0,0
`p.comment .dateposted {}`|	0,0,2,1
`div.comment p {}`|	0,0,1,2
`.comment p {}`|	0,0,1,1
`p.comment {}`|	0,0,1,1
`.comment {}`|	0,0,1,0
`div p {}`|	0,0,0,2
`p {}`|	0,0,0,1

### 优化方案

#### 值缩写

缩写值可以减少 CSS 文件大小，并增加可读性和可维护性。

但并非所有的值都必须缩写，因为当一个属性的值缩写时，总是会将所有项都设置一遍，而有时候我们不希望设置值里的某些项。

```css
/* 比如我们用下面这个样式来让某个定宽的容器水平居中，我们要的只是left和right，
 * 而top和bottom不是这个样式要关心的（如果设置了反倒会影响其他样式在这个容器上的使用），
 * 所以这时我们就不需要缩写
 */
.f-mgha{margin-left:auto;margin-right:auto;}
/* 比如下面这个模块的样式设置，我们确实需要设置padding的所有项，于是我们就可以采用缩写 */
.m-link{padding:6px 12px;}
```

常用的缩写方法请参见代码格式。

#### 避免耗性能的属性

以下所举列的属性可能造成渲染性能问题。不过有时候需求大于一切……

```css
/* expression */
.class{width:expression(this.width>100?'100px':'auto');}
/* filter */
.class{filter:alpha(opacity=50);}
```

#### 选择器合并

即CSS选择器组合，可以一次定义多个选择器，为你节省很多字节和宝贵时间。

通常我们会将定义相同的或者有大部分属性值相同（确实是因为相关而相同）的一系列选择器组合到一起（采用逗号的方法）来统一定义。

```css
/* 以下对布局类选择器统一做了清除浮动的操作 */
.g-hd:after,.g-bd:after,.g-ft:after{display:block;visibility:hidden;clear:both;height:0;content:".";}
.g-hd,.g-bd,.g-ft{zoom:1;}
/* 通常background总是会占用很多字节，所以一般情况下，我们都会这样统一调用 */
.m-logo,.m-help,.m-list li,.u-tab li,.u-tab li a{background:url(../images/sprite.png) no-repeat 9999px 9999px;}
.m-logo{background-position:0 0;}
/* 以下是某个元件的写法，因为确实很多元素是联动的或相关的，所以采用了组合写法，可以方便理解和修改 */
.u-tab li,.u-tab li a{display:inline;float:left;height:30px;line-height:30px;}
.u-tab li{margin:0 3px;}
.u-tab li a{padding:0 6px;}
```

#### 背景图优化合并

##### 图片本身的优化：

1. 图像质量要求和图像文件大小决定你用什么格式的图片，用较小的图片文件呈现较好的图像质量。
2. 当图片色彩过于丰富且无透明要求时，建议采用 `jpg` 格式并保存为较高质量。
3. 当图片色彩过于丰富又有透明或半透明要求或阴影效果时，建议采用 `png24` 格式，并对 IE6 进行 `png8` 退化（或在不得已情况下使用滤镜）。
4. 当图片色彩不太丰富时无论有无透明要求，请采用 `png8` 格式，大多数情况下建议采用这种格式。
5. 当图片有动画时，只能使用 `gif` 格式。
6. 你可以使用工具对图片进行再次压缩，但前提是不会影响色彩和透明。

##### 多张图片的合并：

1. 单个图标之间必须保留空隙，空隙大小由容器大小及显示方式决定。这样做的好处是既考虑了“容错性”又提高了图片的可维护性。
2. 图标的排列方式，也由容器大小及显示方式决定。排列方式分为以下几种：横向排列（容器宽度有限）、纵向排列（容器高度有限）、斜线排列（容器宽高不限），靠左排列（容器背景居左）、靠右排列（容器背景居右）、水平居中排列（容器背景水平居中）、垂直居中排列（容器背景垂直居中）。
3. 合并后图片大小不宜超过 `50K`，建议大小在 `20K-50K` 之间。
4. 为保证多次修改后的图片质量，请保留一份PSD原始图，修改和添加都在 PSD 中进行，最后导出 png。

##### 分类合并：

并不是把所有的图标都合并在一张图片里就是最好的，除了要控制图片大小之外还要注意以下方法。

1. 按照图片排列方式，把排列方式一样的图片进行合并，便于样式控制。
2. 按照模块或元件，把同属于一个模块或元件的图片进行合并，方便模块或元件的维护。
3. 按照图片大小，把大小一致或差不多的图片进行合并，可充分利用图片空间。
4. 按照图片色彩，把色彩一致或差不多的图片进行合并，保证合并后图片的色彩不过于丰富，可防止色彩失真。
5. 综合以上方法进行合并。

#### Hack的避免

1. 当避免的代价较大时，可以使用 Hack 而不避免，比如你需要增加很多 HTML 或多写很多 CSS 时会得不偿失。
2. 丰富的实战经验可以帮助你了解那些常见问题并用多种不同的思路来避免它，所以经验和思维方法在这里显得很重要。
3. 根据你自己的能力来解决 Hack的问题，我们不建议你用一个自己都没有把握的方法来避免 Hack，因为也许你这个方法本身存在你没有发现的问题。

#### 如果CSS可以做到，就不要使用JS

让 CSS 做更多的事，减轻 JS 开发量。

1. 用 CSS 控制交互或视觉的变化，JS 只需要更改 className。
2. 利用 CSS 一次性更改多个节点样式，避免多次渲染，提高渲染效率。
3. 如果你的产品允许不兼容低版本浏览器，那么动画实现可以交给 CSS。

#### 便于阅读修改

如果你做到了 “CSS规范” 的所有要求，自然你也就写出了一个便于阅读和修改的漂亮的 CSS。

当然，代码格式和命名规则是相对重要一些的。

#### 清晰的CSS模块

如果你做到了命名规则的要求，你的 CSS 模块也就清晰可见了。

`用“注释”来说明每一个模块对于较大的 CSS 文件`来说显得尤为重要。

#### 文件压缩

合理的书写 CSS 能很大程度上减少文件大小，完成后，在不损坏文件内容的情况下，`想尽一切办法压缩你的CSS`，你可以借助压缩工具把注释和多余的空格、换行去掉。

压缩工具详见：“HTML/CSS工具”部分。

#### 其他格式优化

优化方法请参见代码格式。

### 最佳实践

#### 最佳选择器写法（模块）

```css
/* 这是某个模块 */
.m-nav{}/* 模块容器 */
.m-nav li,.m-nav a{}/* 先共性  优化组合 */
.m-nav li{}/* 后个性  语义化标签选择器 */
.m-nav a{}/* 后个性中的共性 按结构顺序 */
.m-nav a.a1{}/* 后个性中的个性 */
.m-nav a.a2{}/* 后个性中的个性 */
.m-nav .z-crt a{}/* 交互状态变化 */
.m-nav .z-crt a.a1{}
.m-nav .z-crt a.a2{}
.m-nav .btn{}/* 典型后代选择器 */
.m-nav .btn-1{}/* 典型后代选择器扩展 */
.m-nav .btn-dis{}/* 典型后代选择器扩展（状态） */
.m-nav .btn.z-dis{}/* 作用同上，请二选一（如果可以不兼容IE6时使用） */
.m-nav .m-sch{}/* 控制内部其他模块位置 */
.m-nav .u-sel{}/* 控制内部其他元件位置 */
.m-nav-1{}/* 模块扩展 */
.m-nav-1 li{}
.m-nav-dis{}/* 模块扩展（状态） */
.m-nav.z-dis{}/* 作用同上，请二选一（如果可以不兼容IE6时使用） */
```

#### 统一语义理解和命名

##### 布局（.g-）

语义|	命名|	简写
---|---|---
文档|	doc|	doc
头部|	head|	hd
主体|	body|	bd
尾部|	foot|	ft
主栏|	main|	mn
主栏子容器|	mainc	mnc
侧栏|	side|	sd
侧栏子容器|	sidec|	sdc
盒容器|	wrap/box|	wrap/box

##### 模块（.m-）、元件（.u-）

语义|	命名|	简写
---|---|---
导航|	nav|	nav
子导航| subnav|	snav
面包屑|	crumb|	crm
菜单|	menu|	menu
选项卡|	tab|	tab
标题区|	head/title|	hd/tt
内容区|	body/content|	bd/ct
列表|	list|	lst
表格|	table|	tb
表单|	form|	fm
热点|	hot|	hot
排行|	top|	top
登录|	login|	log
标志|	logo|	logo
广告|	advertise|	ad
搜索|	search|	sch
幻灯|	slide|	sld
提示|	tips|	tips
帮助|	help|	help
新闻|	news|	news
下载|	download|	dld
注册|	regist|	reg
投票|	vote|	vote
版权|	copyright|	cprt
结果|	result|	rst
标题|	title|	tt
按钮|	button|	btn
输入|	input|	ipt

##### 功能（.f-）

语义|	命名|	简写
--|---|---
浮动清除|	clearboth|	cb
向左浮动|	floatleft|	fl
向右浮动|	floatright|	fr
内联块级|	inlineblock|	ib
文本居中|	textaligncenter|	tac
文本居右|	textalignright|	tar
文本居左|	textalignleft|	tal
垂直居中|	verticalalignmiddle|	vam
溢出隐藏|	overflowhidden|	oh
完全消失|	displaynone|	dn
字体大小|	fontsize|	fs
字体粗细|	fontweight|	fw

##### 皮肤（.s-）

语义|	命名|	简写
--|---|---
字体颜色|	fontcolor|	fc
背景|	background|	bg
背景颜色|	backgroundcolor|	bgc
背景图片|	backgroundimage|	bgi
背景定位|	backgroundposition|	bgp
边框颜色|	bordercolor|	bdc

##### 状态（.z-）

语义|	命名|	简写
---|---|---
选中|	selected|	sel
当前|	current|	crt
显示|	show|	show
隐藏|	hide|	hide
打开|	open|	open
关闭|	close|	close
出错|	error|	err
不可用|	disabled|	dis

## 补充

### css reset

重置样式，清除浏览器默认样式，并配置适合设计的基础样式（强调文本是否大多是粗体、主文字色，主链接色，主字体等）。

```css
/* reset */
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;}
header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;}
table{border-collapse:collapse;border-spacing:0;}
caption,th{text-align:left;font-weight:normal;}
html,body,fieldset,img,iframe,abbr{border:0;}
i,cite,em,var,address,dfn{font-style:normal;}
[hidefocus],summary{outline:0;}
li{list-style:none;}
h1,h2,h3,h4,h5,h6,small{font-size:100%;}
sup,sub{font-size:83%;}
pre,code,kbd,samp{font-family:inherit;}
q:before,q:after{content:none;}
textarea{overflow:auto;resize:none;}
label,summary{cursor:default;}
a,button{cursor:pointer;}
h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;}
del,ins,u,s,a,a:hover{text-decoration:none;}
body,textarea,input,button,select,keygen,legend{font:12px/1.14 arial,\5b8b\4f53;color:#333;outline:0;}
body{background:#fff;}
a,a:hover{color:#333;}

```

### css function

功能样式模板，从常用样式方法中抽离，按需使用。

```css
/* function */
.f-cb:after,.f-cbli li:after{display:block;clear:both;visibility:hidden;height:0;overflow:hidden;content:".";}
.f-cb,.f-cbli li{zoom:1;}
.f-ib{display:inline-block;*display:inline;*zoom:1;}
.f-dn{display:none;}
.f-db{display:block;}
.f-fl{float:left;}
.f-fr{float:right;}
.f-pr{position:relative;}
.f-prz{position:relative;zoom:1;}
.f-oh{overflow:hidden;}
.f-ff0{font-family:arial,\5b8b\4f53;}
.f-ff1{font-family:"Microsoft YaHei",\5fae\8f6f\96c5\9ed1,arial,\5b8b\4f53;}
.f-fs1{font-size:12px;}
.f-fs2{font-size:14px;}
.f-fwn{font-weight:normal;}
.f-fwb{font-weight:bold;}
.f-tal{text-align:left;}
.f-tac{text-align:center;}
.f-tar{text-align:right;}
.f-taj{text-align:justify;text-justify:inter-ideograph;}
.f-vam,.f-vama *{vertical-align:middle;}
.f-wsn{word-wrap:normal;white-space:nowrap;}
.f-pre{overflow:hidden;text-align:left;white-space:pre-wrap;word-wrap:break-word;word-break:break-all;}
.f-wwb{white-space:normal;word-wrap:break-word;word-break:break-all;}
.f-ti{overflow:hidden;text-indent:-30000px;}
.f-ti2{text-indent:2em;}
.f-lhn{line-height:normal;}
.f-tdu,.f-tdu:hover{text-decoration:underline;}
.f-tdn,.f-tdn:hover{text-decoration:none;}
.f-toe{overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis;}
.f-csp{cursor:pointer;}
.f-csd{cursor:default;}
.f-csh{cursor:help;}
.f-csm{cursor:move;}
.f-usn{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;}
```

### css media

通过媒体查询为不同的设备和大小配置不同的样式。

```css
/* media */
/* 横屏 */
@media screen and (orientation:landscape){
}
/* 竖屏 */
@media screen and (orientation:portrait){
}
/* 窗口宽度<960,设计宽度=768 */
@media screen and (max-width:959px){
}
/* 窗口宽度<768,设计宽度=640 */
@media screen and (max-width:767px){
}
/* 窗口宽度<640,设计宽度=480 */
@media screen and (max-width:639px){
}
/* 窗口宽度<480,设计宽度=320 */
@media screen and (max-width:479px){
}
/* windows UI 贴靠 */
@media screen and (-ms-view-state:snapped){
}
/* 打印 */
@media print{
}

```

### css animation

常见动画效果的集合，主要用于效果演示和参考（点击查看代码库演示），也可以直接调用。

>由于内容较多，我传到了百度网盘，链接如下：
> 链接: [https://pan.baidu.com/s/1kUPWr6v](https://pan.baidu.com/s/1kUPWr6v) 密码: t4ad

部分代码

```css
/* animation */
/* 淡入 */
.a-fadein{-webkit-animation-name:fadein;-moz-animation-name:fadein;-ms-animation-name:fadein;animation-name:fadein;}
/* define */
/* 淡入 */
@-webkit-keyframes fadein{
    0%{opacity:0;}
    100%{opacity:1;}
}
@-moz-keyframes fadein{
    0%{opacity:0;}
    100%{opacity:1;}
}
@-ms-keyframes fadein{
    0%{opacity:0;}
    100%{opacity:1;}
}
@keyframes fadein{
    0%{opacity:0;}
    100%{opacity:1;}
}
```