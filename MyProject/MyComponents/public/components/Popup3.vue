<style lang="less">
  .Popup2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999999;
    font-size: 30/25rem;
    .popup-main {
      min-width: 60%;
      min-height: 50/25rem;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10/25rem;
      text-align: center;
    }
    .popup-title {
      line-height: 50/25rem;
      box-shadow: 0 1px 0 #ddd;
    }
    .popup-content {
      padding: 35/25rem;
      line-height: 35/25rem;
    }
    .popup-btns {
      display: flex;
      box-shadow: 0 -1px 0 #ddd;
      line-height: 50/25rem;
      span {
        display: block;
        flex: 1;
        padding: 0 .5rem;
        user-select: none;
        box-shadow: -1px 0 0 #ddd, 0 -1px 0 #ddd;
        cursor: pointer;
      }
    }
  }
</style>

<template lang="html">
  <div class="Popup" v-if="is_show">
    <div class="popup-main">
      <div class="popup-title">{{title}}</div>
      <div class="popup-content">{{content}}</div>
      <div class="popup-btns">
        <span v-for="(item, index) in btns" @click="onClick(index)">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    title: String,
    content: String,
    btns: Array,
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: function() {
    return {
      is_show: this.value,
    }
  },
  watch: {
    value: function(val) {
      this.is_show = val;
    },
    is_show: function(val) {
      this.$emit('input', val);
    },
  },
  methods: {
    onClick: function(index) {
      var that = this;
      that.is_show = false;
      that.$emit('onClick', index);
    },
  },
}
</script>