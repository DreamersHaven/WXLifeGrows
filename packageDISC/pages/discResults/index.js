// packageDISC/pages/discResults/index.js
const app = getApp();

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
  onLoad: function (options) {
    var me = this;
    var user = app.getGlobalUserInfo();

    var serverUrl = app.serverUrl;
    //是否为管理员查看其他用户的测评报告
    var antherUserId = ""
    var userId = ''
    if (options.antherUserId != undefined) {
      antherUserId = options.antherUserId
      userId = antherUserId
    }
    if (antherUserId == "") {
      userId = user.userId
      var key = "reportList_" + userId
      var reportList = wx.getStorageSync(key)
      if (reportList) {
        console.info("该用户[" + userId + "]的历史测评报告已经缓存，直接从本地缓存中获取数据")
        me.setData({
          list: reportList, //将表中查询出来的信息传给list
        })
        return
      }
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
      success: function (res) {
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
   * 分享选中条目的测评报告
   */
  onShareAppMessage: function (res) {
    var that = this
    var shareId = ''
    var title = '这是我的DISC性格测评结果，分享给你呦'
    var path = ''
    var y = ''
    var m = ''
    var l = ''
    var a = ''
    var imageUrl = '/pages/resource/images/dsp.jpg'
    if (res.from = "button") {
      shareId = res.target.id
      var shareIds = shareId.split("_")
      console.log('用户进行分享测试报告的操作:' + shareIds[1])
      var list = that.data.list
      //依据数组对象唯一标识ID，定位到List相关信息
      for (var i = 0, len = list.length; i < len; i++) {
        if (shareIds[1] == list[i].id) {
          m = list[i].mresult
          l = list[i].lresult
          a = list[i].aresult
          y = list[i].yvalue
          break
        }
      }
      path = '/pages/discReport/index?yvalue=' + y + '&mresult=' + m + '&lresult=' + l + '&aresult=' + a + '&pageStyle=picAndReport&isShareOthers=true'

      return {
        title: title,
        path: path,
        imageUrl: imageUrl,
        success: function (res) {

        }

      }
    }
  },
  /**
   * 删除历史测试记录
   */
  delDiscResult: function (res) {
    var that = this
    var delId = res.target.id
    var delIds = delId.split("_")

    //连接服务器执行删除操作
    var serverUrl = app.serverUrl;
    var user = app.getGlobalUserInfo();
    var userId = user.userId
    var key = "reportList_" + userId

    wx.request({
      url: serverUrl + '/delDiscHistoryResult?id=' + delIds[1],
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.status == 200) {

          wx.showToast({
            title: "删除操作执行成功！",
            icon: 'none',
            duration: 3000
          })
          console.info("该用户[" + userId + "]的历史测评报告【" + delIds[1] + "】已经从数据库删除")

          var list = that.data.list
          //依据数组对象唯一标识ID，定位到List相关信息
          for (var i = 0, len = list.length; i < len; i++) {
            if (delIds[1] == list[i].id) {
              list.splice(i, 1)
              break
            }
          }
          //更新本地缓存信息
          that.setData({
            list: list, //将表中查询出来的信息传给list
          })
          wx.setStorageSync(key, list)
          //清除缓存的最新测评结果
          var newkey = "newDiscResult_" + userId
          wx.removeStorageSync(newkey)
          //如果最后一条测评报告也被删除，跳转到主页
          if (list.length == 0) {
            wx.redirectTo({
              url: '../../../index/index',
            })
          }


        } else if (res.data.status == 502) {
          wx.showToast({
            title: res.data.msg,
            duration: 3000,
            icon: "none",
            success: function () {
              wx.redirectTo({
                url: '../../../index/index',
              })
            }
          })
        }
      }
    })
  },


  showDiscReport(event) {
    var that = this;
    var targetId = event.currentTarget.id;
    console.log('查看历史测评记录的某条详细信息:' + targetId)
    var discResultList = that.data.list
    var yvalue = ''
    var mresult = ''
    var lresult = ''
    var aresult = ''
    var url = ''
    for (var i = 0, len = discResultList.length; i < len; i++) {
      if (discResultList[i].id == targetId) {
        yvalue = discResultList[i].yvalue
        mresult = discResultList[i].mresult
        lresult = discResultList[i].lresult
        aresult = discResultList[i].aresult
        url = '/pages/discReport/index?yvalue=' + yvalue + '&mresult=' + mresult + '&lresult=' + lresult + '&aresult=' + aresult + '&pageStyle=picAndReport&isShareOthers=false'

        wx.navigateTo({
          url: url,
        })

      }
    }
  }
})