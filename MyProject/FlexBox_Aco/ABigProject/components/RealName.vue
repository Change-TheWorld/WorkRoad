<style lang="less">
  .m-form {
    position: relative;
    .u-input {
      clear: both;
      position: relative;
      padding-top: 7%;
      .u-label {
        float: left;
        width: 20%;
        text-align: right;
        padding-top: 2%;
        font-weight: bold;
      }
      input {
        float: right;
        margin-right: 5%;
        border-width: 1px;
        width: 490/25rem;
        height: 68/25rem;
        border-radius: 15/25rem;
        padding-left: 15/25rem;
        outline: none;
      }
      .u-close {
        position: absolute;
        top: 70/25rem;
        right: 60/25rem;
        border-radius: 50%;
        background-color: rgb(204, 204, 204);
        width: 32/25rem;
        height: 32/25rem;
        background-image: url(public/img/clear.png);
        background-size: 100% 100%;
      }
    }
    .u-btn {
      clear: both;
      padding-top: 9%;
      text-align: center;
      margin-left: 5%;
      margin-right: 5%;
      button {
        font-size: 38/25rem;
        font-family: "PingFangSC";
        color: rgb(255, 255, 255);
        line-height: 1.053;
        border-radius: 5px;
        border-color: transparent;
        background-color: rgb(82, 206, 255);
        width: 100%;
        height: 99/25rem;
      }
    }
  }

  .error {
    border-color: #FF4343;
  }

  .submit_success {
    color: #9f9f9f;
    background-color: #eaeaea;
  }
  /**
    *  弹窗tier样式
    */
  .tier {
    position: relative;
    .pop_container {
      background-image: url(public/img/popbackground.png);
      background-size: 100% 100%;
      height: 300/25rem;
    }
    .pop_content {
      color: #4889FF;
      height: 9rem;
      border-color: transparent;
      padding-top: 6rem;
      line-height: 2rem;
      font-size: 18px;
    }
    .tier_f {
      .pop_submit1 {
        height: 5.3rem;
        border-color: transparent;
        margin: 0 auto;
        margin: 6% 8% 5% 8%;
        background-image: url(public/img/btn.png);
        background-size: 100% 100%;
        box-shadow: 0 0 0 transparent;
      }
      .pop_submit2 {
        height: 5.3rem;
        border-color: transparent;
        margin: 0 auto;
        margin: 9% 8% 5% 8%;
        background-image: url(public/img/btn.png);
        background-size: 100% 100%;
        box-shadow: 0 0 0 transparent;
      }
    }
  }
</style>

<template lang="html">
<div class="m-form">
  <div class="u-input">
    <label for="realName" class="u-label">姓名</label>
    <span>
      <input id="realName" class="u-realName" type="text" v-model.trim="realName" :class="[switchColor(verify_realName, submit_result)]"
        :disabled="submit_result" placeholder="  请输入真实姓名" @blur="verifyInput_realName">
      <span class="u-close" @click="clearRealName()"></span>
    </span>
  </div>
  <div class="u-input">
    <label for="idCard" class="u-label">身份证号</label>
    <span>
      <input type="text" id="idCard" class="u-idCard" v-model.trim="idCard" :class="[switchColor(verify_idCard, submit_result)]"
        :disabled="submit_result" placeholder="  请输入18位身份证号" @blur="verifyInput_idCard">
      <span class="u-close" @click="clearIdCard()"></span>
    </span>
  </div>
  <div class="u-btn" v-show="!verifyForm_result">
    <button @click="submitMsg" v-show="!verifyForm_result">提交认证</button>
  </div>
</div>
</template>

<script>
module.exports = {
  props: {
    isAnchor: {
      type: Number
    },
    isAlreadyCertified: {
      type: Number
    },
  },
  data: function () {
    return {
      realName: '',
      idCard: '',
      verifyForm_result: false,
      submit_result: false,
    }
  },
  mounted: function () {
    var that = this;
    that.judge_status();
  },
  methods: {
    switchColor: function (a, b) {
      // 如果提交成功，则按钮，输入框全部禁用
      if (b === true)
        return 'submit_success';

      // 输入错误，则边框变红
      if (a === false) {
        return 'error';
      } else {
        return '';
      }
    },
    clearRealName: function() {
      var that = this;
      that.realName = '';
    },
    clearIdCard: function() {
      var that = this;
      that.idCard = '';
    },
    judge_status: function () {
      var that = this;
      if (that.isAnchor === 2) {
        that.$tier.one({
          content: "您当前不是主播，无法访问哟~",
          btn: ['     '], // 按钮数组
          class: { // 自定义css类
            main: "pop_container",
              content: "pop_content",
              btn: ["pop_submit2"],
          },
        });
        that.submit_result = true;
				that.verifyForm_result = true;
        return;
      }
      if (that.isAlreadyCertified === 1) {
        that.$tier.one({
          content: "您已实名验证过啦，快去直播间打卡吧！",
          btn: ['     '], // 按钮数组
          class: { // 自定义css类
            main: "pop_container",
              content: "pop_content",
              btn: ["pop_submit2"],
          },
        });
        that.submit_result = true;
				that.verifyForm_result = true;
        return;
      }
    },
    /*
     * 校验真实姓名
     */
    verifyInput_realName: function () {
      var that = this;
      var realName = that.realName;
      if (realName.length === 0) {
        that.verify_realName = false;
      } else if (!(/^[\u4E00-\u9FA5A-Za-z]{1,20}$/g.test(realName))) {
        that.verify_realName = false;
      } else {
        that.verify_realName = true;
      }
    },
    /*
     * 校验身份证号
     */
    verifyInput_idCard: function () {
      var that = this;
      var idCard = that.idCard;
      if (idCard.length === 0) {
        that.verify_idCard = false;
      } else if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(idCard))) {
        that.verify_idCard = false;
      } else {
        that.verify_idCard = true;
      }
    },
    /*
     * 提交信息
     */
    submitMsg: function () {
      var that = this;
      // 如果不是主播或者已经认证过，则不能提交信息
      if(that.submit_result) {
        return;
      }

      var realName = that.realName;
      var idCard = that.idCard;

      if (realName.length === 0) {
        that.$tier.one({
          content: '真实姓名不能为空哦~',
          btn: ['确定']
        });
        return;
      } else if (!(/^[\u4E00-\u9FA5A-Za-z]{1,20}$/g.test(realName))) {
        that.$tier.one({
          content: '真实姓名包含非法字符，请重新输入~',
          btn: ['确定']
        });
        return;
      }

      if (idCard.length === 0) {
        that.$tier.one({
          content: '身份证号不能为空哦~',
          btn: ['确定']
        });
        return;
      } else if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(idCard))) {
        that.$tier.one({
          content: '输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。',
          btn: ['确定']
        });
        return;
      }

      var url = '/anchorOperation/anchorCertificationApi/u/' + that.$user.user_id + '/t/' + that.$user.token;
      that.$tier.load();

      that.$ajax.post(url, {
        name: that.realName,
        card: that.idCard,
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
        } else {
          that.$tier.close();
          console.log('success!');
          that.$tier.one({
            content: "您已实名验证过啦，快去直播间打卡吧！",
            btn: ['     '], // 按钮数组
            class: { // 自定义css类
              main: "pop_container",
                content: "pop_content",
                btn: ["pop_submit2"],
            },
          });

          that.verifyForm_result = true;
          that.submit_result = true;
        }
      });
    }
  }
}
</script>

