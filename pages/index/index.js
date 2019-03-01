const app = getApp();

Page({
  data: {
    faceUrl: "../resource/images/noneface.png",
    isLogin: false,
    nickname: "游客",
    isMember: false,
    numOfTest: 0,
    buttonName: "登录"


  },

  /**
   * 页面记载
   * 判断用户是否已经登录
   * 获取用户信息并在页面上方显示
   */
  onLoad: function() {
    //app.editTabBar();//添加tabBar数据  
    var me = this;
    var user = app.getGlobalUserInfo();
   
    //如果用户已经登录
    if (user == undefined || user=='' || user.userId == undefined) {
      me.setData({
        isLogin: false
      })
    } else {
      console.log("用户已登录，用户名称" + user.username + ",用户头像：" + user.picId)
      var faceUrl = "/pages/resource/images/noneface.png";
      if (user.picId != null && user.picId != '' && user.picId != undefined) {
        faceUrl = user.picId;
      }
      me.setData({
        faceUrl: faceUrl,
        nickname: user.username,
        buttonName: "个人中心",
        isLogin: true
      });
      
    }

    
  },
  onShareAppMessage: function(res) {
    return {
      title: '超实用的性格测试，你也来试试吧！',
      path: '/pages/index/index',
      success: function() {},
      fail: function() {}
    }
  },
  data: {

  },

  onReady() {},
  /**
   * 我要测试
   * 1、判断用户是否已经登录
   * 2、如果已经登录跳转到DISC测试页面
   * 3、如果还未授权登录，跳转到用户登录页面
   */
  goDiscPage: function() {
    var common = require('../../utils/common.js')
    common.goDiscPage()

  },

  /**
   * 个人中心
   */
  goMinePage: function() {
    var user = app.getGlobalUserInfo();
    var userId = user.userId;
    console.log("当前用户的userId为：" + userId)
    if (userId != null && userId != '' && userId != undefined) {
      wx.redirectTo({
        url: '../mine/mine',
      })
    } else {
      console.log("用户未登录，跳转到授权登录页面...")
      wx.redirectTo({
        url: '../userLogin/login?redirectUrl=../mine/mine',
      })
    }

  }
});