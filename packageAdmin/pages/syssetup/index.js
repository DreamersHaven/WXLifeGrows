// packageAdmin/pages/syssetup/index.js
const app = getApp()
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch1: false,
    list: [] //将list的数据传到前台wxml页面中 
  },

  /**
   * 开关设置发生变化时，更改页面参数值
   * 并将更给结果提交给后台服务器
   */
  onChange(event) {
    var that = this
    const detail = event.detail;
    var keyValue = event.target.id
    var list = that.data.list

    //依据系统开关的键值（开关英文名称），定位到List相关信息
    var currentSwitch = ""
    for (var i = 0, len = list.length; i < len; i++) {
      if (keyValue == list[i].keyvalue) {
        currentSwitch = "list[" + i + "].isopen"
        break
      }
    }

    that.setData({
      [currentSwitch]: detail.value
    })

    //将开关信息更新到后台服务器，小程序依据开关的设置信息调整相关功能
    var user = app.getGlobalUserInfo();
    var userId = user.userId;
    var serverUrl = app.serverUrl;
    var data = {
      userId: userId,
      keyvalue: keyValue,
      isopen: detail.value
    }
    var url = serverUrl + '/admin/updateswitchs'
    util.post(url, data).then((res) => {
      console.info("管理员用户更改系统开关设置信息")
    }).catch((errMsg) => {
      wx.showToast({
        title: errMsg,
        duration: 3000,
        icon: "none",
        success: function() {
          wx.redirectTo({
            url: '/pages/index/index',
          })
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   * 从后台服务器获得系统开关设置信息，以列表形式展示
   */
  onLoad: function(options) {
    var me = this;
    var user = app.getGlobalUserInfo();
    var userId = user.userId;
    var serverUrl = app.serverUrl;

    wx.showLoading({
      title: '正在获取系统设置信息，请稍后...',
    });
    // 调用后端
    var data = {
      userId: userId
    }
    var url = serverUrl + '/admin/queryswitchs'
    util.post(url, data).then((res) => {
      console.info("管理员用户从服务器获取相关系统设置信息")
      wx.hideLoading();
      me.setData({
        list: res.data.data, //将表中查询出来的信息传给list
      })
    }).catch((errMsg) => {
      wx.showToast({
        title: errMsg,
        duration: 3000,
        icon: "none",
        success: function() {
          wx.redirectTo({
            url: '/pages/index/index',
          })
        }
      })
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
  /**微信支付接口测试 */
  goWxAlipay: function() {
    var that = this;
    var serverUrl = app.serverUrl;
    var user = app.getGlobalUserInfo();
    var payment = "1";
    var data = {
      wxId: user.wxId,
      payment: payment
    }
    var url = serverUrl + '/wxpayment'
    util.post(url, data).then((res) => {
      console.log("服务端返回订单号:");
      console.log(res.data);

      wx.requestPayment({
        timeStamp: res.data.data.timeStamp,
        nonceStr: res.data.data.nonceStr,
        package: res.data.data.package,
        signType: 'MD5',
        paySign: res.data.data.paySign,
        success(res) {
          console.log("统一下单接口成功");
        },
        fail(res) {
          console.log("统一下单接口失败");
          console.log(res)
        }
      });
    }).catch((errMsg) => {
      wx.showToast({
        title: errMsg,
        duration: 3000,
        icon: "none",
        success: function() {
          wx.redirectTo({
            url: '/pages/index/index',
          })
        }
      })
    })


  }
})