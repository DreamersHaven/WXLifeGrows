// packageDISC/pages/discReport/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    discType:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var me = this;
    
    //接收页面传递的测试结果
    var yvalue = options.yvalue
    var mresult = options.mresult

    console.log("依据用户测评结果查询详细测评报告,坐标值为：" + yvalue + "DISC值为：" + mresult);//正确返回结果
    
    wx.showLoading({
      title: '报告生成中，请稍后...',
    });
    var serverUrl = app.serverUrl;
    // 调用后端
    wx.request({
      url: serverUrl + '/disc/querydisctype',
      method: "POST",
      data: {
        yvalue: yvalue,
        mresult: mresult
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        wx.hideLoading();
        if (res.data.status == 200) {
          var reportInfo = res.data.data;
          me.setData({
            discType: reportInfo.discType
          });
        } else if (res.data.status == 502) {
          wx.showToast({
            title: res.data.msg,
            duration: 3000,
            icon: "none",
            success: function () {
              wx.redirectTo({
                url: '../../index/index',
              })
            }
          })
        }
      }
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