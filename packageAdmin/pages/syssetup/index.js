// packageAdmin/pages/syssetup/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch1: false
  },


  onChange(event) {
    const detail = event.detail;
    this.setData({
      'switch1': detail.value
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  /**微信支付接口测试 */
  goWxAlipay: function () {
    var that = this;
    var serverUrl = app.serverUrl;
    var user = app.getGlobalUserInfo();
    console.log("user openID:" + user.wxId);
    var payment="1";
    wx.request({
      url: serverUrl + '/wxpayment',
      method: "POST",
      data: {
        wxId: user.wxId,
        payment: payment
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var c = res.data;
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
      },
      fail: function (res) { },
      complete: function (res) { },
    });
  }
})