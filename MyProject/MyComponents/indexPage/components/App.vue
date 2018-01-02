<style lang="less">
.main {
  width: 100%;
  .u_compontent {
    height: 200/25rem;
    margin: 3%;
    border: 1px solid orange;
  }
  .u_compontent_0 {

  }

}



</style>

<template lang="html">
  <div class="main">
    <div class="u_compontent u_compontent_0">
      <RollNumber class="roll" :number="number" :size="size" :digit="digit"></RollNumber>
    </div>
    <div class="u_compontent u_compontent_1">
      <QuestionMarking canBeClicked="1" v-model="star" starSize="1"></QuestionMarking>
    </div>
    <div class="u_compontent u_compontent_1">

    </div>
    <div class="u_compontent u_compontent_3">

    </div>
    <div class="u_compontent u_compontent_0">

    </div>
    <div class="u_compontent u_compontent_0">

    </div>
    <div class="u_compontent u_compontent_0">

    </div>
    <div class="u_compontent u_compontent_0">

    </div>
    <div class="u_compontent u_compontent_0">

    </div>
    <div class="u_compontent u_compontent_0">

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      number: 39,   // 显示的数字
      size: 1,     // 组件的尺寸大小
      digit: 3,    // 有几位数字

      star: 5, // 默认星星
    };
  },
  components: {
    RollNumber: require('public/components/RollNumber'),
    QuestionMarking: require('public/components/QuestionMarking'),
  },
  mounted: function() {
    var that = this;
  },
  methods: {}
};
</script>