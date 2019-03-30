const app = getApp()
var util = require('../../utils/util.js')
Page({
  data: {

  },

  doRegist: function (e) {
    var me = this;
    var formObject = e.detail.value;
    var username = formObject.username;
    var password = formObject.password;

    // 简单验证
    if (username.length == 0 || password.length == 0) {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none',
        duration: 3000
      })
    } else {
      var serverUrl = app.serverUrl;
      wx.showLoading({
        title: '请等待...',
      });
      //调用后端
      var data = {
        username: username,
        password: password
      }
      var url = serverUrl + '/regist'

      util.post(url, data).then((res) => {
        console.log(res.data);
        wx.hideLoading();
        wx.showToast({
          title: "用户注册成功~！！！",
          icon: 'none',
          duration: 3000
        }),
          app.setGlobalUserInfo(res.data.data);
        // 页面跳转
        wx.redirectTo({
          url: '../index/index',
        })
      }).catch((errMsg) => {
        // 失败弹出框
        wx.showToast({
          title: errMsg,
          icon: 'none',
          duration: 3000
        })
      })
    }
  },

  goLoginPage: function () {
    wx.navigateTo({
      url: '../userLogin/login',
    })
  }
})