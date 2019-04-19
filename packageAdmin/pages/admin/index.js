const app = getApp()
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    usersNum: 0,
    testsNum: 0,
    userlist: [],

    searchKeyword: '', //需要搜索的字符
    searchSongList: [], //放置返回数据的数组
    isFromSearch: true, // 用于判断searchSongList数组是不是空数组，默认true，空的数组
    searchPageNum: 1, // 设置加载的第几次，默认是第一次
    callbackcount: 15, //返回数据的个数
    searchLoading: false, //"上拉加载"的变量，默认false，隐藏
    searchLoadingComplete: false, //“没有数据”的变量，默认false，隐藏
    //是否关注的提示

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var me = this

    me.setData({
      searchPageNum: 1, //第一次加载，设置1
      searchSongList: [], //放置返回数据的数组,设为空
      isFromSearch: true, //第一次加载，设置true
      searchLoading: true, //把"上拉加载"的变量设为true，显示
      searchLoadingComplete: false //把“没有数据”设为false，隐藏
    })
    me.fetchSearchList();

    var user = app.getGlobalUserInfo();
    var userId = user.userId;
    var serverUrl = app.serverUrl;
    wx.showLoading({
      title: '正在获取统计信息，请稍后...',
    });
    // 调用后端
    var data = {
      userId: userId
    }
    var url = serverUrl + '/statDisc'
    util.post(url, data).then((res) => {
      wx.hideLoading();
      console.info("管理员用户从服务器获取相关统计信息")
      me.setData({
        usersNum: res.data.data.usersNum,
        testsNum: res.data.data.testsNum
      })
    }).catch((errMsg) => {
      wx.showToast({
        title: errMsg,
        duration: 3000,
        icon: "none",
        success: function () {
          wx.redirectTo({
            url: '/pages/index/index',
          })
        }
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
   */
  onShareAppMessage: function () {

  },
  goBack: function () {
    wx.redirectTo({
      url: '/pages/mine/mine',
    })
  },


  /**
   * 依据查询条件显示用户信息
   */
  showUserList: function (e) {
    var me = this
    var serverUrl = app.serverUrl;
    var formObject = e.detail.value;
    var userId = formObject.username;

    wx.showLoading({
      title: '请等待...',
    });

    // 调用后端
    var data = {
      username: userId
    }
    var url = serverUrl + '/queryUsers'
    util.post(url, data).then((res) => {
      wx.hideLoading();
      //userlist
      if (res.data.data == null) {
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

    }).catch((errMsg) => {
      wx.showToast({
        title: errMsg,
        duration: 3000,
        icon: "none",
        success: function () {
          wx.redirectTo({
            url: '/pages/index/index',
          })
        }
      })
    })
  },
  /**
   * 显示测试结果的详细统计信息
   */
  showDetailedStatInfo:function(e){
    wx.navigateTo({
      url: '/packageAdmin/pages/statbydisctype/index',
    }) 
  },
  /**
   * 显示用户最新的DISC测评结果
   * 1、依据用户ID查询DISC测评结果
   * 2、跳转到DISC图形展示页面，显示该用户的DISC测评结果
   *
   */
  showDiscResult: function (e) {
    var fromurl ='/packageAdmin/pages/admin/index'
    util.showDiscResult(e, fromurl)
  },
  /**
   * 关注某用户
   * /disc/collectDiscReport
   */
  collect: function (e) {
    console.log("关注该用户")
    var user = app.getGlobalUserInfo();
    var userId = user.userId;
    var serverUrl = app.serverUrl;
    var collectuserIdAndName = e.target.id
    var infos = collectuserIdAndName.split("|")
    var url = serverUrl +"/disc/collectDiscReport"
    wx.showLoading({
      title: '操作中...',
    });
    // 调用后端
    var data = {
      userId: userId,
      collectuserId: infos[0],
      collectuserName: infos[1],
      reportType:'all'
    }
    
    util.post(url, data).then((res) => {
      wx.hideLoading();
     

    }).catch((errMsg) => {

      // 失败弹出框
      wx.showToast({
        title: errMsg,
        icon: 'none',
        duration: 3000
      })
    })
  
    
  },

  //输入框事件，每输入一个字符，就会触发一次
  bindKeywordInput: function (e) {
    console.log("输入框事件")
    this.setData({
      searchKeyword: e.detail.value
    })
  },
  //搜索，访问网络
  fetchSearchList: function () {
    let that = this;
    let searchKeyword = that.data.searchKeyword, //输入框字符串作为参数
      searchPageNum = that.data.searchPageNum, //把第几次加载次数作为参数
      callbackcount = that.data.callbackcount; //返回数据的个数
    var serverUrl = app.serverUrl;
    var url = serverUrl + '/user/queryAllUsers'
    //访问网络
    util.getSearchUser(url,searchKeyword, searchPageNum, callbackcount, function (data) {
      console.log("分页查询所用用户信息：")
      console.log(data)
      //判断是否有数据，有则取数据
      if (data.data.length != 0) {
        let searchList = [];
        //如果isFromSearch是true从data中取出数据，否则先从原来的数据继续添加
        that.data.isFromSearch ? searchList = data.data : searchList = that.data.searchSongList.concat(data.data)
        that.setData({
          searchSongList: searchList, //获取数据数组
          searchLoading: true //把"上拉加载"的变量设为false，显示
        });

      }


      //如果取出的数据长度小于设定的数据长度，把“没有数据”显示，把“上拉加载”隐藏
      //没有数据了，把“没有数据”显示，把“上拉加载”隐藏
      if (data.data.length < callbackcount) {
        that.setData({
          searchLoadingComplete: true, //把“没有数据”设为true，显示
          searchLoading: false //把"上拉加载"的变量设为false，隐藏
        });

      }

    })
  },
  //点击搜索按钮，触发事件
  keywordSearch: function (e) {
    this.setData({
      searchPageNum: 1, //第一次加载，设置1
      searchSongList: [], //放置返回数据的数组,设为空
      isFromSearch: true, //第一次加载，设置true
      searchLoading: true, //把"上拉加载"的变量设为true，显示
      searchLoadingComplete: false //把“没有数据”设为false，隐藏
    })
    this.fetchSearchList();
  },

  //滚动到底部触发事件
  searchScrollLower: function () {
    let that = this;
    if (that.data.searchLoading && !that.data.searchLoadingComplete) {
      that.setData({
        searchPageNum: that.data.searchPageNum + 1, //每次触发上拉事件，把searchPageNum+1
        isFromSearch: false //触发到上拉事件，把isFromSearch设为为false
      });
      that.fetchSearchList();
    }
  }
})