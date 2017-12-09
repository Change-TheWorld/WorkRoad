Mock.setup({
  //timeout: '6000-8000'
});

/**
 * $is_anchor //是否是主播  1是主播 2不是主播
 * $is_already_certified //是否已认证 1 已认证 2 未认证
 */
Mock.mock(/anchorCertificationApi/, function (options) {
  console.log('ajax %s %s ', options.url, options.type);
  return Mock.mock({
    "status": 200,
    "desc": "您已实名验证过啦，快去直播间打卡吧！",
    "data": {
        "name": "李本富",
        "card": "230802199112300930"
    }
  });
});

Mock.mock(/anchorCertification/, function(options) {
  console.log('ajax %s %s ', options.url, options.type);
  return Mock.mock({
    "status": 200,
    "desc": "succ",
    "data": {
      "is_anchor": 1,   // 1是主播 2不是主播
      "is_already_certified": 2,  // 1 已认证 2 未认证
    }
  });
});


