/**
 * 显示收集回来的信息，并展示
 * 1、接收传递的关键参数userId
 * 2、调用后端接口，获得某个用户下的所有反馈信息
 *    https://www.dreamershaven.cn/disc/swagger-ui.html
 *    url:openMy/queryOpenMyInfo
 *    参数：userId
 *    
 * 3、对接收的反馈信息，进行组装，并在页面显示
 */
var util = require('../../../utils/util.js')
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [], //存储在服务器段获取的列表信息
    tags: [], //页面上显示的标签信息
    colors: ['default', 'red', 'blue', 'green'],
    feedbackNum: 0,
    answers: [{
      "questionsId": 2,
      "answers": []
    }, {
      "questionsId": 3,
      "answers": []
    }, {
      "questionsId": 4,
      "answers": []
    }] //页面上显示的问题与答案

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var me = this;
    var user = app.getGlobalUserInfo();
    var serverUrl = app.serverUrl;
    var userId = user.userId
    wx.showLoading({
      title: '结果加载中，请稍后...',
    });

    // 调用后端
    var data = {

    }
    var url = serverUrl + '/openMy/queryOpenMyInfo?userId=' + userId

    util.post(url, data).then((res) => {
      wx.hideLoading();
      var list = res.data.data
      this.data.list = list
      this.buildPageVO()

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
   * 组装页面上显示所需的数据
   * 1、收到的反馈数（list中groupId最大值）
   * 2、标签信息
   * 3、其余问题的反馈
   */
  buildPageVO: function(list) {
    //遍历从服务器获取的业务数据
    console.log("#################组装页面上显示所需的数据#############")
    var me = this;
    var list = this.data.list
    console.log(list)

    var feedbackNum = 0
    for (var i = 0, len = list.length; i < len; i++) {
      //获得收到的反馈数
      if (list[i].groupId > feedbackNum) {
        feedbackNum = list[i].groupId
      }
      //组装标签信息
      if (list[i].questionsId == 1) {
        var randomCol = Math.floor(Math.random() * 4 + 4) //随机获得一个标签的颜色
        //新建一个tag标签
        var tag = {
          name: '',
          color: ''
        }
        tag.name = list[i].answer
        tag.color = this.data.colors[randomCol]
        this.data.tags.push(tag)
      } else { //组装其他标签信息
        var answers = this.data.answers
        for (var j = 0, len1 = answers.length; j < len1; j++) {
          if (list[i].questionsId == answers[j].questionsId) {
            var answer = list[i].answer
            answers[j].answers.push(answer)
          }
        }
      }

    }

    console.log("#########组装后的反馈信息#############")
    console.log(this.data.answers)

    me.setData({
      feedbackNum: feedbackNum,
      tags: this.data.tags,
      answers: this.data.answers
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

  }
})