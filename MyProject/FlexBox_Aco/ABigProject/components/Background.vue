<style lang="less">
  .g-mainBox {
    min-height: 760/25rem;
    .g-bg {
      background-image: url(public/img/bg.png);
      height: 465/25rem;
      background-size: 100% 100%;
    }
    .g-form {
      width: 100%;
      height: 100%;
      margin-top: 5%;
      .u-title {
        text-align: center;
        font-size: 34/25rem;
        color: rgb(30, 30, 30);
        line-height: 0.588;
        margin-bottom: 5%;
      }
      .u-text {
        margin: 5%;
      }
    }
  }
</style>

<template lang="html">
  <div class="g-mainBox">
    <div class="g-bg"></div>
    <div class="g-form">
      <h2 class="u-title">
        实名认证
      </h2>
      <hr>
      <div class="u-text">恭喜您通过了派派主持人的选拔，派派主持将采取实名制，请您进行实名认证，派派不会将您的信息使用到其他地方，请您放心。</div>
    </div>
  </div>
</template>