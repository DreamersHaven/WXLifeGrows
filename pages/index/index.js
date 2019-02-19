const app = getApp();

Page({
  data: {
    faceUrl: "../resource/images/noneface.png",
    isLogin: false,
    nickname:"游客",
    isMember:false,
    numOfTest:0,
    buttonName:"登录"


  },
  
  /**
   * 页面记载
   * 判断用户是否已经登录
   * 获取用户信息并在页面上方显示
   */
  onLoad: function () {
    //app.editTabBar();//添加tabBar数据  
    var me = this;
    var user = app.getGlobalUserInfo();
    var userId = user.userId;

    
    /**
     * 如果用户已经登录，显示用户相关信息
     */
    if (userId != null && userId != '' && userId != undefined) {
      
      console.log("依据用户ID查询用户基本信息....");//正确返回结果
      wx.showLoading({
        title: '请等待...',
      });
      var serverUrl = app.serverUrl;
      // 调用后端
      wx.request({
        url: serverUrl + '/user/query?userId=' + userId,
        method: "POST",
        header: {
          'content-type': 'application/json', // 默认值
          'headerUserId': user.userId,
          'headerUserToken': user.userToken
        },
        success: function (res) {
          console.log(res.data);
          wx.hideLoading();
          if (res.data.status == 200) {
            var userInfo = res.data.data;
            var faceUrl = "../resource/images/noneface.png";
            if (userInfo.picId != null && userInfo.picId != '' && userInfo.picId != undefined) {
              faceUrl = serverUrl + userInfo.picId;
            }
            me.setData({
              faceUrl: faceUrl,
              nickname: userInfo.username,
              isLogin:true,
              buttonName:"个人中心"
            });
          } else if (res.data.status == 502) {
            wx.showToast({
              title: res.data.msg,
              duration: 3000,
              icon: "none",
              success: function () {
                wx.redirectTo({
                  url: '../userLogin/login',
                })
              }
            })
          }
        }
      })
    }else{
      me.setData({
        isLogin: false
      })
    }

  },
  onShareAppMessage: function (res) {
    return {
      title: '超实用的性格测试，你也来试试吧！',
      path: '/pages/index/index',
      success: function () {},
      fail: function () {}
    }
  },
  data: {

  },

  onReady() {
  },
  /**
   * 我要测试
   * 1、判断用户是否已经登录
   * 2、如果已经登录跳转到DISC测试页面
   * 3、如果还未授权登录，跳转到用户登录页面
   */
  goDiscPage: function () {
    var user = app.getGlobalUserInfo();
    var userId = user.userId;
    console.log("当前用户的userId为：" + userId)
    if (userId != null && userId != '' && userId != undefined) {
      wx.navigateTo({
        url: '/packageDISC/pages/disc/index',
      })
    }else{
      console.log("用户未登录，跳转到授权登录页面..." )
      wx.navigateTo({
        url: '../userLogin/login?redirectUrl=/packageDISC/pages/disc/index',
      })
    }
 
  },

  /**
   * 个人中心
   */
  goMinePage: function () {
    var user = app.getGlobalUserInfo();
    var userId = user.userId;
    console.log("当前用户的userId为：" + userId)
    if (userId != null && userId != '' && userId != undefined) {
      wx.navigateTo({
        url: '../mine/mine',
      })
    } else {
      console.log("用户未登录，跳转到授权登录页面...")
      wx.navigateTo({
        url: '../userLogin/login?redirectUrl=../mine/mine',
      })
    }

  }
});
