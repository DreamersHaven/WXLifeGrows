const app = getApp();

Page({

  /**
   * 页面的初始数据
   * 
   */
  data: {
    //判断用户是否已经登录
    isLogin: false,
    userId: '',
    userName: '',
    showLeft1: false
  },

  /**
   * 生命周期函数--监听页面加载
   * 1、获取用户登录信息
   * 2、当点击【收集反馈】、【查看结果】按钮时，首先判断用户是否已经授权登录
   *    如果已经授权登录，跳转到相关页面，进行后续操作
   *    如果没有授权登录，先跳转到登录页面。提示用户登录
   * 3、【收集反馈】通过微信小程序提供的分享功能实现
   *    关键参数：userId（发起人用户ID）
   * 4、【查看结果】
   *    关键参数：userId（发起人用户ID）
   */
  onLoad: function(options) {
    var user = app.getGlobalUserInfo();
    var me = this;
    if (user == undefined || user == '' || user.userId == undefined) {

    } else {
      this.data.isLogin = true
      this.data.userId = user.userId
      //如果用户设置了昵称，优先显示用户的昵称，否则显示用户微信名称
      var userNameStor = wx.getStorageSync("openMy_userName")
      if (userNameStor) {
        this.data.userName = userNameStor;
      } else {
        this.data.userName = user.username
      }
      me.setData({
        isLogin: true,
        userName: this.data.userName
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.hideHomeButton()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  /**
   * 跳转到授权登录页面
   */
  goLogin: function(res) {
    wx.redirectTo({
      url: '../../../pages/userLogin/login?redirectUrl=/packageOpenMy/pages/index/index',
    })
  },

  //packageOpenMy/pages/collection/index?userId=' + userId + '&userName=' + userName
  goFeedbackPage: function(res) {
    console.log("跳转到结果页面")
    wx.navigateTo({
      url: '/packageOpenMy/pages/feedback/index?userId=' + this.data.userId + '&userName=' + this.data.userName,
    })
  },
  /**
   * 用于显示设置昵称等抽屉层
   */
  toggleLeft1() {
    this.setData({
      showLeft1: !this.data.showLeft1
    });
  },

  /**
   * 将用户的设置信息保存到本地缓存中
   */
  setup(e) {

    var userName = e.detail.value.in_userName
    if (userName == '') {
      wx.showToast({
        title: '亲，昵称不能为空呀~',
        icon: 'none',
        duration: 2000
      })
      return
    }
    var key = "openMy_userName"
    wx.setStorageSync(key, userName)
    this.data.userName = userName
    this.setData({
      showLeft1: !this.data.showLeft1,
      userName: this.data.userName
    });
  },

  /**
   * 用户点击右上角分享
   * 依据不同的分享按钮ID，响应不同操作
   * 
   */
  onShareAppMessage: function(res) {
    var buttonName = res.target.id
    //获得发起人ID
    var userName = this.data.userName
    var userId = this.data.userId
    if (buttonName == 'shareCollection') {


      return {
        title: 'Hi老铁，我是' + userName + ',请帮忙匿名回答关于我的四个问题，让我更了解自己，抱拳抱拳~',
        path: '/packageOpenMy/pages/collection/index?userId=' + userId + '&userName=' + userName,
        success: function() {},
        fail: function() {}
      }
    } else {
      return {
        title: '探索别人眼中的自己，你也来试试吧！',
        path: '/packageOpenMy/pages/index/index',
        success: function() {},
        fail: function() {}
      }
    }
  }

})