// packageDISC/pages/discReport/index.js
var util = require('../../utils/util.js')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isQuerySuss: true,
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
    pageStyle: 'picAndReport',
    //是否通过他人分享，进入的小程序页面
    isShareOthers: false,

  },




  /**
   * 设置页面值
   */
  setreportInfo: function (options, reportInfo) {
    var me = this
    var yvalue = options.yvalue
    var mresult = options.mresult
    var lresult = options.lresult
    var aresult = options.aresult
    //判断测试报告的显示类型，默认为测试报告和结果图都显示
    var pageStyle = 'picAndReport'
    if (options.pageStyle != undefined) {
      pageStyle = options.pageStyle
    }
    //判断是否通过他人分享，进入的小程序页面
    var isShareOthers = false
    if (options.isShareOthers != undefined) {
      isShareOthers = options.isShareOthers
    }

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
        pageStyle: pageStyle,
        isShareOthers: isShareOthers

      });
    } else {
      me.setData({

        discType: '未找到符合的测评报告',
        yvalue: yvalue,
        mresult: mresult,
        lresult: lresult,
        aresult: aresult,
        isQuerySuss: false,
        pageStyle: pageStyle,
        isShareOthers: isShareOthers
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    var me = this;

    //接收页面传递的测试结果
    var yvalue = options.yvalue
    var mresult = options.mresult
    console.log("依据用户测评结果查询详细测评报告,坐标值为：" + yvalue + "DISC值为：" + mresult); //正确返回结果

    //依据坐标值和DISC结果进行缓存，如果存在缓存就在客户端直接获取数据
    var key = "report_" + yvalue + mresult
    var info = wx.getStorageSync(key)
    if (info) {
      console.log("该数据已经缓存，直接在本地缓存中获取数据")
      me.setreportInfo(options, info)
      return
    }

    wx.showLoading({
      title: '报告生成中，请稍后...',
    });
    var serverUrl = app.serverUrl;
    // 调用后端
    var data = {
      yvalue: yvalue,
      mresult: mresult
    }
    var url = serverUrl + '/disc/querydisctype'

    util.post(url, data).then((res) => {
      console.log(res.data);
      wx.hideLoading();

      var reportInfo = res.data.data;
      //将从数据库获取的内容信息，设置到本地缓存中
      console.log("从数据中获取数据，并缓存到本地")
      me.setreportInfo(options, reportInfo)

      wx.setStorageSync(key, reportInfo)
    }).catch((errMsg) => {
      console.log("获取测试报告信息出错")
      console.log(errMsg)
      // 失败弹出框
      wx.showToast({
        title: errMsg,
        icon: 'none',
        duration: 3000
      })
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
   * 
   */
  onShareAppMessage: function () {

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
      wx.redirectTo({
        url: '/packageDISC/pages/amlGraph/index?pageStyle=shareMeReport&M=' + this.data.mresult + '&L=' + this.data.lresult + '&A=' + this.data.aresult + '&isShareOthers=' + this.data.isShareOthers,
      })
    }

  },
  /**
   * 通过朋友分享进入小程序页面
   */
  tabbarHandleChange({
    detail
  }) {

    if (detail.key == "homepage") {
      this.goHomePage()
    } else if (detail.key == "scan") {
      this.goDiscPage()
    }

  },
  goHomePage: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  /**
   * 我要测试,调用公共函数
   */
  goDiscPage: function () {
    var common = require('../../utils/common.js')
    common.goDiscPage()

  }

})