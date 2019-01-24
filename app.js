//app.js
App({
  serverUrl: "http://192.168.199.116:8888",
  userInfo: null,
  
  setGlobalUserInfo: function (user) {
    wx.setStorageSync("userInfo", user);
  },

  getGlobalUserInfo: function () {
    return wx.getStorageSync("userInfo");
  },

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    //配置tabBar
    tabBar: {
      "color": "#7f8389",
      "selectedColor": "#329fff",
      "backgroundColor": "#f7f7fa",
      "borderStyle": "#ccc",
      "position": "bottom",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "text": "首页",
          "iconPath": "/img/icons/home.png",
          "selectedIconPath": "/img/icons/homeSelected.png",
          "selectedColor": "#329fff",
          "active": false
        },
        {
          "pagePath": "/pages/share/share",
          "text": "分享",
          "iconPath": "/img/icons/share.png",
          "selectedIconPath": "/img/icons/shareSelected.png",
          "selectedColor": "#329fff",
          "active": false
        },
        {
          "pagePath": "/pages/mine/mine",
          "text": "我的",
          "iconPath": "/img/icons/my.png",
          "selectedIconPath": "/img/icons/mySelected.png",
          "selectedColor": "#329fff",
          "active": false
        }
      ]
    },

  },
  //修改tabBar的active值  
  editTabBar: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.globalData.tabBar;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true;//根据页面地址设置当前页面状态  
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
  }
})