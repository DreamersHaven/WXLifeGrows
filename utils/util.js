const app = getApp();

/**
 * 获取后台数据
 */
function getSearchUser(url,keyword, pageindex, callbackcount, callback) {
   
  console.log('分页查询用户信息，当前页码：' + pageindex)
  var data = {
    
  }
  url = url + '?currentPage=' + pageindex + '&pageSize=' + callbackcount + '&username=' + keyword
  this.post(url, data).then((res) => {
    callback(res.data);
  }).catch((errMsg) => {
    console.log(errMsg)
  }) 
}
/**
 * 重新加载关注列表信息
 */
function reloadGlobalCollectionInfo() {
  wx.removeStorageSync("collectionInfo")
  return this.getGlobalCollectionInfo()
}
/**
* 获得用户的关注列表信息，并加载到缓存当中
* 1、判断本地缓存中是否已经缓存了关注列表信息
* 2、如果已经缓存直接返回结果
* 3、如果没有查找到本地缓存
*/

function getGlobalCollectionInfo() {
  var collectioninfos = wx.getStorageSync("collectionInfo")
  if (collectioninfos) {
    return collectioninfos;
  } else {
    //调用后台获取用户的关注列表信息
    var serverUrl = app.serverUrl;
    var user = app.getGlobalUserInfo();
    var userId = user.userId;
    var data = {
    }
    var url = serverUrl + '/disc/querycollectDiscReport?userId=' + userId
    this.post(url, data).then((res) => {
      console.log(res.data);
      console.info("该用户[" + userId + "]的关注列表信息已经从数据库加载到本地缓存")
      wx.setStorageSync("collectionInfo", res.data.data)
    }).catch((errMsg) => {
      // 失败弹出框
      wx.showToast({
        title: errMsg,
        icon: 'none',
        duration: 3000
      })
    })
  }
}


/**
 * 显示用户最新的DISC测评结果
 * 1、依据用户ID查询DISC测评结果
 * 2、跳转到DISC图形展示页面，显示该用户的DISC测评结果
 * 3、参数fromUrl用于判断请求来自哪个页面，传递个目标页面作为返回的链接
 *
 */
function showDiscResult(e, fromUrl) {
  var serverUrl = app.serverUrl;
  var userId = e.target.id;
  console.log('正在获取用户:' + userId+'的最新DISC测评结果')
  wx.showLoading({
    title: '请等待...',
  });
  // 调用后端
  var data = {
    
  }
  var url = serverUrl + '/queryDiscResult?userId=' + userId
  this.post(url, data).then((res) => {
    console.log(res.data);
    wx.hideLoading();
    goDiscResultPage(res.data.data,fromUrl)
  }).catch((errMsg) => {
    console.log(errMsg)
  }) 
}


/**
 * 依据用户的最新DISC测试结果，跳转到查看DISC测试结果的详细页面
 */
function goDiscResultPage(info,fromUrl) {
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
      url: '/packageDISC/pages/amlGraph/index?M=' + mresult + '&L=' + lresult + '&A=' + aresult + '&fromPage=mine&antherUserId=' + antherUserId + '&fromUrl=' + fromUrl,

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
        console.log(res)
        if (res.data.status == 200) {
          resolve(res);
        } else {//返回错误提示信息
          reject(res.data.msg);
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
  showModalPromisified,
  getGlobalCollectionInfo: getGlobalCollectionInfo
}