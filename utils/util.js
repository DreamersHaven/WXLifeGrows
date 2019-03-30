const app = getApp();

/**
 * 获取后台数据
 */
function getSearchUser(keyword, pageindex, callbackcount, callback) {
  var serverUrl = app.serverUrl;

  console.log('分页查询用户信息，当前页码：' + pageindex)

  wx.request({
    url: serverUrl + '/user/queryAllUsers?currentPage=' + pageindex + '&pageSize=' + callbackcount + '&username=' + keyword,
    method: 'POST',
    header: {
      'content-Type': 'application/json'
    },
    success: function(res) {
      if (res.statusCode == 200) {
        callback(res.data);
      }
    }
  })
}
/**
 * 显示用户最新的DISC测评结果
 * 1、依据用户ID查询DISC测评结果
 * 2、跳转到DISC图形展示页面，显示该用户的DISC测评结果
 *
 */
function showDiscResult(e) {
  var serverUrl = app.serverUrl;
  var userId = e.target.id;
  wx.showLoading({
    title: '请等待...',
  });
  // 调用后端
  

  wx.request({
    url: serverUrl + '/queryDiscResult?userId=' + userId,
    method: "POST",
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function(res) {
      console.log(res.data);
      wx.hideLoading();
      if (res.data.status == 200) {
        goDiscResultPage(res.data.data)
      }
    }
  })
}


/**
 * 依据用户的最新DISC测试结果，跳转到查看DISC测试结果的详细页面
 */
function goDiscResultPage(info) {
  var mresult = ''
  var aresult = ''
  var lresult = ''
  var antherUserId = ""

  if (info != undefined) {
    mresult = info.mresult
    lresult = info.lresult
    aresult = info.aresult
    antherUserId = info.userId

    // 页面跳转
    wx.redirectTo({
      url: '/packageDISC/pages/amlGraph/index?M=' + mresult + '&L=' + lresult + '&A=' + aresult + '&fromPage=mine&antherUserId=' + antherUserId,

    })
  } else { //如果用户还没有进行DISC测试，提示还未进行DISC测试，是否进行测试
    wx.showModal({
      title: '提示',
      content: '没有查询到该用户的DISC测评结果，是否重新输入？',
      success: function(res) {
        console.log(res)
        if (res.confirm) {
          console.log('用户点击了确定')

        } else {

          console.log('用户点击了取消')
        }
      }
    })

  }

}

//添加finally：因为还有一个参数里面还有一个complete方法。
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

//封装异步api
const wxPromisify = fn => {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        resolve(res)
      }
      obj.fail = function (res) {
        reject(res)
      }
      fn(obj)
    })
  }
}
const getLocationPromisified = wxPromisify(wx.getLocation);//获取经纬度
const showModalPromisified = wxPromisify(wx.showModal);//弹窗
// 封装post请求
const post = (url, data) => {
  var promise = new Promise((resolve, reject) => {
    //网络请求
    wx.request({
      url: url,
      method: 'POST',
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {//服务器返回数据
        if (res.statusCode == 200) {
          resolve(res);
        } else {//返回错误提示信息
          reject(res.data);
        }
      },
      error: function (e) {
        reject('网络出错');
      }
    })
  });
  return promise;
}// 封装get请求
const get = (url, data) => {
  var promise = new Promise((resolve, reject) => {
    //网络请求
    wx.request({
      url: url,
      data: data,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success: function (res) {//服务器返回数据
        if (res.statusCode == 200) {
          resolve(res);
        } else {//返回错误提示信息
          reject(res.data);
        }
      },
      error: function (e) {
        reject('网络出错');
      }
    })
  });
  return promise;
}
 

module.exports = {
  getSearchUser: getSearchUser,
  showDiscResult: showDiscResult,
  post,
  get,
  getLocationPromisified,
  showModalPromisified
}