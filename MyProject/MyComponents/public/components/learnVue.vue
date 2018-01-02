<style lang="less">
.learnVue {
  height: 100%;
  .test {
    border: 1px solid green;
    padding: 3%;
  }
}
</style>

<template lang="html">
<div class="learnVue">
  <div class="test test01">{{msg}}</div>
  <div class="test test01">
    <ol>
      <li v-for="todo in todos">{{todo.text}}</li>
    </ol>
  </div>
  <div class="test">
    <span :title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
  </div>
  <div class="test">
    <div>
      <input type="text" v-model="testInput">
      <p>{{testInput}}</p>
    </div>
  </div>
  <div class="test">
    <p>{{templateHtml}}</p>
    <p>using v-html <span v-html="templateHtml"></span></p>
  </div>
</div>
</template>

<script>
module.exports = {
  props: {},
  data: function() {
    return {
      msg: "Hello Aco",
      todos: [
        {
          text: "学习 JavaScript"
        },
        {
          text: "学习 Vue"
        },
        {
          text: "整个牛项目"
        }
      ],
      message: "页面加载于 " + new Date().toLocaleString(),
      testInput: "",
      templateHtml: '<span style="color: red;">hhhhh</span>'
    };
  },
  // 初始化钩子函数
  mounted: function() {},
  // 方法
  methods: {},
  // 计算属性
  computed: {}
};
</script>