<style lang="less">
.RollNumber {
  @li_height: 40/25rem;
  @times: 0.5s;

  color: #000;
  background-color: #fff;
  border-radius: 20/25rem;
  display: inline-block;
  padding: 0 2%;
  text-align: center;
  font-weight: 800;
  font-size: 36/25rem;
  line-height: @li_height;
  .u_roll_content {
    float: left;
    height: @li_height;
    overflow: hidden;
    .u_roll_item {
      width: 30/25rem;
      height: @li_height;
      background-color: transparent;
      text-align: center;
    }
  }
  /*清除浮动*/
  .clear:after {
    content: "\20";
    clear: both;
    height: 0;
    display: block;
  }

  /* 使用less 循环*/

  .loop_roll( @count )when( @count >= 0 ) {
    @name: "rolling_@{count}";
    .rolling_@{count} {
      animation: @name @times ease forwards;
    }
    .loop_roll((@count - 1));
  }

  .loop_keyframes(@number, @count: 0) when(@count <= @number) {
    @rollname: 'rolling_@{count}';
    @keyframes @rollname {
      .precent_item(9);
    }
    .loop_keyframes(@number,(@count + 1));
  }

  .precent_item(@n, @index: 0) when(@index <= @n) {
    @keyframeSel: percentage(100/@n*@index);
    @animanal_times: -@li_height*@index;
    @{keyframeSel} {
      transform: translate3d(0, @animanal_times, 0);
    }
    .precent_item(@n, (@index + 1));
  }



  .loop_roll(9);
  .loop_keyframes(9);
  /* less循环结束*/
}
</style>

<template lang="html">
  <div class="RollNumber clear">
      <ul class="u_roll_content clear" v-for="item in String(number)">
        <li class="u_roll_item" v-for="item2 in 10" :class="['rolling_' + item]">{{ item2 - 1 }}</li>
      </ul>
  </div>
</template>

<script>
module.exports = {
  props: {
    number: { type: String }, // 显示的数字
    size: { type: Number, defalut: 1 }, // 组件的尺寸大小
    digit: { type: Number, default: 3 } // 有几位数字
  },
  data: function() {
    return {};
  },
  created: function() {},
  // 初始化钩子函数
  mounted: function() {
    var that = this;
    that.number = that.fillZero(that.number, that.digit);
  },
  // 方法
  methods: {
    onTier: function(msg) {
      this.$tier.close();
      this.$tier.open({
        content: msg,
        btn: ["确定"]
      });
    },
    fillZero: function(number, digit) {
      var len = number.toString().length;
      while (len < digit) {
        number = "0" + number;
        len++;
      }
      return number;
    }
  },
  // 计算属性
  computed: {}
};
</script>

