const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    usersNum:0,
    testsNum:0,
    userlist:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var me=this
    var user = app.getGlobalUserInfo();
    var userId = user.userId;
    var serverUrl = app.serverUrl;
    wx.showLoading({
      title: '正在获取统计信息，请稍后...',
    });
    // 调用后端
    wx.request({
      url: serverUrl + '/statDisc?userId=' + userId,
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        wx.hideLoading();
        if (res.data.status == 200) {
          console.info("管理员用户从服务器获取相关统计信息")
          me.setData({
            usersNum: res.data.data.usersNum,
            testsNum: res.data.data.testsNum
          })
          

        } else if (res.data.status == 502) {
          wx.showToast({
            title: res.data.msg,
            duration: 3000,
            icon: "none",
            success: function () {
              wx.redirectTo({
                url: '/pages/index/index',
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

  },
  goBack:function(){
    wx.redirectTo({
      url: '/pages/mine/mine',
    })
  },
  /**
     * 依据用户的最新DISC测试结果，跳转到查看DISC测试结果的详细页面
     */
  goDiscResultPage: function (info) {
    var mresult = ''
    var aresult = ''
    var lresult = ''
    var antherUserId=""
    
    if (info != undefined) {
      mresult = info.mresult
      lresult = info.lresult
      aresult = info.aresult
      antherUserId=info.userId

      // 页面跳转
      wx.redirectTo({
        url: '/packageDISC/pages/amlGraph/index?M=' + mresult + '&L=' + lresult + '&A=' + aresult + '&fromPage=mine&antherUserId=' + antherUserId,

      })
    } else {//如果用户还没有进行DISC测试，提示还未进行DISC测试，是否进行测试
      wx.showModal({
        title: '提示',
        content: '没有查询到该用户的DISC测评结果，是否重新输入？',
        success: function (res) {
          console.log(res)
          if (res.confirm) {
            console.log('用户点击了确定')
            
          } else {

            console.log('用户点击了取消')
          }
        }
      })

    }

  },
  /**
   * 依据查询条件显示用户信息
   */
  showUserList:function(e){
    var me = this
    var serverUrl = app.serverUrl;
    var formObject = e.detail.value;
    var userId = formObject.username;

    wx.showLoading({
      title: '请等待...',
    });
    // 调用后端
    wx.request({
      url: serverUrl + '/user/queryUsers?username=' + userId,
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        wx.hideLoading();
        if (res.data.status == 200) {
          //userlist
          if (res.data.data==null){
            wx.showModal({
              title: '提示',
              content: '没有查询到该用户是否重新输入？',
              success: function (res) {
                console.log(res)
                if (res.confirm) {
                  console.log('用户点击了确定')

                } else {

                  console.log('用户点击了取消')
                }
              }
            })
          }

          me.setData({
            userlist: res.data.data
          })
          
        }
      }
    })
  },
  /**
   * 显示用户最新的DISC测评结果
   * 1、依据用户ID查询DISC测评结果
   * 2、跳转到DISC图形展示页面，显示该用户的DISC测评结果
   *
   */
  showDiscResult: function (e) {
    var me = this
    var serverUrl = app.serverUrl;
 
    var userId = e.target.id;
    
    wx.showLoading({
      title: '请等待...',
    });
    // 调用后端
    wx.request({
      url: serverUrl + '/queryDiscResult?userId=' + userId ,
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        wx.hideLoading();
        if (res.data.status == 200) {
          me.goDiscResultPage(res.data.data)
        }
      }
    })
  }
})