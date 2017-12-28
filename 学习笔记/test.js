var rechargeMoney = {
    "recharge_total": 0,
    "recharge_list": [1,1,1,1,1,1,1,1,1],  // //0：不可领取 1：可领取 2：已领取
    "recharge": [ //累充配置
        {
            "fee": 1,
            "name": "累计1元礼包",
            "goods": [
                {
                    "type": 2017,
                    "count": 100000,
                    "name": "金币"
                }
            ]
        },
        {
            "fee": 10,
            "name": "累计10元礼包",
            "goods": [
                {
                    "type": 2017,
                    "count": 200000,
                    "name": "金币"
                }
            ]
        },
        {
            "fee": 15,
            "name": "累计15元礼包",
            "goods": [
                {
                    "type": 2017,
                    "count": 500000,
                    "name": "金币"
                }
            ]
        },
        {
            "fee": 35,
            "name": "累计35元礼包",
            "goods": [
                {
                    "type": 15,
                    "id": 40001,
                    "count": 20,
                    "unit": "张",
                    "name": "蓝券"
                }
            ]
        },
        {
            "fee": 75,
            "name": "累计75元礼包",
            "goods": [
                {
                    "type": 15,
                    "id": 40001,
                    "count": 35,
                    "unit": "张",
                    "name": "蓝券"
                }
            ]
        },
        {
            "fee": 185,
            "name": "累计185元礼包",
            "goods": [
                {
                    "type": 15,
                    "id": 40001,
                    "count": 50,
                    "unit": "张",
                    "name": "蓝券"
                }
            ]
        },
        {
            "fee": 355,
            "name": "累计355元礼包",
            "goods": [
                {
                    "type": 15,
                    "id": 40001,
                    "count": 50,
                    "unit": "张",
                    "name": "蓝券"
                },
                {
                    "type": 15,
                    "id": 40002,
                    "count": 5,
                    "unit": "张",
                    "name": "紫券"
                }
            ],
            "random_pack_conf": [
                {
                    "_begin": 0,
                    "_end": 7699,
                    "diamond_min": 10,
                    "diamond_max": 30
                }
            ]
        },
        {
            "fee": 685,
            "name": "累计685元礼包",
            "goods": [
                {
                    "type": 15,
                    "id": 40001,
                    "count": 50,
                    "unit": "张",
                    "name": "蓝券"
                },
                {
                    "type": 15,
                    "id": 40002,
                    "count": 15,
                    "unit": "张",
                    "name": "紫券"
                }
            ],
            "random_pack_conf": [
                {
                    "_begin": 0,
                    "_end": 7699,
                    "diamond_min": 10,
                    "diamond_max": 30
                }
            ]
        },
        {
            "fee": 1285,
            "name": "累计1285元礼包",
            "goods": [
                {
                    "type": 15,
                    "id": 40002,
                    "count": 25,
                    "unit": "张",
                    "name": "紫券"
                },
                {
                    "type": 15,
                    "id": 40003,
                    "count": 1,
                    "unit": "张",
                    "name": "橙券"
                }
            ],
            "random_pack_conf": [
                {
                    "_begin": 0,
                    "_end": 7699,
                    "diamond_min": 10,
                    "diamond_max": 30
                }
            ]
        }
    ],
}

var consumeDiamond = {
    "diamond_consume_total": 0,
    "diamond_consume_list": [ 0,0,0,0,0,0,0,0],   //钻石消耗总数//0：不可领取 1：可领取 2：已领取
    "diamond_consume": [ //累消配置
        {
            "diamond": 98,
            "name": "累计消耗98钻",
            "goods": [
                {
                    "type": 15,
                    "id": 10007,
                    "count": 10,
                    "unit": "个",
                    "name": "小体力瓶"
                }
            ]
        },
        {
            "diamond": 298,
            "name": "累计消耗298钻",
            "goods": [
                {
                    "type": 15,
                    "id": 10008,
                    "count": 10,
                    "unit": "个",
                    "name": "中体力瓶"
                }
            ]
        },
        {
            "diamond": 688,
            "name": "累计消耗688钻",
            "goods": [
                {
                    "type": 5,
                    "count": 20,
                    "id": 1,
                    "unit": "个",
                    "name": "金星星"
                }
            ]
        },
        {
            "diamond": 998,
            "name": "累计消耗998钻",
            "goods": [
                {
                    "type": 5,
                    "count": 30,
                    "id": 1,
                    "unit": "个",
                    "name": "金星星"
                }
            ]
        },
        {
            "diamond": 1680,
            "name": "累计消耗1680钻",
            "goods": [
                {
                    "type": 5,
                    "count": 50,
                    "id": 1,
                    "unit": "个",
                    "name": "金星星"
                },
                {
                    "type": 5,
                    "id": 2,
                    "count": 5,
                    "unit": "个",
                    "name": "猪波气功"
                },
                {
                    "type": 5,
                    "id": 3,
                    "count": 5,
                    "unit": "个",
                    "name": "胡言乱语"
                },
                {
                    "type": 5,
                    "id": 4,
                    "count": 5,
                    "unit": "个",
                    "name": "顺手牵羊"
                },
                {
                    "type": 5,
                    "id": 5,
                    "count": 5,
                    "unit": "个",
                    "name": "逐出聊吧"
                },
                {
                    "type": 5,
                    "id": 6,
                    "count": 5,
                    "unit": "个",
                    "name": "弹指神通"
                },
                {
                    "type": 5,
                    "id": 7,
                    "count": 5,
                    "unit": "个",
                    "name": "比翼双飞"
                }
            ]
        },
        {
            "diamond": 3280,
            "name": "累计消耗3280钻",
            "goods": [
                {
                    "type": 5,
                    "count": 100,
                    "id": 1,
                    "unit": "个",
                    "name": "金星星"
                },
                {
                    "type": 5,
                    "id": 2,
                    "count": 10,
                    "unit": "个",
                    "name": "猪波气功"
                },
                {
                    "type": 5,
                    "id": 3,
                    "count": 10,
                    "unit": "个",
                    "name": "胡言乱语"
                },
                {
                    "type": 5,
                    "id": 4,
                    "count": 10,
                    "unit": "个",
                    "name": "顺手牵羊"
                },
                {
                    "type": 5,
                    "id": 5,
                    "count": 10,
                    "unit": "个",
                    "name": "逐出聊吧"
                },
                {
                    "type": 5,
                    "id": 6,
                    "count": 10,
                    "unit": "个",
                    "name": "弹指神通"
                },
                {
                    "type": 5,
                    "id": 7,
                    "count": 10,
                    "unit": "个",
                    "name": "比翼双飞"
                }
            ]
        },
        {
            "diamond": 6480,
            "name": "累计消耗6480钻",
            "goods": [
                {
                    "type": 5,
                    "count": 30,
                    "id": 8,
                    "unit": "个",
                    "name": "紫星星"
                },
                {
                    "type": 5,
                    "id": 2,
                    "count": 10,
                    "unit": "个",
                    "name": "猪波气功"
                }
            ]
        },
        {
            "diamond": 16800,
            "name": "累计消耗16800钻",
            "goods": [
                {
                    "type": 5,
                    "count": 60,
                    "id": 8,
                    "unit": "个",
                    "name": "紫星星"
                }
            ]
        }
    ],
}
