const app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function (params) {
    var me = this;
    var redirectUrl = params.redirectUrl;
    // debugger;
    if (redirectUrl != null && redirectUrl != undefined && redirectUrl != '') {
      redirectUrl = redirectUrl.replace(/#/g, "?");
      redirectUrl = redirectUrl.replace(/@/g, "=");

      me.redirectUrl = redirectUrl;
    }
  },

  // 登录  
  doLogin: function (e) {
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
      // 调用后端
      // 调用后端
      var data = {
        username: username,
        password: password
      }
      var url = serverUrl + '/login'
      util.post(url, data).then((res) => {
        console.log(res.data);
        wx.hideLoading();
        // 登录成功跳转 
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000
        });
        
        app.setGlobalUserInfo(res.data.data);
        // 页面跳转

        var redirectUrl = me.redirectUrl;
        if (redirectUrl != null && redirectUrl != undefined && redirectUrl != '') {
          wx.redirectTo({
            url: redirectUrl,
          })
        } else {
          wx.redirectTo({
            //要跳转的页面是动态设置的
            url: '../index/index',
          })
        }
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

  goRegistPage:function() {
    wx.redirectTo({
      url: '../userRegist/regist',
    })
  },

  /**
   * 微信授权登录
   */
  bindGetUserInfo(res) {
    var me = this;
    let info = res;
    var serverUrl = app.serverUrl;
    console.log(info);
    if (info.detail.userInfo) {
      console.log("点击了同意授权");
      wx.login({
        success: function (res) {
          if (res.code) {
            //调用后台
            var data= {
              code: res.code,
              nickName: info.detail.userInfo.nickName,
              city: info.detail.userInfo.city,
              province: info.detail.userInfo.province,
              avatarUrl: info.detail.userInfo.avatarUrl
            }
            var url = serverUrl + '/wxlogin'
            util.post(url, data).then((res) => {
              // 登录成功跳转 
              wx.showToast({
                title: '微信授权登录成功',
                icon: 'success',
                duration: 2000
              });
              app.setGlobalUserInfo(res.data.data);

              var redirectUrl = me.redirectUrl;
              if (redirectUrl != null && redirectUrl != undefined && redirectUrl != '') {
                wx.redirectTo({
                  url: redirectUrl,
                })
              } else {
                wx.redirectTo({
                  //要跳转的页面是动态设置的
                  url: '../index/index',
                })
              }
            }).catch((errMsg) => {
              // 失败弹出框
              wx.showToast({
                title: '授权失败',
                icon: 'none',
                duration: 3000
              })
            })


          } else {
            console.log("授权失败");
          }
        },
      })

    } else {
      console.log("点击了拒绝授权");
    }
  }      
})