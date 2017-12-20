<style>
  .header-wrap {
    text-align: center;
    line-height: 80/25rem;
  }
</style>

<template lang="html">
  <div id="main">
    <Header class="header-wrap" header="基础模版样例"></Header>
    <Popup v-model="is_show" title="标题" :content="popup_content" :btns="popup_btns" @onClick="on_popup"></Popup>
    <p class="tc"><img :src="src"> {{popup_value}}</p>
    <Footer></Footer>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      src: __uri('public/img/prizeCharm.png'),    // __uri() fis构建转换函数
      popup_value: '',
      is_show: false,
      popup_content: '点击确定2s后继续打开吗？',
      popup_btns: ['确定','取消'],
    }
  },
  components: {
    Header: require('Header'),
    Popup: require('public/components/Popup'),
    Footer: require('Footer/Footer'),
  },
  mounted: function () {
    var that = this;
    that.get_page_info();
  },
  methods: {
    on_popup: function (index) {
      var that = this;
      that.popup_value = index;
      if (index == 0) {
        setTimeout(function () {
          that.is_show = true;
        }, 2000);
      }
    },
    get_page_info: function () {
      var that = this;

      that.$tier.load();
      that.$ajax.get('/getInfo/', function(err, reply) {
        that.$tier.close();
        if (err) return that.$tier.one({ content: reply.desc || '服务器繁忙 #2001', btn: ['确定'] });
        if (reply.status != 200) return that.$tier.one({ content: reply.desc || '服务器繁忙 #2002', btn: ['确定'] });
        // 请求成功
        that.is_show = true;
      });
    }
  }
}
</script>