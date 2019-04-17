const app = getApp();
var util = require('../../../utils/util.js')
Page({
  data: {
    percent: 0,
    status: 'normal',
    list: [],
    percentages: []
  },
  /**页面加载，为柱状图的DISC统计数据赋值 */
  onLoad: function (params) {
    var me = this
    //调用后台接口 statNumByDiscType
    var serverUrl = app.serverUrl;
    var user = app.getGlobalUserInfo();
    var userId = user.userId
    var url = serverUrl + '/statNumByDiscType?userId=' + userId
    var data = {
    }
    util.post(url, data).then((res) => {

      //依据后台的结果生成柱状图的名称和数值列表
      var discTypes = res.data.data
      console.log(discTypes)
      var sum=0
      var percentages=[]
      //计算总数
      for (var i = 0, len = discTypes.length; i < len; i++) {
        sum = sum + discTypes[i].num
      }
      //计算各个类型占比
      for (var i = 0, len = discTypes.length; i < len; i++) {
        discTypes[i].discTypeName= (discTypes[i].num / sum*100).toFixed(2)
        if (discTypes[i].discType==""){
          discTypes[i].discType="未找到"
        }
      }


      me.setData({
        list: discTypes,
        percentages: percentages
      })

    }).catch((errMsg) => {
      // 失败弹出框
      wx.showToast({
        title: errMsg,
        icon: 'none',
        duration: 3000
      })
    })
  },
  /**
   * 升序
   */
  handleAdd() {
    // 数组排序，可以单独放在一个方法里面，再去调用
    var newArray = this.data.list;
    var s = "";
    for (var i = 1; i < newArray.length; i++) {
      for (var j = i; j > 0; j--) {
        if (newArray[j].num > newArray[j - 1].num) {
          s = newArray[j];
          newArray[j] = newArray[j - 1];
          newArray[j - 1] = s;
        }
      }
    }
    console.log(newArray)
    this.setData({
      list: newArray.reverse()
    })

 
  },
  /**
   * 降序
   */
  handleReduce() {
    // 数组排序，可以单独放在一个方法里面，再去调用
    var newArray = this.data.list;
    var s = "";
    for (var i = 1; i < newArray.length; i++) {
      for (var j = i; j > 0; j--) {
        if (newArray[j].num < newArray[j - 1].num) {
          s = newArray[j];
          newArray[j] = newArray[j - 1];
          newArray[j - 1] = s;
        }
      }
    }
    console.log(newArray)
    this.setData({
      list: newArray.reverse()
    })
  },
  /**
   * 显示某一测试类型下的用户信息
   */
  showUserInfoByDiscType:function(e){
   
    var discType = e.target.id
    console.log('显示某一测试类型下的用户信息：' + discType)
    wx.navigateTo({
      url: '/packageAdmin/pages/usersBydiscType/index?discType=' + discType,
    })
  }
});