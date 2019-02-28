// packageDISC/pages/discReport/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isQuerySuss:true,
    discType: "",
    cname: "",
    ename: "",
    evaDesc: "",
    behaChara: "",
    communicate: "",
    ability: "",
    superiority: "",
    vulnerable: "",
    yvalue: "",
    mresult: "",
    lresult: "",
    aresult: "",
    pageStyle: 'picAndReport'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var me = this;

    //接收页面传递的测试结果
    var yvalue = options.yvalue
    var mresult = options.mresult
    var lresult = options.lresult
    var aresult = options.aresult
    var pageStyle = 'picAndReport'
    console.log("用户分享的测试报告类型：" + options.pageStyle)
    if (options.pageStyle != undefined){
      pageStyle = options.pageStyle
    }

    console.log("依据用户测评结果查询详细测评报告,坐标值为：" + yvalue + "DISC值为：" + mresult); //正确返回结果

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
      success: function(res) {
        console.log(res.data);
        wx.hideLoading();
        if (res.data.status == 200) {
          var reportInfo = res.data.data;
          //添加异常处理如果没有查找到相关的测评信息
          if (reportInfo != undefined) {
            me.setData({

              discType: reportInfo.discType,
              cname: reportInfo.cname,
              ename: reportInfo.ename,
              evaDesc: reportInfo.evaDesc,
              behaChara: reportInfo.behaChara,
              communicate: reportInfo.communicate,
              ability: reportInfo.ability,
              superiority: reportInfo.superiority,
              vulnerable: reportInfo.vulnerable,
              yvalue: yvalue,
              mresult: mresult,
              lresult: lresult,
              aresult: aresult,
              pageStyle:pageStyle

            });

          }else{
            me.setData({

              discType: '未找到符合的测评报告',
              yvalue: yvalue,
              mresult: mresult,
              lresult: lresult,
              aresult: aresult,
              isQuerySuss:false,
              pageStyle: pageStyle
            });
          }

        } else if (res.data.status == 502) {
          wx.showToast({
            title: res.data.msg,
            duration: 3000,
            icon: "none",
            success: function() {
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
   * 
   */
  onShareAppMessage: function() {

  },

  /**
   * 用户点击TAB页
   * ../amlGraph/index?M='+this.data.M+'&L='+this.data.L+'&A='+this.data.A
   */
  handleChange({
    detail
  }) {
    var that = this;
    if (detail.key == "discReport") {

    } else if (detail.key == "picMGraph") {
      wx.navigateTo({
        url: '/packageDISC/pages/amlGraph/index?pageStyle=shareMeReport&M=' + this.data.mresult + '&L=' + this.data.lresult + '&A=' + this.data.aresult,
      })
    }

  }

})