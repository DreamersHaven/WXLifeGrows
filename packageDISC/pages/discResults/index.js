// packageDISC/pages/discResults/index.js
const app = getApp();
const {
  $Message
} = require('../../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {

    visible2: false,
    toggle2: false,
    toggle: false,
    list: [] //将list的数据传到前台wxml页面中 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var me = this;
    var user = app.getGlobalUserInfo();

    var serverUrl = app.serverUrl;
    var userId = user.userId
    var key = "reportList_" + userId
    var reportList=wx.getStorageSync(key)
    if (reportList){
      console.info("该用户[" + userId+"]的历史测评报告已经缓存，直接从本地缓存中获取数据")
      me.setData({
        list: reportList, //将表中查询出来的信息传给list
      })
      return
    }
    
    wx.showLoading({
      title: '用户【' + userId + '】的历史测评结果加载中，请稍后...',
    });
    // 调用后端
    wx.request({
      url: serverUrl + '/queryDiscHistoryResult?userId=' + userId,
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data);
        wx.hideLoading();
        if (res.data.status == 200) {
          console.info("该用户[" + userId + "]的历史测评报告已经从数据库加载到本地缓存")
          me.setData({
            list: res.data.data, //将表中查询出来的信息传给list
          })
          wx.setStorageSync(key, res.data.data)

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
   */
  onShareAppMessage: function() {

  },

  handleCancel2() {
    this.setData({
      visible2: false,
      toggle: this.data.toggle ? false : true
    });
    console.log(this.data.toggle, 111111111)
  },
  handleClickItem2() {
    const action = [...this.data.actions2];
    action[0].loading = true;

    this.setData({
      actions2: action
    });

    setTimeout(() => {
      action[0].loading = false;
      this.setData({
        visible2: false,
        actions2: action,
        toggle: this.data.toggle ? false : true
      });

    }, 2000);
  },
  handlerCloseButton() {
    this.setData({
      toggle2: this.data.toggle2 ? false : true
    });
  },
  actionsTap() {
    this.setData({
      visible2: true
    });
  },

  showDiscReport(event){
    var that = this;
    var targetId = event.currentTarget.id;
    console.log('查看历史测评记录的某条详细信息:' + targetId)
    var discResultList=that.data.list
    var yvalue=''
    var mresult=''
    var lresult=''
    var aresult=''
    var url=''
    for (var i = 0, len = discResultList.length; i < len; i++) {
      if (discResultList[i].id == targetId){
        yvalue = discResultList[i].yvalue
        mresult = discResultList[i].mresult
        lresult = discResultList[i].lresult
        aresult = discResultList[i].aresult
        url = '/pages/discReport/index?yvalue=' + yvalue + '&mresult=' + mresult + '&lresult=' + lresult + '&aresult=' + aresult +'&pageStyle=picAndReport&isShareOthers=false'

        wx.navigateTo({
          url: url,
        })

      }
    }
  }
})