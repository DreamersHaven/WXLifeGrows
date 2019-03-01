const app = getApp();

 /**
   * 我要测试
   * 1、判断用户是否已经登录
   * 2、如果已经登录跳转到DISC测试页面
   * 3、如果还未授权登录，跳转到用户登录页面
   */
function goDiscPage(){
  var user = app.getGlobalUserInfo();
  var userId = user.userId;
  console.log("当前用户的userId为：" + userId)
  if (userId != null && userId != '' && userId != undefined) {
    wx.redirectTo({
      url: '/packageDISC/pages/disc/index',
    })
  } else {
    console.log("用户未登录，跳转到授权登录页面...")
    wx.redirectTo({
      url: '../userLogin/login?redirectUrl=/packageDISC/pages/disc/index',
    })
  }

}

module.exports={
  goDiscPage: goDiscPage
}


