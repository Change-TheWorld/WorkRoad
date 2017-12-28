<style lang="less">
.clear {
  clear: both;
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
}
.clearfix {
  *zoom: 1;
}
.clearfix:after {
  content: "\20";
  clear: both;
  height: 0;
  display: block;
  overflow: hidden;
} /*清除浮动*/

@li_height: 50/25rem;
@times: 0.5s;

.RollNumber {
  color: #ED641F;
  background-color: #fff;
  border: 3/25rem solid #A15B2E;
  box-shadow: 0 2px 4px 0 rgba(30,30,30,0.20);
  border-radius: 20/25rem;
  width: 160/25rem;
  padding: 0 2%;
  text-align: center;
  font-weight: 800;
  font-size: 42/25rem;
  .m_roll_container {
    height: 50/25rem;
    text-shadow: 2px 2px 2px rgba(30,30,30,0.20);
    .u_roll_content {
      float: left;
      height: 50/25rem;
      overflow: hidden;
      .u_roll_item {
        height: 50/25rem;
        width: 30/25rem;
        background-color: transparent;
        text-align: center;
        line-height: 50/25rem;
      }
    }
  }

  .rolling_0 {
    animation: rolling_0 @times ease forwards;
  }
  .rolling_1 {
    animation: rolling_1 @times ease forwards;
  }
  .rolling_2 {
    animation: rolling_2 @times ease forwards;
  }
  .rolling_3 {
    animation: rolling_3 @times ease forwards;
  }
  .rolling_4 {
    animation: rolling_4 @times ease forwards;
  }
  .rolling_5 {
    animation: rolling_5 @times ease forwards;
  }
  .rolling_6 {
    animation: rolling_6 @times ease forwards;
  }
  .rolling_7 {
    animation: rolling_7 @times ease;
  }
  .rolling_8 {
    animation: rolling_8 @times ease;
  }
  .rolling_9 {
    animation: rolling_9 @times ease;
  }
  .rolling_10 {
    animation: rolling_10 @times ease;
  }

  /*-webkit-*/
  @-webkit-keyframes rolling_0 {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, @li_height*1, 0);
    }
  }
  @-webkit-keyframes rolling_1 {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, @li_height*1, 0);
    }
  }
  @-webkit-keyframes rolling_2 {
    0% {
      transform: translate3d(0, @li_height*0, 0);
    }
    50% {
      transform: translate3d(0, @li_height*1, 0);
    }
    100% {
      transform: translate3d(0, @li_height*2, 0);
    }
  }
  @-webkit-keyframes rolling_3 {
    0% {
      transform: translate3d(0, @li_height*0, 0);
    }
    33.3% {
      transform: translate3d(0, @li_height*1, 0);
    }
    66.6% {
      transform: translate3d(0, @li_height*2, 0);
    }
    100% {
      transform: translate3d(0, @li_height*3, 0);
    }
  }
  @-webkit-keyframes rolling_4 {
    0% {
      transform: translate3d(0, @li_height*0, 0);
    }
    20% {
      transform: translate3d(0, @li_height*1, 0);
    }
    50% {
      transform: translate3d(0, @li_height*2, 0);
    }
    75% {
      transform: translate3d(0, @li_height*3, 0);
    }
    100% {
      transform: translate3d(0, @li_height*4, 0);
    }
  }
  @-webkit-keyframes rolling_5 {
    0% {
      transform: translate3d(0, @li_height*0, 0);
    }
    16.6% {
      transform: translate3d(0, @li_height*1, 0);
    }
    50% {
      transform: translate3d(0, @li_height*2, 0);
    }
    66.6% {
      transform: translate3d(0, @li_height*3, 0);
    }
    83.3% {
      transform: translate3d(0, @li_height*4, 0);
    }
    100% {
      transform: translate3d(0, @li_height*5, 0);
    }
  }
  @-webkit-keyframes rolling_6 {
    0% {
      transform: translate3d(0, @li_height*0, 0);
    }
    14.2% {
      transform: translate3d(0, @li_height*1, 0);
    }
    28.5% {
      transform: translate3d(0, @li_height*2, 0);
    }
    42.8% {
      transform: translate3d(0, @li_height*3, 0);
    }
    57.1% {
      transform: translate3d(0, @li_height*4, 0);
    }
    71.4% {
      transform: translate3d(0, @li_height*5, 0);
    }
    85.7% {
      transform: translate3d(0, @li_height*6, 0);
    }
    100% {
      transform: translate3d(0, @li_height*1, 0);
    }
  }
  @-webkit-keyframes rolling_7 {
    0% {
      transform: translate3d(0, @li_height*0, 0);
    }
    50% {
      transform: translate3d(0, @li_height*1, 0);
    }
  }
  @-webkit-keyframes rolling_8 {
    0% {
      transform: translate3d(0, @li_height*0, 0);
    }
    50% {
      transform: translate3d(0, @li_height*1, 0);
    }
  }
  @-webkit-keyframes rolling_9 {
    0% {
      transform: translate3d(0, @li_height*0, 0);
    }
    50% {
      transform: translate3d(0, @li_height*1, 0);
    }
  }
}
</style>

<template lang="html">
  <div class="RollNumber clearfix">
    <div class="m_roll_container clearfix">
      <ul class="u_roll_content clearfix" v-for="item in number">
        <li class="u_roll_item" v-for="item2 in 10" :class="['rolling_' + item]">{{item2 - 1}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    number: { type: Number }, // 显示的数字
    size: { type: Number }, // 组件的尺寸大小
    digit: { type: Number } // 有几位数字
  },
  data: function() {
    return {};
  },
  // 初始化钩子函数
  mounted: function() {
    var that = this;
    that.number = (that.fillZero(that.number, that.digit)).split('');
    console.log('----------', that.number);
  },
  // 方法
  methods: {
    fillZero: function(number,digit) {
      var len = number.toString().length;
      while (len < digit) {
        number = "0" + number;
        len++;
      }
      return number;
    },
  },
  // 计算属性
  computed: {}
};
</script>