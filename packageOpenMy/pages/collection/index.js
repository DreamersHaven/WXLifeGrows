const app = getApp()
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   * 
   * 待完善
   * 1、输入校验，不能含有#字符
   * 2、提交成功后，不跳转页面，给予提交成功的提示
   *    并且更新用户缓存的状态，标识某个用户的某个表单，已经提交了。
   *    二次进入的时候，给予已经提交而非填写表单的提示。
   */
  data: {
    userId: '',
    userName: '',
    state:0 //用于标识该表单的状态
  },

  /**
   * 生命周期函数--监听页面加载
   * 获取页面传递的关键参数
   */
  onLoad: function(options) {
    var userId = options.userId
    var userName = options.userName
    var me = this;
    console.log("发起测评的用户ID：" + userId);
    this.data.userId = userId
    this.data.userName = userName
    
    //从用户本地缓存中获取该表单的状态
    var key = "openMyFromState_def_" + userId
    var state = wx.getStorageSync(key)
    if (state) {
      this.data.state = state;
    }

    me.setData({
      userName: userName,
      userId: userId,
      state: state
    })

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
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 响应表单提交的操作
   * 
   */
  handleGoClick(e) {
    var me = this;
    //判断要执行什么操作
    var buttonName = e.detail.target.id
    var question1 = e.detail.value.question1
    var question2 = e.detail.value.question2
    var question3 = e.detail.value.question3
    var question4 = e.detail.value.question4
    //如果执行暂存操作，依据页面中数据更新数组内容，将数组保存到本地缓存中
    if (buttonName == 'saveBut') {

    }
    //如果执行提交操作，将数据提交到服务器端
    if (buttonName == 'commitBut') {
      //提交前的数据输入校验（4个问题须全部填写,不能输入#号以及表情等特殊符号）
      if (question1 == '' || question2 == '' || question3 == '' || question4 == '') {
        wx.showToast({
          title: '老铁，四个问题都填一下呗~',
          icon: 'none',
          duration: 2000
        })
        return
      }
      //校验通过将数据提交到服务器
      var serverUrl = app.serverUrl;
      wx.showLoading({
        title: '数据提交中，请稍后...',
      });
      //组装传递到服务器的数据
      var userId = this.data.userId
      var answer = question1 + "#" + question2 + "#" + question3 + "#" + question4
      var questions = "1#2#3#4"
      var data = {
        userId: userId,
        questions: questions,
        answer: answer
      }
      //此处为后台服务的地址，可访问https://www.dreamershaven.cn/disc/swagger-ui.html
      //查看后台接口对应的链接
      var url = serverUrl + '/openMy/saveDiscResult'

      //异步方式调用后台
      util.post(url, data).then((res) => {
        console.log(res.data);
        wx.hideLoading();
      //更新本地缓存的状态
        var key = "openMyFromState_def_" + userId
        wx.setStorageSync(key,1)
        this.data.state=1
        me.setData({
          state: 1
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
  goOpenMy: function (res) {
    wx.redirectTo({
      url: '/packageOpenMy/pages/index/index',
    })
  },
  /**
   * 再填一次功能，主要用于测试
   */
  again: function (res){
    var me = this;
    var userId = this.data.userId
    var key = "openMyFromState_def_" + userId
    wx.setStorageSync(key, 0)
    this.data.state=0
    me.setData({
      state: 0
    })
  }

})