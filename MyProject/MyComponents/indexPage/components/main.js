Vue.prototype.$ajax = h5ajax;
Vue.prototype.$tier = tier;

fTalkJsBridge.invoke('title_option', { text: document.title }, function () {});
fTalkJsBridge.invoke('get_user_info', {}, function (reply) {
  reply = reply || {};
  reply.token = reply.token || 0;
  reply.user_id = reply.user_id || 0;
  reply.is_online = !(/^9008[\d]{12}$/.test(String(reply.user_id)));
  reply.is_ios = (/(iphone|ipod|ipad)/i.test(navigator.userAgent));
  if (!reply.user_id || !reply.token) {
    return tier.one({ content: "获取用户信息失败 #1001", btn: ['确定'] });
  }
  if (!reply.is_online) {
    var $script = document.createElement('script');
    $script.src = "//source.ifreetalk.com/page/base/vconsole.min_9dbca47.js";
    document.querySelector('head').appendChild($script);
  }

  Vue.prototype.$user = reply;
  var vm = new Vue({
    el: '#app',
    components: { App: require('App') }
  });
});
