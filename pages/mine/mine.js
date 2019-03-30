
const app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    faceUrl: "",
    isMe: true,
    //判断用户是否为管理员用户
    isAdmin: false,
    //查看用户最新测评结果所跳转的不同的页面
    discUrl: '/packageDISC/pages/amlGraph/index',
    //判断是否为超级管理员
    isSYSAdmin: false

  },

  setMineInfo(params, user) {
    var me = this;
    var userId = user.userId;
    var publisherId = params.publisherId;
    var isMe = true
    if (publisherId != null && publisherId != '' && publisherId != undefined) {
      userId = publisherId;
      isMe = false
    }
    var faceUrl = "/pages/resource/images/noneface.png";
    if (user.picId != null && user.picId != '' && user.picId != undefined) {
      faceUrl = user.picId;
    }
    //用户所属部门若为1（管理部），即为管理员身份
    var isAdmin = false
    if (user.deptId != null && user.deptId == '1' && user.deptId != undefined) {
      isAdmin = true;
    }

    var isSYSAdmin = false
    if (user.wxId != null && user.wxId == 'oWs2o5WAv1v9LrnWjwWzKbO2PggY' && user.wxId != undefined) {
      isSYSAdmin = true;
    }

    me.setData({
      userId: userId,
      faceUrl: faceUrl,
      nickname: user.username,
      isMe: isMe,
      //publisherId: publisherId,
      serverUrl: app.serverUrl,
      isAdmin: isAdmin,
      isSYSAdmin: isSYSAdmin
    });
  },

  onLoad: function (params) {

    var me = this;

    // var user = app.userInfo;
    // 修改原有的全局对象为本地缓存
    var user = app.getGlobalUserInfo();
    if (user) {
      console.log('从本地缓存中获取用户信息：' + user)
      me.setMineInfo(params, user)
      return
    }
    //如果没有查询到本地用户缓存信息，提示用户session过期，是否重新登录
    wx.showModal({
      title: '提示',
      content: '用户session过期，是否重新登录？',
      success: function (res) {

        if (res.confirm) {
          wx.redirectTo({
            url: '../userLogin/login?redirectUrl=/pages/mine/mine',
          })
        } else {

        }
      }
    })

  },



  logout: function () {
    // var user = app.userInfo;
    var user = app.getGlobalUserInfo();

    var serverUrl = app.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    // 调用后端
    var data = {

    }
    var url = serverUrl + '/logout?userId=' + user.userId
    util.post(url, data).then((res) => {
      console.log(res.data);
      wx.hideLoading();
      // 登录成功跳转 
      wx.showToast({
        title: '注销成功',
        icon: 'success',
        duration: 2000
      });

      // 注销以后，清空缓存
      wx.removeStorageSync("userInfo")
      // 页面跳转
      wx.redirectTo({
        url: '../index/index',
      })
    }).catch((errMsg) => {
      console.log(errMsg)
    })


  },

  changeFace: function () {
    var me = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);

        wx.showLoading({
          title: '上传中...',
        })
        var serverUrl = app.serverUrl;
        // fixme 修改原有的全局对象为本地缓存
        var userInfo = app.getGlobalUserInfo();

        wx.uploadFile({
          url: serverUrl + '/user/uploadFace?userId=' + userInfo.userId,  //app.userInfo.id,
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            'content-type': 'application/json', // 默认值
            'headerUserId': userInfo.userId,
            'headerUserToken': userInfo.userToken
          },
          success: function (res) {
            var data = JSON.parse(res.data);
            console.log(data);
            wx.hideLoading();
            if (data.status == 200) {
              wx.showToast({
                title: '上传成功!~~',
                icon: "success"
              });

              var imageUrl = data.data;
              me.setData({
                faceUrl: serverUrl + imageUrl
              });

            } else if (data.status == 500) {
              wx.showToast({
                title: data.msg
              });
            } else if (res.data.status == 502) {
              wx.showToast({
                title: res.data.msg,
                duration: 2000,
                icon: "none",
                success: function () {
                  wx.redirectTo({
                    url: '../userLogin/login',
                  })
                }
              });

            }

          }
        })


      }
    })
  },

  goHomePage: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  /**
   * 显示统计查询页面
   */
  showAdminResult: function () {
    wx.redirectTo({
      url: '/packageAdmin/pages/admin/index',
    })
  },

  /**
   * 显示系统设置页面
   */
  showSysSetUp: function () {
    wx.navigateTo({
      url: '/packageAdmin/pages/syssetup/index',
    })

  },
  /**
 * 显示Who am I 页面
 */
  showSimpleResult: function () {
    wx.redirectTo({
      url: '/pages/simpleReport/index',
    })
  },
  /**
   * 依据用户的最新DISC测试结果，跳转到查看DISC测试结果的详细页面
   */
  goDiscResultPage: function (info) {
    var mresult = ''
    var aresult = ''
    var lresult = ''
    var discType = ''
    if (info != undefined) {
      mresult = info.mresult
      lresult = info.lresult
      aresult = info.aresult
      discType = info.discType

      var url = this.data.discUrl + '?M=' + mresult + '&L=' + lresult + '&A=' + aresult + '&fromPage=mine&discType=' + discType

      // 页面跳转
      wx.redirectTo({
        url: url,

      })
    } else {//如果用户还没有进行DISC测试，提示还未进行DISC测试，是否进行测试
      wx.showModal({
        title: '提示',
        content: '您还未进行DISC测试，是否进行测试？',
        success: function (res) {
          console.log(res)
          if (res.confirm) {
            console.log('用户点击了确定')
            var common = require('../../utils/common.js')
            common.goDiscPage()
          } else {

            console.log('用户点击了取消')
          }
        }
      })

    }

  },
  /**
   * 显示用户最新的DISC测评结果
   * 1、依据用户ID查询DISC测评结果
   * 2、跳转到DISC图形展示页面，显示该用户的DISC测评结果
   * 3、将该用户最新的DISC测评结果加入缓存，注意在保存新报告的时候，
   *    该缓存信息需要被清除，从新获取数据
   */
  showDiscResult: function (e) {

    var me = this
    /**依据请求控件来源不同，跳转到不同的页面 */
    var targetId = e.currentTarget.id;
    if (targetId != undefined && targetId == 'simpleReport') {
      this.data.discUrl = '/pages/simpleReport/index'
    }
    var user = app.getGlobalUserInfo();
    var serverUrl = app.serverUrl;

    var key = "newDiscResult_" + user.userId
    var newDiscResult = wx.getStorageSync(key)
    if (newDiscResult) {
      console.log('从本地缓存中获取该用户的最新DISC测评结果')
      me.goDiscResultPage(newDiscResult)
      return
    }
    wx.showLoading({
      title: '请等待...',
    });
    
    // 调用后端
    var data = {

    }
    var url = serverUrl + '/queryDiscResult?userId=' + user.userId
    util.post(url, data).then((res) => {
      console.log(res.data);
      wx.hideLoading();
      me.goDiscResultPage(res.data.data)
      if (res.data.data != undefined) {
        console.log('从服务器中获取该用户最新的DISC测评结果，并缓存到本地')
        wx.setStorageSync(key, res.data.data)
      }
    }).catch((errMsg) => {
      console.log(errMsg)
    })
  }
})
