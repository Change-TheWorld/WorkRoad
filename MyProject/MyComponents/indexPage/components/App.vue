<style>
.roll{
  text-shadow: 2px 2px 2px rgba(30,30,30,0.20);
  color: #f98;
  border: 2px solid #f98;
}

</style>

<template lang="html">
  <div id="main">
    <RollNumber class="roll" :number="number" :size="size" :digit="digit"></RollNumber>
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