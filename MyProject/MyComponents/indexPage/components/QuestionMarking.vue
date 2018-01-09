<style lang="less">
.QuestionMarking {
  .u_markResult {
    text-align: center;
    height: 40/25rem;
    color: #30b1ff;
  }
  .m_ulBox {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    li {
      width: 60/25rem;
      height: 60/25rem;
      display: inline-block;
    }
    .active {
      background: url(public/img/Stared.png) no-repeat;
      background-size: 100%;
    }
    .unAcitve {
      background: url(public/img/unStar.png) no-repeat;
      background-size: 100%;
    }
    .size_0 {
      width: 35/25rem;
      height: 35/25rem;
    }
    .size_1 {
      width: 60/25rem;
      height: 60/25rem;
    }
  }
}
</style>

<template lang="html">
  <div class="QuestionMarking">
      <p class="u_markResult" v-show="canBeClicked == 1">{{markResult}}</p>
      <ul class="m_ulBox">
          <li v-for="(item, index) in 5" :class="[item > mark_value ? 'unAcitve' : 'active', 'size_' + starSize]" @click="onChoose(item)"></li>
      </ul>
  </div>
</template>

<script>
module.exports = {
  props: {
    canBeClicked: { type: Number }, // 是否可以点击
    value: { type: Number, default: 5 },  // 默认星星
    starSize: { type: Number }  // 星星大小， 0： 小， 1: 大
  },
  data: function() {
    return {
      mark_value: this.value,
      markResult: ""
    };
  },
  components: {
    // xxx: require('x'),
  },
  watch: {
    value: function(val) {
      this.mark_value = val;
    },
    mark_value: function(val) {
      var that = this;
      that.markResult = that.showMarkResult(val);
      that.$emit("input", val);
    }
  },
  methods: {
    showMarkResult: function(index) {
      var that = this;

      switch (index) {
        case 1:
          return "不满意";
        case 2:
          return "一般";
        case 3:
          return "基本满意";
        case 4:
          return "很满意";
        case 5:
          return "非常满意";
        default:
          return "无评分";
      }
    },
    onChoose: function(index) {
      var that = this;
      if (that.canBeClicked == "0") {
        // 避免禁止点击的时候，重复渲染
        return;
      }

      that.markResult = that.showMarkResult(index);
      that.$emit("input", index);
    }
  },
  mounted: function() {
    var that = this;
  },
  filters: {}
};
</script>