// pages/collection/index.js
const app = getApp()
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    //当前关注人ID，用于记录长按操作对应的关注人ID
    curAttentionID:'',
    visibleMore: false,
    actionsMore: [
      {
        name: '取消关注',
        color: '#2d8cf0',
      },
      {
        name: '微信聊天',
        color: '#19be6b'
      },
      {
        name: '取消'
      }
    ]
  },

  // 触摸开始时间
  touchStartTime: 0,
  // 触摸结束时间
  touchEndTime: 0,
  // 最后一次单击事件点击发生时间
  lastTapTime: 0,
  // 单击事件点击后要触发的函数
  lastTapTimeoutFunc: null,

  /// 按钮触摸开始触发的事件
  touchStart: function (e) {
    this.touchStartTime = e.timeStamp
  },

  /// 按钮触摸结束触发的事件
  touchEnd: function (e) {
    this.touchEndTime = e.timeStamp
  },

  // 单击、双击
  multipleTap: function (e) {
    var that = this
    // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
    if (that.touchEndTime - that.touchStartTime < 350) {
      // 当前点击的时间
      var currentTime = e.timeStamp
      var lastTapTime = that.lastTapTime
      // 更新最后一次点击时间
      that.lastTapTime = currentTime

      // 如果两次点击时间在300毫秒内，则认为是双击事件
      if (currentTime - lastTapTime < 300) {
        console.log("double tap")
        // 成功触发双击事件时，取消单击事件的执行
        clearTimeout(that.lastTapTimeoutFunc);
        wx.showModal({
          title: '提示',
          content: '双击事件被触发',
          showCancel: false
        })
      } else {
        // 单击事件延时300毫秒执行，这和最初的浏览器的点击300ms延时有点像。
        that.lastTapTimeoutFunc = setTimeout(function () {
          that.showDiscResult(e)
        }, 300);
      }
    }
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

  /// 长按
  longTap: function (e) {
    var curAttentionID = e.target.id;
    this.setData({
      visibleMore: true,
      curAttentionID: curAttentionID
    });
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
 
  /**
   * 用户可以在关注列表页面，进行更多的操作
   * 1、取消关注
   * 2、微信聊天：直接打开和该用户的微信聊天窗口
   */
  moreFun({ detail }) {
    const index = detail.index;

    if (index === 0) {
      var me=this
      //取消关注，访问后台执行删除某个关注用户的删除操作
      //执行成功后，重新获取关注列表信息
      var curAttentionID = this.data.curAttentionID
      console.log("用户取消对【" + curAttentionID+"】,的关注")
      util.cancelFocus(curAttentionID)
      //遍历数组，将给对象从数组中删除
      var listTemp=me.data.list
      for (var i = 0, len = listTemp.length; i < len; i++) {
        if (listTemp[i].userId == curAttentionID){
          listTemp.splice(i,1);
          break
        }
      }
      me.setData({
        list: listTemp,
      })
      

    } else if (index === 1) {
      //微信聊天
    }

    this.setData({
      visibleMore: false
    });
  }
})