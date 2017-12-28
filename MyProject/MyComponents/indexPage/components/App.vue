<style>

</style>

<template lang="html">
  <div id="main">
    <RollNumber :number="number" :size="size" :digit="digit"></RollNumber>
    <Footer></Footer>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      number: 469,   // 显示的数字
      size: 1,     // 组件的尺寸大小
      digit: 4,    // 有几位数字
    };
  },
  components: {
    RollNumber: require('public/components/RollNumber'),
  },
  mounted: function() {
    var that = this;
  },
  methods: {}
};
</script>