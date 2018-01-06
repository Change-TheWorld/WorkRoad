## 使用上的注意事项

### Android 分享使用复制链接的方式

* Android 线上版本（2016年7月16日之前）分享接口不能正常使用
* 现象：分享结果不能指定还是每周任务一样

### 分享链接使用短网址

* 多数接口都没有没有做 HTML 解码，导致出现乱码的情况。
* 避免出现 "?"、"&"，链接使用短网址

## 参考文档

* [浏览器中的测试方法](http://gitlab.17paipai.cn/web_dev/ftalk_javascript_bridge/wikis/browser-test)

## 窗体激活事件

[2016年6月3日 添加]

'fTalkJsBridgeResume' // 窗体激活
'fTalkJsBridgePause' // 窗体失去激活

### Native 调用

```js
var event = document.createEvent('Event');
event.initEvent('fTalkJsBridgeResume', true, false);
window.dispatchEvent(event);
```

### 页面监听

```js
// 用户回到页面
window.addEventListener('fTalkJsBridgeResume', function() {
});

// 用户离开页面
window.addEventListener('fTalkJsBridgePause', function() {
});

// 用户信息改变 // 「2016年10月19日 添加」
window.addEventListener('fTalkJsBridgeUserChange', function() {
});
```

## JS 回调指令说明

### 获取客户端用户基本信息

+ 指令： `get_user_info`
+ 参数：

```
{}
```

+ 回调返回：

```js
{
  "user_id": "123122", // 用户 ID
  "nickname": "无名" // 昵称
  "sex": 1, // 性别 1 男性
  "token": "", // API token
  "stoken": "", // 支付相关 token
  "source_id": "", // 来源 ID
  "version": "1.3.1", // 客户端版本
  "chatbar_privilege_value": 0, //
  "chatbar_id": 0, //
  "family_privilege_value": 0, //
  "cash": 0, //
  "prize_cash": 0, //
  "section_id": "1232", // 服 ID // [2015.11.14 新增]
  "gold_coin": 1002,  //  金币数 // [2016.10.18 新增]
  "protocol": 23 // 协议版本号 // [2016.10.18 新增]
}
```

### 通知客户端开始或结束loading动画

[2016年6月12日]

+ 指令： `to_control_local_progress`
+ 参数：

```
{
  "index": 1 // (1开始loading动画  2结束loading动画   3 黑的小tip弹窗（5月中旬版本才加上）),
  "text": "正在加载"//(显示的文案，当index为1或3的时候带上)
}
```

+ 回调返回：

```js
{}
```


### 获取坑位JS命令

[2016年5月28日]

+ 指令： `get_npc_slot_index`
+ 参数：

```
{
  "npc_action_id": 7 // (保镖 6 秘书 7)
}
```

+ 回调返回：

```js
{
  "npc_slot_index": 1 // 返回曹位
}
```

### 分享

+ 分享到微信，指令：`share_wechat`
+ 分享到 QZone，指令：`share_qzone`
+ 分享到微博，指令：`share_sina`
+ 分享给微信好友，指令：`share_wechat_friend`
+ 分享给 QQ 好友，指令：`share_qq_friend`
+ 分享给手机联系人，指令：`share_phone_contact`   !!!!仅限红包分享 使用!!!!
+ 参数：

```js
{
  "title": "分享标题", // 分享标题
  "img_url": "http://file.ifreetalk.com/info/logo_20161130.png", // 预览图标
  "call_system":   1,   //  是否调用系统分享。只能用于share_wechat、share_wechat_friend、share_qq_friend
  "picture_url":  "xxxxxxx",   // 系统分享  图片的链接 （用于Android）  
  "content": "分享内容", // 分享内容
  "url": "http://www.17paipai.cn/", // 分享地址
  "callback_url ": "http://section.17paipai.cn/success", // 「可选项」分享成功回调地址 // 2016-1-25 添加
}
```

+ 回调返回

```
{
  "status": 1 // 分享结果 // 1:成功 2:失败
}
```

### 跳转到好玩应用界面

> [2015.06.11修改]

+ 指令：`to_recommend_app_view`
+ 参数：

```
{}
```

+ 回调返回：

```
{}
```

### 跳转到充值界面

+ 指令：`to_recharge_view`
+ 参数：

```js
{
  "from": "" // 原样带到充值链接的 from 参数中
}
```

+ 回调返回：

```js
{}
```

### 跳转到个人信息界面

+ 指令：`to_peer_info_view`
+ 参数：

```js
{
  "peer_id": "" // 目标用户 ID
}
```

+ 回调返回：
```js
{}
```

### 跳转到私聊界面

+ 指令：`to_peer_chat_view`
+ 参数：

```js
{
  "peer_id": "" // 目标用户 ID
}
```

+ 回调返回：

```js
{}
```

### 跳转任务界面

「2016年9月10日」 停用！！！

+ 指令：`to_task_view`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 跳转活动界面

+ 指令：`to_activity_view`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 跳转排行榜界面

+ 指令：`to_rank_view`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 跳转吧圈界面

+ 指令：`to_moment_view`
+ 参数：

```js
{
  "category": 1 // 吧圈类别 // 0:推荐 1:最新 2:精华
}
```

+ 回调返回：

```js
{}
```

### 跳转到聊吧聊天界面

+ 指令：`to_chatbar_chat_view`
+ 参数：

```js
{
  "chatbar_id": 30100, // 聊吧 ID
  "chatbar_type": 0, // 0：活动房间，1：新版房间 [2016年11月19日 添加]
  "is_live_mc": 1,   // 1: 直播房 0: 老房间 [2017年06月17日 添加]
}
```

+ 回调返回：

```js
{}
```

### 跳转创建家族页面/原创建聊吧 @董小龙 20161115 添加 @20161116 产品需求变更，指令暂时取消

+ 指令：`to_chatbar_create_view`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 跳转到“我的” 界面

+ 指令：`to_home_view`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 跳转到礼物界面

+ 指令：`to_gift_list_view`
+ 参数：

```js
{
  "peer_id": 12312 // 目标用户 ID // 可选，不填送自己
}
```

+ 回调返回：

```js
{
  "status": 1 // 送礼状态 // 1:没送 2:送了
}
```

### 跳转到好友关系页

> [2016.3.23 添加]

+ 指令：`to_main_contact_view`
+ 参数：

```js
{
  "index": 1 // tab 序号 // 1: 好友 2: 可能认识的人 3: 未激活
}
```

+ 回调返回：

```js
{}
```

### 跳转到背包页    (20170914启用，游戏房间版本）
		
> [2016.3.23 添加]

+ 指令：`to_bag_view`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 跳转到比拼页    停用！！！
		
> [2016.3.23 添加]

+ 指令：`to_pick_list_view`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 跳转到小跟班主页    停用！！！
		
> [2016.3.23 添加]

+ 指令：`to_main_valet_view`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 跳转到抓奴隶页（抓好友当奴隶）
		
> [2016.5.25 添加]

+ 指令：`to_grab_slave_view`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{
}
```

### 跳转到抓跟班页（买星卡页面）
		
> [2016.5.25 添加]

+ 指令：`to_grab_valet_view`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 新 WebView 打开连接
		
> [2016.5.25 添加]

+ 指令：`to_open_new_web_view`
+ 参数：

```js
{
  "url": "http://d.17paipai.cn/xx", // 链接
  "title": "xxx" // 标题 // 可选项，默认为空
}
```

+ 回调返回：

```js
{}
```

### 首次绑定微信
		
> [2016.5.25 添加]

+ 指令：`to_bind_invite_wx_account`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 首次绑定 QQ
		
> [2016.5.25 添加]

+ 指令：`to_bind_invite_qq_account`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 首次绑定通讯录
		
> [2016.5.25 添加]

+ 指令：`to_bind_invite_contacts_account`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 邀请 QQ 好友
		
> [2016.5.12 添加]

+ 指令：`to_invite_qq_valet_friend_view`
+ 参数：

```js
{
  "from": "" // 来源
}
```

+ 回调返回：

```js
{
  "status": 1 // 邀请状态 // 1:邀请失败 2:邀请成功
}
```

### 邀请微信好友
		
> [2016.5.12 添加]

+ 指令：`to_invite_wx_valet_friend_view`
+ 参数：

```js
{
  "from": "" // 来源
}
```

+ 回调返回：

```js
{
  "status": 1 // 邀请状态 // 1:邀请失败 2:邀请成功
}
```

### 邀请通讯录好友
		
> [2016.5.12 添加]

+ 指令：`to_invite_contacts_valet_friend_view`
+ 参数：

```js
{
  "from": "" // 来源
}
```

+ 回调返回：

```js
{
  "status": 1 // 邀请状态 // 1:邀请失败 2:邀请成功
}
```

### 跳转附近的人
		
> [2016.5.30 添加]

+ 指令：`to_around_person_view`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 跳转到技能列表
		
> [2016.5.30 添加]

+ 指令：`to_skill_list_view`
+ 参数：

```js
{
  target: '0' // '0': 自己升级, 非 '0': 对别人使用，为目标用户 ID
}
```

+ 回调返回：

```js
{}
```

### 复制到剪贴板

> [2015.5.12新加]

+ 指令：`copy_to_clipboard`
+ 参数：

```js
{
  "content ": "文字" // 内容文本)
}
```

+ 回调返回：

```js
{
  "status": 1 // 复制状态 // 1:成功 2:失败
}
```

### 获取好友列表

> [2015.5.20新加］

+ 指令：`get_friend_list`
+ 参数：

```js
{}
```

+ 回调返回：

```js
[
  {
    "peer_id": 324234, // 好友 ID
    "nickname": "无名" // 好友昵称
  },
  ...
]
```

### 退回客户端界面

> [2015.5.21新加］

+ 指令：`go_back`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 操作 Title

> [2015.7.10新增]  [2016.8.24补充]

+ 指令：`title_option`
+ 参数：

```js
{
  "hidden": 1, // 是否隐藏 // 1:隐藏 其他:不隐藏
  "text": "标题", // Title 上显示的文字
  "button_hidden": 1,  // 是否隐藏按钮 // 1:隐藏 其他:不隐藏
  "button_text": "按钮", // title 上按钮的文字
  "turn_title": "跳转后的标题", // 跳转后的标题
  "turn_url":""    // 按钮跳转的地址 (需要encodeURI)

  "bg_color" : "FFFFFF",  // 
  "is_popup" : 1,           //
  "popup_content": '是否关闭', // 确认 发个事件通知 
  "popup_ms": "1000", 点击确认-延时1000ms结束
}
```

+ 回调返回：

```js
{}
```

### 获取设备信息

> [2015.8.22 新增]

+ 指令：`get_device_info`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{
  "device_id": "", // 设备码
  "manufacture": "", // 制造商
  "brand": "", // 品牌
  "model": "" // 型号
}
```
          
### 跳转到 AppStore 好评

> [2016.01.25 增加]

+ 指令：`to_praise`
+ 参数：

```js
{
  "callback_url ": "http://section.17paipai.cn/success", // 「可选项」跳转成功回调地址 // 2016-1-25 添加
}
```

+ 回调返回：

```js
{
  "status": 1 // 跳转状态 // 1:成功 2:失败
}
```

### 用浏览器打开链接

> [2016.3.23新增]

+ 指令：`open_by_system_browser`
+ 参数：

```js
{
  "url": "http://www.17paipai.cn/" // 打开链接
}
```

+ 回调返回：

```js
{}
```

### 检查是否有新版本

> [2016.3.23新增]

+ 指令：`check_update`
+ 参数：

```js
{}
```

+ 回调返回：

```js
{}
```

### 跳转到下部tab聊吧
		
> [2016.3.23 添加][2016.07.18 修改]

+ 指令：`to_main_chat_bar_view`
+ 参数：

```js
{
index:1  // 1官方活动吧页  2同城页  3家族/推荐家族页
} 
```

+ 回调返回：

```js
{}
```


### 跳转到下部tab好友
		
> [2016.07.18 添加]

+ 指令：`to_main_contact_view`
+ 参数：

```js
{
index:1  // 1好友 2邻居  3仇恨
} 
```

+ 回调返回：

```js
{}
```


### 跳转到下部tab星卡
		
> [2016.07.18 添加]

+ 指令：`to_valet_main_view`
+ 参数：

```js
{
index:1  // 1星卡 2背包  3任务 4聊吧
} 
```

+ 回调返回：

```js
{}
```


### 跳转到应用市场

> [2016.07.18 添加]

+ 指令：`to_app_market`
+ 参数：

```js
{
    "callback_url":"http://www.17paipai.cn/index.php?a=1"
} 
```

+ 回调返回：

```js
{}
```

### 跳转到实名认证

> [2016-7-28 添加]

+ 指令：`to_authentication_user_identity_view`
+ 参数：

```js
{} 
```

+ 回调返回：

```js
{}
```

### 我的钱包绑定微信

> [2016-8-20 添加]

+ 指令: `to_invoke_bind_get_cash_wx`
+ 参数:

```js
{}
```

+ 回调返回:

```js
{
   "unique_id": "xdashkdasxljsa",
   "open_id": "asasdfasdfasdfa",
   "user_id": "123"
   "sex": 0,             //  0 girl 1 boy
  "nick_name": "昵称",
   "image": "http://www.17paipai.cn/image.png",
   "status" : 1    // 1 成功  其他失败
}
```
### 绑定qq(暂时取消)

> [2016-8-30 添加]

+ 指令: `to_invoke_qq _access`
+ 参数:

```js
{}
```

+ 回调返回:

```js
{
   "unique_id": "xdashkdasxljsa",
   "open_id": "asasdfasdfasdfa",
   "user_id": "123"
   "sex": 0,             //  0 girl 1 boy
  "nick_name": "昵称",
   "image": "http://www.17paipai.cn/image.png",
   "status" : 1    // 1 成功  其他失败
}
```

### 跳转工资详情

> [2016-9-3 添加]

+ 指令: `to_wage_view`
+ 参数:

```js
{
     "wage_style": 1,   // 1  族长   2   吧主  3  管理
     "room_id": 1234   // 房间id
}
```

+ 回调返回:

```js
{}
```

### 跳转任务列表

> [2016-9-3 添加]

+ 指令: `to_task_web_view`
+ 参数:

```js
{
     "index": 1   // 0  成长 1  日常 2  成就
}
```

+ 回调返回:

```js
{}
```

### 跳转红包专区

> [2016-9-3 添加]

+ 指令: `to_sub_activity_view`
+ 参数:

```js
{
     "activity_id":  12000278,  //外网 红包专区: 12002560   //  内网  精彩活动: 12000368 , 红包专区: 12000278 ,  新手推荐: 12000049 

    "type": 1   //   1  精彩推荐   2  活动   3  红包   4  新手
    "title" : "精彩推荐"
}
```

+ 回调返回:

```js
{}
```

### 添加好友

> [2016-9-10 添加]

+ 指令: `to_add_friend_view`
+ 参数:

```js
{
     "user_id":  "12000278", // 对方用户 ID
     "nickname": "客服小坏蛋" // 对方昵称 // 2016年9月12日 添加
}
```

+ 回调返回:

```js
{
    "status": 0 // 1: 发送成功 非 1 失败
}
```


### 跳转到幸运抽卡

> [2016-9-21 添加]

+ 指令: `to_take_out_npc_view`
+ 参数:

```js
{}
```

+ 回调返回:

```js
{}
```

### 跳转到金币获得引导

> [2016-10-19 添加]

+ 指令: `to_gold_coin_view`
+ 参数:

```js
{}
```

+ 回调返回:

```js
{}
```

### 申请加入聊吧

> [2016-10-08 添加]

+ 指令: `apply_to_join_chat_bar`
+ 参数:

```js
{
    "chatbar_id": 30100 // 聊吧 ID
}
```

+ 回调返回:

```js
{}
```

### 申请优质用户

> [2016-11-11 添加] (2017年3月29日 停止使用客户端已删除)

+ 指令: `to_apply_expert_user`
+ 参数:

```js
{}
```

+ 回调返回:

```js
{}
```

### 跳转召唤BOSS页

> [2016-11-11 添加]

+ 指令: `to_summon_boss`
+ 参数:

```js
{
"chatbar_id": 30100 // 聊吧 ID
}
```

+ 回调返回:

```js
{}
```
### 跳转私聊页并发送消息

> [2016-11-14 添加]

+ 指令: `to_peer_send_msg`
+ 参数:

```js
{
        "peer_id": "5587823", // 接收消息的 用户ID
        "chatbar_id": 30100 , // 聊吧 ID
        "type": 0, // 消息类型  0-普通  1-辅导员 2-管理员 3-副族长 4-族长 5-副会长 6-会长
        "msg": "要发送的消息" // 发送的消息
}
```

+ 回调返回:

```js
{}
```
### 跳转购买会员页

> [2016-11-15 添加]

+ 指令: `to_buy_vip`
+ 参数:

```js
{
       " index": 1 // 1 白银vip 2 黄金vip 3 钻石vip
}
```

+ 回调返回:

```js
{}
```
### 跳转购买管家页

> [2017-03-06 添加]

+ 指令: `to_buy_bulter`
+ 参数:

```js
{
    "index": 0 //0:管家介绍  1:支付购买
}
```

+ 回调返回:

```js
{}
```


### 跳转家族页面（带判断是否有家族，有--进入家族页面，无--家族推荐页面，家族未解锁时，无跳转，会弹窗提示）

> [2016-11-29 添加]

+ 指令: `to_family_view`
+ 参数:

```js
{}
```

+ 回调返回:

```js
{}
```


### 跳转抓奴隶页面（带判断是否解锁，未解锁会弹窗提示）

> [2016-11-29 添加]

+ 指令: `to_catch_slave_view`
+ 参数:

```js
{}
```

+ 回调返回:

```js
{}
```

### 跳转派派小屋

> [2017-01-13 添加]

+ 指令: `to_house_view`
+ 参数:

```js
{}
```

+ 回调返回:

```js
{}
```

### 隐藏「小屋」的返回按钮条

* 该按钮条仅出现在「小屋」界面

> [2016-12-12 添加]
> 指令：`hide_go_back_view`

+ 参数: 默认
+ 回调返回: 无


### 跳转首页抢红包

> [2017-01-20 添加]

+ 指令: `to_rob_red_packet`
+ 参数:

```js
{}
```

+ 回调返回:

```js
{}
```

### 跳转 到其他客户端

> [2017-01-24 添加]

+ 指令：`to_other_client`
+ 参数：

```js
{
      "package_name": 'com.sina.weibo',                    // 安卓包名
      "ios_package_name": 'sinaweibo://'                   // ios包名
}
```
+ 回调返回：

```js
{ 
  "status": 1 // 结果 // 1:成功 其他:失败
}

```

### 跳转商城

> [2017-02-10 添加]

+ 指令: `to_shopping_mall`
+ 参数:

```js
{
    type: 1       // 如果想跳商城的某个index直接index即可，1热卖道具   2 宠物食物   3 特殊道具   4衣服材料 ，如果想跳商城中的某个物品，则规则为物品ID 加上 index 拼接成的字符串， 格式如‘600013’ 客户端特殊判断是否存在道具以决定跳背包还是商城  跳转规则@贾子杰
}
```

+ 回调返回:

```js
{}
```

### 扫码加好友 / 只有扫码有，派派中将添加扫码功能

> [2017-02-22 添加]

+ 指令: `to_qr_add_friend_view`
+ 参数:

```js
{
    peer_id: '9008000000023125'
}
```

+ 回调返回:

```js
{}
```


### 扫码打开webview / 只有扫码有，派派中将添加扫码功能

> [2017-02-22 添加]

+ 指令: `to_qr_open_new_web_view`
+ 参数:

```js
{
  "url": "http://d.17paipai.cn/xx", // 链接
  "title": "xxx" // 标题 // 可选项，默认为空
}
```

+ 回调返回:

```js
{}
```

### 跳转同城交友

> [2017-03-17 添加]

+ 指令: `to_city_friends`
+ 参数:

```js
{}
```

+ 回调返回:

```js
{}
```

### 跳转热门活动

> [2017-03-17 添加]

+ 指令: `to_hot_events`
+ 参数:

```js
{}
```

+ 回调返回:

```js
{}
```

### 弹出个人名片

> [2017-03-27 添加]

+ 指令: `to_show_share_user_card`
+ 参数:

```js
{
     share_type: 'wx_share_withdraw',  // wx朋友圈
     invite_type: 'wx_invite_withdraw'   // wx好友
}
```

+ 回调返回:

```js
{}
```

### 弹出个人名片（带扫一扫的）

> [2017-03-27 添加]

+ 指令: `to_show_share_user_card_new`
+ 参数:

```js
{
     share_type: 'wx_share_default',  // wx朋友圈
     invite_type: 'wx_invite_default'   // wx好友
}
```

+ 回调返回:

```js
{}
```


### 获取红包卡领取状态信息

+ 指令： `get_redpackagecard_status_info`
+ 参数：

```
{}
```

+  返回：

```
[
    {
        "id": "1302",
        "status": "0"
    },
    {
        "id": "1101",
        "status": "0"
    },
    {
        "id": "1202",
        "status": "2"
    },
    {
        "id": "1102",
        "status": "2"
    },
    {
        "id": "1301",
        "status": "0"
    },
    {
        "id": "1201",
        "status": "0"
    }
]
```


### 服务器调用本地分享

+ 指令： `to_inflect_client_share`
+ 参数：

```
{
    share_type: ''
}
```


### 跳转到扫一扫

+ 指令： `to_scan_qr_code_view`
+ 参数：

```
{}
```


+ 回调返回：

```js
[{
  id: '1101', // 卡片ID
  status: 0, // 0 未获得, 1 可以领取, 2 已领取
}, {
  id: '1102',
  status: 0,
}, {
  id: '1201',
  status: 0,
}, {
  id: '1202',
  status: 0
}, {
  id: '1301',
  status: 0,
}, {
  id: '1302',
  status: 0,
}, {
  id: '1401',
  status: 0,
}, {
  id: '1402',
  status: 0
}]
```


### 向客户端返回信息     20170415 peter  用于新版新手引导提现成功后调用

+ 指令： `send_message_to_client`
+ 参数：

```
{
    money:  10  //  单位是 分
}
```

### 分享截屏     20170418 peter  

+ 指令： `share_screenshot`
+ 参数：

```
{
    qr_url:   'http://www.17paipai.cn'  //  二维码链接
}
```


### 通知客户端更新stoken        20170419 peter  

+ 指令： `notice_client_refresh_stoken`
+ 参数：

```
{}
```


### 服务器调用指定类型回调（客户端不判断关联）     20170419 peter  

+ 指令： `to_inflect_client_share_not_bind`
+ 参数：

```
{
    share_type:   'wx_share_valet_guide',
    base64: JSON.stringify({
      'image_1': '',               // key 必须以 image_ 开通  获取分享链接必须 带回参数 否则ios 不清除内存 
      'image_2': '',
      'image_3': ''
    });  
}
```


# 调用客户端图片上传   20170621 peter

指令：`to_client_upload_image`

参数：
```
{
  "url": "",          // 上传链接 
  "post_param": "uploadedfile",   // post 图片等参数名称
  "total_count": 1,   // 可上传张数
}
```
回调返回：
```
{
   "img_url": ["http://xxx/xxxx/xxx.jpg", "http://xxx/xxxx/xxx.jpg", "http://xxx/xxxx/xxx.jpg"]     // 返回上传成功的图片地址
}


// 注 上传链接返回结构
{
  "status": 200, 
  "desc": "success", 
  "data": {
    "img_url": ["http://xxx/xxxx/xxx.jpg",  "http://xxx/xxxx/xxx.jpg", "http://xxx/xxxx/xxx.jpg"]      // 图片链接地址
  }
}
```

### 客户端录音指令  20170630 peter

指令 `to_client_record_sound`

参数
```
{
  type: 1,               // 1 开始 0 结束
  max_time: 90,          // 最大时间 单位秒 如果到达最大时间还不发送结束也要终止结束
  key: 'upload_voice',
  up_url: '',            // 上传的链接地址
}
```
返回
```
{
  sound_url: '',        // 声音的链接地址
}
```

// 注 上传链接返回结构
```
{
  "status": 200, 
  "desc": "success", 
  "data": {
    "sound_url": ''      // 声音链接地址
  }
}
```

### 客户端播放声音 20170630 peter

指令 `to_client_play_sound`

参数
```
{
  type: 1,          // 1 播放 0 停止
  sound_url: ''     // 播放声音的链接地址
}
```


### 调用客户端好友列表选择好友  20170701 peter

指令 `to_client_select_friend`

参数
```
{
  type: 1,    // 好友列表类型
  exist: "['123','1234']",  // JSON字符串数组
  title: '提醒谁',  // webview 的头部标题
  count: 10,  // 选择个数限制
  sex_limit: 0,   // 0不限制    1筛选结果为男性    2筛选结果为女性
  room_id: 12345,   // 是否显示这个房间的所有人的列表
}
```
返回
```
{
  friend_info: [{
    id: 123,  // 选中的好友ID
    name: '啊撒', 
    sex:0, 
    friend_type: 1 // 好友类型  0无关系   1微信好友   2qq好友
  }]
}
```

### 调用客户端 关闭当前webview

指令 `close_current_webview`

参数
```
{}
```
返回
```
{}
```

### 进入游戏房间  20170718 peter

指令 `to_game_room`

参数
```
{
  game_id: 12345    // 游戏id
}
```

### 打开游戏首页（头条和推荐列表） 20170918 peter

指令 `to_game_first_screen`

参数
```
{}
```
返回
```
{}
```

### 播放客户端获得物品动画（金币、钱、背包物品） 20170918 peter

指令 `to_play_get_animate`

参数
```
{
  'goods': [{
      type:  1,  // 物品类型
      id:  1,  // 物品ID
      count: 100  // 物品数量
    }, {
      type:  1,  // 物品类型
      id:  1,  // 物品ID
      count: 100  // 物品数量
    }]
}
```

返回

```
{}
```