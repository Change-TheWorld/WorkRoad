# 基础

与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。

## 基本使用

```html
<div id="app">
  {{ message }}
  <ol><li v-for="todo in todos">{{todo.text}}</li></ol>
</div>

<script src="https://unpkg.com/vue"></script>
<script>
  var app = new Vue({
    el: '#app',
    data: {
      msg: 'Hello Aco',
      todos: [{
          text: '学习 JavaScript'
        },
        {
          text: '学习 Vue'
        },
        {
          text: '整个牛项目'
        }
      ]
    },
  })
</script>

```


























