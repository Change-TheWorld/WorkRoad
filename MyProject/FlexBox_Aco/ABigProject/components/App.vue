<template lang="html">
  <div id="main">
    <FlexibleBox>
      <Background></Background>
      <RealName v-if="is_show" :isAnchor="isAnchor" :isAlreadyCertified="isAlreadyCertified"></RealName>
      <Footer></Footer>
    </FlexibleBox>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      isAnchor: 1,  // 1是主播 2不是主播
      isAlreadyCertified: 2,  // 1 已认证 2 未认证
      is_show: false,
    }
  },
  components: {
    FlexibleBox: require('FlexibleBox'), // 兼容性容器
    Background: require('Background'),  // 背景板
    RealName: require('RealName'),     // 输入的表单
    Footer: require('Footer'),         // footer
  },
  mounted: function () {
    var that = this;
    that.get_page_info();   // 获取用户的一些必要的信息
  },
  methods: {
    get_page_info: function () {
      var that = this;
      var url = '/anchorOperation/anchorCertification/u/' + that.$user.user_id + '/t/' + that.$user.token;
      that.$tier.load();
      that.$ajax.post(url, {
        step: 'getInfo',
        stoken: that.$user.stoken,
      }, function (err, reply) {
        if (err) {
          return that.$tier.one({
            content: '小伙伴们太拥挤了，稍后再试.. #1001',
            btn: ['确定']
          });
        }
        if (reply.status != 200) {
          return that.$tier.one({
            content: reply.desc,
            btn: ['确定']
          });
        }

        that.$tier.close();

        // 显示用户信息，传递参数
        var user_info = reply.data;
        that.isAnchor = user_info.is_anchor;
        that.isAlreadyCertified = user_info.is_already_certified;

        that.is_show = true;  // 强制同步，确定先后
      });

    },
  }
}
</script>
