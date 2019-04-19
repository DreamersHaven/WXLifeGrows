// pages/collection/index.js
const app = getApp()
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var me=this
   var list= util.getGlobalCollectionInfo()
    me.setData({
      list: list,
    })

  },

  /**
 * 显示用户最新的DISC测评结果
 * 1、依据用户ID查询DISC测评结果
 * 2、跳转到DISC图形展示页面，显示该用户的DISC测评结果
 *
 */
  showDiscResult: function (e) {
    var fromUrl ='/pages/collection/index'
    util.showDiscResult(e, fromUrl)
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

  },
  /**
   * 返回个人中心
   */
  goBack: function () {
    wx.redirectTo({
      url: '/pages/mine/mine',
    })
  },
})