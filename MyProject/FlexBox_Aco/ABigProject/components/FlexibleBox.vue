<style lang="less">
  .m-flexibleBox {
    width: 100%;
    height: 1334/25rem;
    border: 2px solid red;
  }
  // 
  @media screen and (min-aspect-ratio: 1/1) {
    .m-flexibleBox {
      border: 2px solid green;
    }
  } 
  // 
  @media screen and (min-aspect-ratio: 2/1) {
    .m-flexibleBox {
      border: 2px solid blue;
    }
  } 
  // 
  @media screen and (min-aspect-ratio: 3/1) {
    .m-flexibleBox {
      border: 2px solid yellow;
    }
  }
</style>

<template lang="html">
  <div class="m-flexibleBox">

  </div>
</template>

<script>
    
</script>