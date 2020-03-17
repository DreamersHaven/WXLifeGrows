 

Page({
  data: {
 

  },

  /**
   * 页面记载
   * 判断用户是否已经登录
   * 获取用户信息并在页面上方显示
   */
  onLoad: function() {





  },


  onShareAppMessage: function(res) {
    return {
      title: '超实用的自我探索工具箱，你也来试试吧！',
      path: '/packageWhatYouWant/pages/index/index',
      success: function() {},
      fail: function() {}
    }
  },
  data: {

  },

  onReady() {},




  /**
   * dongyaxin 20200315
   * 在主页添加其他自我探索工具
   * 左右滑动可以切换探索工具
   */

  goWhatYouWant: function(res) {
    wx.navigateTo({
      url: '/packageWhatYouWant/pages/first/index',
    })
  }

});