const app = getApp();
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    discType:''

  },

  /**
   * 调用后台接口，查询某种类型的用户列表信息
   */
  onLoad: function (options) {
    var me=this
    var serverUrl = app.serverUrl;
    var user = app.getGlobalUserInfo();
    var userId = user.userId
    var url = serverUrl + '/user/queryUserInfoByDiscType?userId=' + userId + '&discType=' + options.discType
    var data = {
    }
    util.post(url, data).then((res) => {
      me.setData({
        list: res.data.data,
        discType: options.discType
      })

    }).catch((errMsg) => {
      // 失败弹出框
      wx.showToast({
        title: errMsg,
        icon: 'none',
        duration: 3000
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})