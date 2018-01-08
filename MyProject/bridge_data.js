/**
 * 派派 Native Bridge 事件速查表
 * @Author: 陶孝林
 * @注意： 如有新增actions，请严格按如下格式增加, 如有注释请写在相应的template_...字段内，
 * 如 无需参数，请保留字段，内容置空
 * 如无模板参数示例/无模板返回值
    {
      name: "copy_to_clipboard",
      title: '复制到剪贴板',
      template_parameter: {
        "content": "内容文本, //复制的内容",
      },
      parameter: {},
      template_return: {
        "status": "1, // 复制状态 // 1:成功 2:失败",
      },
    }
 *
 */

(function (exportName) {
  var exports = window[exportName] || {};
  /**
   * 动作分组
   * @type {ActionItem of Array}
   */
  var actionGroup = [{
    name: "base",
    title: '基础',
    actions: [{
      name: "get_user_info",
      title: '获取自己的信息',
      template_parameter: "{}",
      parameter: {},
      template_return: '\
        "user_id": "123122, // 用户 ID",\
        "nickname": "无名, // 昵称",\
        "sex": "1, // 性别 1 男性",\
        "token": ", // API token",\
        "stoken": ", // 支付相关 token",\
        "source_id": ", // 来源 ID",\
        "version": "1.3.1, // 客户端版本",\
        "chatbar_privilege_value": "0, //",\
        "chatbar_id": "0, //",\
        "family_privilege_value": "0, //",\
        "cash": "0, //",\
        "prize_cash": "0, //",\
        "section_id": "1232,  // 服 ID // [2015.11.14 新增]",\
        "gold_coin": "1002, //  金币数 // [2016.10.18 新增]",\
        "protocol": "23, // 协议版本号 // [2016.10.18 新增]",\
      ',
    }, {
      name: "get_device_info",
      title: '获取设备信息',
      template_parameter: {},
      parameter: {},
      template_return: '\
        "device_id": ", // 设备码",\
        "manufacture": ", // 制造商",\
        "brand": ", // 品牌",\
        "model": ", // 型号",\
      ',
    }, {
      name: "get_friend_list",
      title: '获取好友列表',
      template_parameter: {},
      parameter: {},
      template_return: '\
      [\
        {\
          "peer_id": "324234, // 好友 ID",\
          "nickname": "无名,  // 好友昵称",\
        },\
      ]\
    ',
    }, {
      name: "go_back",
      title: '退回客户端',
      parameter: {},
      template_parameter: {},
      template_return: {},
    }, {
      name: "copy_to_clipboard",
      title: '复制到剪贴板',
      template_parameter: {
        "content": "内容文本, //复制的内容"
      },
      parameter: {
        "content": "内容文本"
      },
      template_return: {
        "status": "1, // 复制状态 // 1:成功 2:失败",
      },
    }, {
      name: "title_option",
      title: '修改标题',
      template_parameter: {
        "hidden": "1, // 是否隐藏 // 1:隐藏 其他:不隐藏",
        "text": "标题, // Title 上显示的文字",
        "button_hidden": "1,  // 是否隐藏按钮 // 1:隐藏 其他:不隐藏",
        "button_text": "按钮, // title 上按钮的文字",
        "turn_title": "跳转后的标题, // 跳转后的标题",
        "turn_url": ", // 按钮跳转的地址 (需要encodeURI)",

        "bg_color" : "FFFFFF,  //",
        "is_popup" : "1, //",
        "popup_content": '是否关闭, // 确认 发个事件通知',
        "popup_ms": "1000,  // 点击确认-延时1000ms结束",
      },
      parameter: {
        "hidden": 1,
        "text": "标题",
        "button_hidden": 1,
        "button_text": "按钮",
        "turn_title": "跳转后的标题",
        "turn_url": "",

        "bg_color" : "FFFFFF",
        "is_popup" : 1,
        "popup_content": '是否关闭',
        "popup_ms": "1000",
      },
      template_return: {},
    }, {
      name: "open_by_system_browser",
      title: '用浏览器打开',
      template_parameter: {},
      parameter: {
        "url": "http://www.17paipai.cn/"
      },
      template_return: {},
    }, {
      name: "get_npc_slot_index",
      title: "获取保镖秘书坑位",
      template_parameter: {
        "npc_action_id": "7, // 保镖 6 秘书 7",
      },
      parameter: {
        "npc_action_id": 7,
      },
      template_return: {
        "npc_slot_index": "1, // 返回曹位",
      },
    }, {
      name: "to_control_local_progress",
      title: "打开loading动画",
      template_parameter: {
        "index": "1, // (1开始loading动画  2结束loading动画  3 黑的小tip弹窗（5月中旬版本才加上）),",
        "text": "正在加载, // (显示的文案，当index为1或3的时候带上)",
      },
      parameter: {
        "index": 1,
        "text": "正在加载",
      },
      template_return: {},
    }, {
      name: "get_redpackagecard_status_info",
      title: '获取红包卡领取状态信息',
      template_parameter: {},
      parameter: {},
      template_return: [
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
    ],
    }, {
      name: "send_message_to_client",
      title: "向客户端返回信息",
      parameter: {
        money: 10 // 单位是 分
      }
    }, {
      name: "notice_client_refresh_stoken",
      title: "通知客户端更新stoken",
      parameter: {}
    }, {
      name: "close_current_webview",
      title: "关闭当前webview",
      parameter: {}
    }],
  }, {
    name: "share",
    title: '分享',
    actions: [{
      name: "share_wechat",
      title: '分享到微信朋友圈'
    }, {
      name: "share_qzone",
      title: '分享到QQ空间'
    }, {
      name: "share_sina",
      title: '分享到微博'
    }, {
      name: "share_wechat_friend",
      title: '分享到微信好友'
    }, {
      name: "share_qq_friend",
      title: '分享到QQ好友'
    }, {
      name: "share_phone_contact",
      title: '分享到联系人'
    }, {
      name: "share_screenshot",
      title: '分享截屏',
      parameter: {
        qr_url: 'http://www.17paipai.cn' //  二维码链接
      }
    }],
    defaultParameter: { // 当前分组的默认参数
      "title": "上派派偷好友红包！", // 分享标题
      // "call_system": 1, //  是否调用系统分享。只能用于share_wechat、share_wechat_friend、share_qq_friend
      // "picture_url": "http://file.ifreetalk.com/info/logo_20161130.png", // 系统分享  图片的链接
      "img_url": "http://file.ifreetalk.com/info/logo_20161130.png", // 预览图标
      "content": "上派派偷好友红包！", // 分享内容
      "url": "http://t.cn/R6s2Qkz", // 分享地址
      "callback_url": "https://webshare.ifreetalk.com/ShareInviteFriends/getShareLink/u/1000/share_type/wx_share_get_redcash/share_platform/1" // 「可选项」分享成功回调地址 // 2016-1-25 添加
    }
  }, {
    name: "redirect",
    title: '跳转',
    actions: [{
      name: "to_recommend_app_view",
      title: '跳转好玩页面'
    }, {
      name: "to_recharge_view",
      title: '跳转到充值页',
      parameter: {
        "from": "js_bridge_dev"
      }
    }, {
      name: "to_peer_info_view",
      title: '跳转到个人信息',
      parameter: {
        "peer_id": "5587823"
      }
    }, {
      name: "to_peer_chat_view",
      title: '跳转到私聊页',
      parameter: {
        "peer_id": "5587823"
      }
    }, {
      name: "to_task_view",
      title: '跳转到任务页'
    }, {
      name: "to_activity_view",
      title: '跳转到活动页'
    }, {
      name: "to_rank_view",
      title: '跳转到排行榜页'
    }, {
      name: "to_moment_view",
      title: '跳转到吧圈',
      parameter: {
        "category": 1 // 吧圈类别 // 0:推荐 1:最新 2:精华
      }
    }, {
      name: "to_chatbar_chat_view",
      title: '跳转到聊吧',
      parameter: {
        "chatbar_id": 30100, // 聊吧 ID
        "chatbar_type": 1, // 0:活动房间 1:新版房间
        is_live_mc: 1, //  1 是 直播房 0 老房间
      }
    }, {
      name: "to_home_view",
      title: '跳转到个人首页'
    }, {
      name: "to_gift_list_view",
      title: '跳转礼物页',
      parameter: {
        "peer_id": "5587823"
      }
    }, {
      name: "to_praise",
      title: '跳转到应用商店好评',
      parameter: {
        "callback_url": "http://section.17paipai.cn/success"
      }
    }, {
      name: "to_main_chat_bar_view",
      title: '跳转到聊吧页',
      parameter: {
        "index": 1 // 1官方活动吧页  2同城页  3家族/推荐家族页
      }
    }, {
      name: "to_grab_slave_view",
      title: '跳转到抓奴隶页'
    }, {
      name: "to_grab_valet_view",
      title: '跳转到抓跟班页'
    }, {
      name: "to_open_new_web_view",
      title: '新 WebView 打开连接',
      parameter: {
        "url": "http://section1.ifreetalk.com/vivo/test_client_resrouce.html?a=1&b=2",
        "title": "派派首页"
      }
    }, {
      name: "to_bind_invite_wx_account",
      title: '首次绑定微信'
    }, {
      name: "to_bind_invite_qq_account",
      title: '首次绑定 QQ'
    }, {
      name: "to_bind_invite_contacts_account",
      title: '首次绑定通讯录'
    }, {
      name: "to_around_person_view",
      title: '跳转附近的人'
    }, {
      name: "to_skill_list_view",
      title: '跳转技能列表',
      parameter: {
        "target": "0" // '0': 自己升级, 非 '0': 对别人使用，为目标用户 ID
      }
    }, {
      name: "to_valet_main_view",
      title: '跳转至小跟班页面',
      parameter: {
        "index": 1 // 1 小跟班页面 2 背包 3 任务 4 家族推荐页
      }
    }, {
      name: "to_main_contact_view",
      title: '跳转至好友关系页',
      parameter: {
        "index": 1 // 1 好友页 2 可能认识的人 3 推荐
      }
    }, {
      name: "to_app_market",
      title: '跳转到应用市场',
      parameter: {
        callback_url: "http://www.17paipai.cn"
      }
    }, {
      name: "to_invite_qq_valet_friend_view",
      title: '邀请 QQ 好友',
      parameter: {
        "from": "" // 来源
      }
    }, {
      name: "to_invite_wx_valet_friend_view",
      title: '邀请微信好友',
      parameter: {
        "from": "" // 来源
      }
    }, {
      name: "to_invite_contacts_valet_friend_view",
      title: '邀请通讯录好友',
      parameter: {
        "from": "" // 来源
      }
    }, {
      name: "to_authentication_user_identity_view",
      title: '跳转至实名认证'
    }, {
      name: "to_invoke_bind_get_cash_wx",
      title: '跳转至绑定微信'
    }, {
      name: "to_invoke_qq_access",
      title: '跳转至绑定qq'
    }, {
      name: "to_wage_view",
      title: '跳转工资详情',
      parameter: {
        wage_style: 1, // 1 族长 2 吧主 3 管理
        room_id: 3101595
      }
    }, {
      name: "to_task_web_view",
      title: '跳转任务列表',
      parameter: {
        index: 1 // 0 成长 1 日常 2 成就
      }
    }, {
      name: "to_sub_activity_view",
      title: '跳转红包专区',
      parameter: {
        type: 1, // 1 精彩推荐 2 活动 3 红包 4 新手
        activity_id: 12002560, //内网：12000278，外网：12002560
        title: "精彩推荐"
      }
    }, {
      name: "to_add_friend_view",
      title: '跳转添加朋友',
      parameter: {
        user_id: "9008000000051204" // 用户ID
      }
    }, {
      name: "to_take_out_npc_view",
      title: '跳转到幸运抽卡'
    }, {
      name: "to_gold_coin_view",
      title: '跳转到金币引导'
    }, {
      name: "apply_to_join_chat_bar",
      title: '申请加入聊吧',
      parameter: {
        "chatbar_id": 30100 // 聊吧 ID
      }
    }, {
      name: "to_apply_expert_user",
      title: '跳转申请优质用户'
    }, {
      name: "to_summon_boss",
      title: '跳转召唤BOSS页',
      parameter: {
        "chatbar_id": 30100 // 聊吧 ID
      }
    }, {
      name: "to_peer_send_msg", //跳转到私聊并发送消息
      title: '跳转私聊页并发送消息',
      parameter: {
        "peer_id": "5587823", // 接收消息的 用户ID
        "chatbar_id": 30100, // 聊吧 ID
        "type": 0, // 消息类型  0-普通  1-辅导员 2-管理员 3-副族长 4-族长 5-副会长 6-会长
        "msg": "要发送的消息" // 发送的消息
      }
    }, {
      name: "to_buy_vip", //跳转到私聊并发送消息
      title: '跳转购买会员页',
      parameter: {
        index: 1 // 1 白银vip 2 黄金vip 3 钻石vip
      }
    }, {
      name: "to_family_view",
      title: '跳转家族页面（新版带弹窗）'
    }, {
      name: "to_catch_slave_view",
      title: '跳转抓奴隶页面（新版带弹窗）'
    }, {
      name: "to_house_view", //跳转到私聊并发送消息
      title: '跳转派派小屋',
      parameter: {}
    }, {
      name: "to_rob_red_packet",
      title: '跳转首页抢红包',
      parameter: {}
    }, {
      name: "to_other_client",
      title: '跳转到其他客户端',
      parameter: {
        package_name: 'com.sina.weibo', // 安卓包名
        ios_package_name: 'sinaweibo://' // ios 包名
      }
    }, {
      name: "to_shopping_mall",
      title: '跳转商城',
      parameter: {
        type: 1 // 1 热卖道具   2  宠物食物   3 特殊道具   4 衣服材料
      }
    }, {
      name: "to_qr_add_friend_view",
      title: '扫码加好友',
      parameter: {
        peer_id: '9008000000023125'
      }
    }, {
      name: "to_qr_open_new_web_view",
      title: '扫码打开webview打开连接',
      parameter: {
        "url": "http://d.17paipai.cn/xx", // 链接
        "title": "xxx", // 标题 // 可选项，默认为空
      }
    }, {
      name: "to_buy_bulter",
      title: '跳转管家',
      parameter: {}
    }, {
      name: "to_city_friends",
      title: '跳转同城交友',
      parameter: {}
    }, {
      name: "to_hot_events",
      title: '跳转热门活动',
      parameter: {}
    }, {
      name: "to_show_share_user_card",
      title: '弹出个人名片',
      parameter: {
        share_type: 'wx_share_withdraw', // wx朋友圈
        invite_type: 'wx_invite_withdraw' // wx好友
      }
    }, {
      name: "to_show_share_user_card_new",
      title: '弹出带扫一扫的个人名片',
      parameter: {}
    }, {
      name: "to_scan_qr_code_view",
      title: '跳转扫一扫',
      parameter: {}
    }, {
      name: "to_inflect_client_share",
      title: '调用本地分享',
      parameter: {
        share_type: 'wx_share_valet_guide',
      }
    }, {
      name: "to_inflect_client_share_not_bind",
      title: '调用指定类型分型(客户端不判断关联,不登录)',
      parameter: {
        share_type: 'wx_share_valet_guide',
      }
    }, {
      name: "to_client_upload_image",
      title: '调用客户端图片上传',
      parameter: {
        url: encodeURI("http://upts.ifreetalk.com/upload_jsbridge_pic.php?u=12345"), // 上传链接
        post_param: "uploadedfile", // post 图片等参数名称
        total_count: 1, // 可上传张数
      }
    }, {
      name: "to_client_record_sound",
      title: '调用客户端录制语音',
      parameter: {
        type: 1, // 1 开始 0 结束\
        key: 'upload_voice',
        max_time: 30, // 最大时间 单位秒 如果到达最大时间还不发送结束也要终止结束
        up_url: encodeURI("http://upts.ifreetalk.com/upload_jsbridge_voice.php?u=12345"), // 上传的链接地址
      }
    }, {
      name: "to_client_play_sound",
      title: '调用客户端播放语音',
      parameter: {
        type: 1, // 1 播放 0 停止
        sound_url: 'http://dpts.ifreetalk.com/M00/27/DE/Ch8_CFlXRnCAQvd6AAAeg2JkQMI2069.au' // 播放声音的链接地址
      }
    }, {
      name: "to_client_select_friend",
      title: '调用客户端好友列表选择好友',
      parameter: {
        count: 10, // 选择数量上限
        type: 1, // 好友列表类型  待定
        title: '提醒谁参与'
      }
    }, {
      name: "to_game_room",
      title: '进入游戏房间',
      parameter: {
        game_id: 12345 // 游戏id
      }
    }, {
      name: "to_moment_list_view",
      title: '跳转客户端朋友圈列表',
      parameter: {}
    }, {
      name: "to_publish_moment_view",
      title: '跳转客户端发送朋友圈',
      parameter: {
        type: 1 // 1 图片 2 文字
      }
    }, {
      name: "to_bag_view",
      title: '进入背包界面',
      parameter: {}
    }, {
      name: "to_game_first_screen",
      title: '打开游戏首屏',
      parameter: {}
    }, {
      name: "to_play_get_animate",
      title: '播放客户端获得物品动画',
      parameter: {
        goods: JSON.stringify([{
          type: 2, // 物品类型
          id: 6, // 物品ID
          count: 10000 // 物品数量
        }, {
          type: 2, // 物品类型
          id: 6, // 物品ID
          count: 10000 // 物品数量
        }])
      }
    }, {
      name: "to_do_farm_work",
      title: '跳转到土地首页',
      parameter: {}
    }, {
      name: "to_friends_home_list",
      title: '跳转到好友家列表',
      parameter: {}
    }, {
      name: "to_show_my_qrcode",
      title: '打开我的二维码',
      parameter: {}
    }],
  }, {
    name: "recharge",
    title: '充值',
    actions: [{
      name: "to_invoke_app_store_pay",
      title: 'AppStore 充值',
      parameter: {}
    }, {
      name: "to_invoke_ali_pay",
      title: '支付宝充值',
      parameter: {
        orderString: ''
      }
    }, {
      name: "to_invoke_we_chat_pay",
      title: '微信充值',
      parameter: {
        "missing stoken": '',
        "status": '',
        partnerId: '',
        prepayId: '',
        nonceStr: '',
        timeStamp: '',
        packageValue: '',
        signText: '',
        trade_no: ''
      }
    }, {
      name: "to_invoke_unionpay_pay",
      title: '银联充值',
      parameter: {
        'missing stoken': '',
        'token_id': '',
        'trade_no': ''
      }
    }, {
      name: "to_invoke_tencent_pay",
      title: '财付通充值',
      parameter: {
        "missing stoken": "",
        "status": "",
        "value": "",
        "succ": "",
        "token_id": ""
      }
    }, {
      name: "to_invoke_qq_pay",
      title: 'qq充值',
      parameter: {
        "orderString": "",
        "trade_no": "",
      }
    }]
  }, {
    name: "new",
    title: 'h5游戏相关新增',
    actions: [{
        name: "get_user_cash",
        title: '获取用户的钱包钱数',
        parameter: {},
        callback: {
          "value": 1288 // 钱数 单位为分
        }
      },
      {
        name: "to_user_cash_page",
        title: '跳转到用户提现页面',
        parameter: {},
      },
      {
        name: "to_webview_roll_state",
        title: 'ios屏蔽弹簧效果',
        parameter: {
          "roll": 0,
        }
      },
      {
        name: "to_show_normal_tips",
        title: '通用弹窗',
        parameter: {
          "content": "你是否确认吗？",
          "btn_text": "确定",
          "target": "ftalk://to_chat_room_pk_game_view?roomId=4104287&roomType=1&url=" + encodeURIComponent('http://section1.ifreetalk.com/test/'),
        }
      },
      {
        name: "go_back_main",
        title: '返回到主页',
      },
      {
        name: "get_user_in_room",
        title: '获取派派用户的所在房间',
      },
      {
        name: "get_user_in_room_state",
        title: '获取派派用户的在房间状态',
        parameter: {
          "roomId": 4104287 // 房间ID
        },
        callback: {
          "state": "number" // 返回字段：类型 // 1 在房间  0 不在房间
        }
      }, {
        name: "on_system_login_state",
        title: '获取派派系统的登陆房间状态',
        callback: {
          "state": 'number' // 1 登陆系统  0 未登录系统
        }
      }, {
        name: "get_user_auth_info",
        title: '获取身份验证信息 user_id - token - stoken',
        callback: {
          "user_id": "string|number",
          "token": "string",
          "stoken": "string"
        }
      }, {
        name: "get_net_work_state",
        title: '获取网络状态',
        callback: {
          "state": "number" // 0：不可用 1：4G网络 2：wifi网络 3：3G或者其他网络
        }
      }, {
        name: "send_chat_room_msg",
        title: '发送聊吧聊天消息',
        parameter: {
          "roomId": 4104287, // 房间ID
          "userId": "9008000000055655", // @谁
          "content": "你好" // 消息内容
        },
        callback: {
          "state": 'number' // 0: 发送失败  1: 发送成功
        }
      }, {
        name: "get_chat_room_msg",
        title: '获取聊吧聊天消息',
        parameter: {
          "roomId": 4104287, // 房间ID
          "lastMsgId": 0, // 消息ID - 默认0，第一次获取
          "count": 10 // 获取条数
        },
        callback: {
          "roomId": 'number',
          "list": {
            'type': 'array',
            'array': {
              "msgId": "number", // 消息ID
              "msgType": "number", // 类型
              "msgSubType": "number", // 子类型
              "msgExtType": "number", // 拓展类型
              "giverId": "string", // 发送人ID
              "givername": "string", // 发送人昵称
              "giversex": "number",
              "takerId": "string", // 接收人ID
              "takername": "string", // 接收人昵称
              "takersex": "number",
              "content": "string",
            }
          },
          // "list": [
          //   {
          //     "msgId": "string",        // 消息ID
          //     "msgType": "number",       // 类型
          //     "msgSubType": "number",    // 子类型
          //     "msgExtType": "number",    // 拓展类型
          //     "userId": "string",       // 发送人ID
          //     "nickname": "string",     // 发送人昵称
          //     "sex": "number",
          //     "content": "string",
          //   }
          // ]
        }
      }, {
        name: "get_self_on_mic_state",
        title: '查询是否可上麦状态',
        parameter: {
          "roomId": 4104287, // 房间ID
        },
        callback: {
          "state": 'number' // 自己是否可上麦  0: 不可上麦   1: 可以上麦
        }
      }, {
        name: "get_user_on_mic_info",
        title: "获取房间麦上信息",
        parameter: {
          "roomId": 4104287, // 房间ID
        },
        callback: {
          "mic": {
            'type': 'array',
            'array': {
              "mic_index": 'number', // 麦序
              "user_id": "string|number", // 用户ID
              "nickname": "string", // 用户昵称
              "sex": 'number', // 用户性别
            }
          },
          // "mic": [{
          //   "mic_index": 'number',                   // 麦序
          //   "user_id": "string",    // 用户ID
          //   "nickname": "string",                // 用户昵称
          //   "sex": 'number',                         // 用户性别
          // }, {
          //   "mic_index": 'number',
          //   "user_id": "string",
          //   "nickname": "string",
          //   "sex": 'number',
          // }]
        }
      }, {
        name: "to_user_self_on_mic",
        title: "在房间自己上下麦",
        parameter: {
          "roomId": 4104287, // 房间ID
          "type": 1, // 1：上麦  2：下麦
          "index": 0 // 0: 一麦  1: 二麦
        },
        callback: {
          "state": 'number' // 自己上麦状态   0: 失败    1: 成功
        }
      }, {
        name: "get_self_leave_chat_room_state",
        title: '获取用户是否被抽离家族（被抽提示的弹窗状态即可）',
        callback: {
          "state": 'number' // 1 有离开家族状态  2 无离开家族状态
        }
      }, {
        name: "open_back_event",
        title: "通知客户端屏蔽返回功能并触发返回事件"
      }, {
        name: "to_client_chat_room_pk_bar",
        title: "打开与关闭家族房间pk条幅",
        parameter: {
          "type": 0 // 1 打开pk条幅  0 隐藏pk条幅
        }
      }, {
        name: "to_chat_room_pk_game_view",
        title: "进入聊吧并进入pk游戏",
        parameter: {
          "roomId": 4104287, // 房间ID
          "roomType": 1, // 1 家族房间  2 活动房间 3 同城房间 4 直播间
          "url": "http://www.17paipai.cn" // 游戏链接
        }
      }, {
        name: "to_chat_pk_game_view",
        title: '在聊吧中进入pk游戏',
        parameter: {
          "url": "http://www.17paipai.cn" // 游戏链接
        }
      }, {
        name: "to_game_room",
        title: '进入房间并进入红包游戏 答题-你画我猜',
        parameter: {
          "game_id": 123, // 游戏ID
          "roomId": 4104287, // 房间ID
          "roomType": 1, // 1 家族房间  2 活动房间 3 同城房间 4 直播间
        }
      }, {
        name: "to_send_gift_view_in_room",
        title: '调起原生礼物组件',
        parameter: {
          "user_id": "123123" // 送给人的用户ID
        }
      }, {
        name: "to_show_in_room_anim",
        title: '调起原生进场动画组件',
        parameter: {
          "type": 1 // 0 关闭   1 开启
        }
      }, {
        name: "to_game_online_view",
        title: '调起原生游戏参与列表组件 答题-你画我猜',
        parameter: {
          "roomId": 4104287, // 房间ID
          "realGameId": 131231, // 真实游戏ID
          "gameId": 12313, // 游戏ID
          "gameType": 2, // 游戏类型
          "isLive": 1 // 是否直播间 1 是 0 不是
        }
      }, {
        name: "on_net_work_state_changed",
        title: '监听登陆系统状态发生变化（成功通知）',
        callback: {
          "state": 'number' // 0：不可用 1：4G网络 2：wifi网络 3：3G或者其他网络
        }
      }, {
        name: "on_system_login_state_changed",
        title: '监听登陆系统状态发生变化',
        callback: {
          "state": 'number' // 1：可用
        }
      }, {
        name: "on_back_event",
        title: '监听返回键触发 （通知客户端屏蔽返回功能之后才会触发）'
      }, {
        name: "client_guide_redpack_count",
        title: '引导阶段获取红包数量'
      }, {
        name: "to_fudao_on_mic_state",
        title: '辅导员接任务弹窗，接受任务跳转前调用',
        parameter: {
          "roomid": 121212121
        }
      }
    ]
  }];
  exports.actionGroup = actionGroup;

  /**
   * 动作字典
   * @type {Object}
   */
  var actionDict = {};
  actionGroup.forEach(function (group) {
    group.actions.forEach(function (action) {
      if (!action.parameter && group.defaultParameter) {
        action.parameter = group.defaultParameter;
      }
      actionDict[action.name] = action;
    });
  });
  exports.actionDict = actionDict;

  window[exportName] = exports;
})('paipai');