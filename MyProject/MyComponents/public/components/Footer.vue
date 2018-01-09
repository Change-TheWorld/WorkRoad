<style lang="less">
  .Footer {
    text-align: center;
    color: #fff;
    font-size: 20/25rem;
    line-height: 40/25rem;
    padding: 25/25rem 0;
  }
</style>

<template lang="html">
  <div class="Footer">
    <p>用户参与此活动默认为接受畅聊公司的相关协议与规定</p>
    <p v-if="is_ios">本次活动与苹果公司无关</p>
  </div>
</template>
<style>

</style>
<script>
module.exports = {
  data: function () {
    return {
      is_ios: (/(iphone|ipod|ipad)/i.test(navigator.userAgent)),
    };
  },
}
</script>
