<style lang="less">
  .m-flexibleBox {
    position: relative;
    height: 100vh;
    width: 100vw;
    color: red;
    .u-container {
      max-width: 100%;
      max-height: 100%;
    }
  }
  /*
    // iPhone X -> 375/812
    // Samsung Galaxy S8, S8+ -> 360/740
    @media screen and (min-aspect-ratio: 311/640) {}
  */
  @media screen and (min-aspect-ratio: 295/640) {
    .m-flexibleBox {
      color: blue;

  		transform-origin: 50% 50%;
    }
  }
  // 小米MIX, 小米MIX2 -> 360/720
  @media screen and (min-aspect-ratio: 319/640) {
    .m-flexibleBox {
      color: yellow;
  		transform-origin: 50% 50%;
    }
  }
  /*
    // Nexus 5,Nexus 5X, Moto X 二代, OnePlus 5, 坚果 Pro,Oppo R9s Plus (R9s Plus, R11 Plus),
    // Oppo R9s (R9s, R11), 小米Note 3（Note 2, 6, 5S, min) 红米 Note4, Vivo X9 (X9, X9s), HUAWEI P10
    // iPhone 8 (8, 7, 6S, 6) -> 375/667
    // iPhone 8+ (8+, 7+, 6S+, 6+) -> 414/736
    // Nexus 6P, Samsung Galaxy Note 5 (4), Samsung Galaxy S7 (S7, S6, S6 Edge) -> 411/731
    // iPhone SE（SE, 5S, 5C）-> 320/568
    // Android One -> 320 x 569
    // Samsung Galaxy Note 4,5 -> 480 x 853
  */
  @media screen and (min-aspect-ratio: 359/640) {
    .m-flexibleBox {
      color: green;
  		transform-origin: 50% 50%;
    }
  }

  @media screen and (min-aspect-ratio: 379/640) {
    .m-flexibleBox {
      color: purple;
  		transform-origin: 50% 50%;
    }
  }
</style>

<template lang="html">
  <div class="m-flexibleBox" id="m-flexibleBox">
    <div class="u-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/*
    // 判断是调整页面尺寸还是横/竖屏切换
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    // 获取当前设备的 dpr
    var dpr = window.devicePixelRatio;

    //判断手机横竖屏状态
    function hengshuping() {
      var m_width = document.documentElement.clientWidth;
      var m_height = document.documentElement.clientHeight;
      // width 得到的是设备宽度dp值，需要转换成px, 然后除以25，再转成字符串
      m_width = m_width*dpr/25 +'rem';
      m_height = m_height*dpr/25 + 'rem';

      var flexibleBox = document.getElementById('m-flexibleBox');

      console.log(m_width);
      console.log('--- ' + window.orientation);
      if(window.orientation == 180 || window.orientation == 0){
        console.log("竖屏状态！");
      }
      if(window.orientation == 90 || window.orientation == -90){
        console.log("横屏状态！");
      }
      if (m_width > m_height) {
        flexibleBox.style.width = m_width;
        flexibleBox.style.height = m_height;
        //flexibleBox.style.cssText = "top: 0; left: 0; transform: scale(.95, .95); transform-origin: 50% 0;";
        flexibleBox.style.cssText = "transform: scale(.95, .95); transform-origin: 50% 0;";
      } else {
        // 宽改为高，高改为宽
        flexibleBox.style.width = m_height;
        flexibleBox.style.height = m_width;
        //flexibleBox.style.top = (m_height - m_width)/2;
        //flexibleBox.style.left = 0 - (m_height - m_width)/2;

        flexibleBox.style.cssText = "transform: scale(.95, .95); transform-origin: 50% 0; text-size-adjust : none";
        //flexibleBox.style.cssText = "transform: rotate(90deg); text-size-adjust : none";
      }
    }
    // 添加监听
    window.addEventListener(evt, hengshuping, false);
    */
</script>