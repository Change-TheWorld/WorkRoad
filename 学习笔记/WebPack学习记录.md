# 基础

```html
<script type="text/javascript" src="bundle.js" charset="utf-8"></script>

<!--  -->

```

webpack 根据模块的依赖关系进行静态分析，这些文件/`(模块)`会被包含到 bundle.js 文件中。Webpack 会给每个模块分配一个唯一的 id 并通过这个 id 索引和访问模块。 在页面启动时，会先执行 runoob1.js 中的代码，其它模块会在运行 require 的时候再执行。