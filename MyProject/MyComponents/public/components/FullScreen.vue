<style lang="less">
  .FullScreen {
    &[full] {
      padding-top: 177.8%;
    }
    padding-top: 163.9%;

    position: absolute;
    top: 50%;
    left: 50%;
    width: 30rem;
    height: 0;
    transform: translate(-50%, -50%);
    transform-origin: 0 0;
    overflow: hidden;
    & > * {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>

<template lang="html">
  <div class="FullScreen"><slot></slot></div>
</template>

<script>

module.exports = {
  // full属性为全屏否则为带标题
  data: function() {
    return {
      resizeTimer: null,
    };
  },
  mounted: function () {
    var that = this;
    var rootElement = document.documentElement;
    var fullScreenElement = document.querySelector('.FullScreen');
    function resize(delay) {
      if (that.resizeTimer) {
        clearTimeout(that.resizeTimer);
        that.resizeTimer = null;
      }
      that.resizeTimer = setTimeout(function() {
        var ratio = 0.617 * rootElement.clientHeight / rootElement.clientWidth;
        if (ratio > 1) ratio = 1;
        if (fullScreenElement) {
          fullScreenElement.style.transform = fullScreenElement.style.WebkitTransform = 'scale(' + ratio + ') translate(-50%, -50%)';
        }
      }, delay || 500);
    }
    resize(1);
    window.addEventListener("resize", resize);
  }
}
</script>