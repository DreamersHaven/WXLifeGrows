const app = getApp();

Page({

  

  onLoad: function () {
    app.editTabBar();//添加tabBar数据  

  },
  onShareAppMessage: function (res) {
    return {
      title: '欢迎加入成长计划！',
      path: '/pages/index/index',
      success: function () {},
      fail: function () {}
    }
  },
  data: {
    
    charts: [
      {
        id: 'parallel',
        name: 'DISC测评'
      }, {
        id: 'gauge',
        name: '完成率'
      },
      {
        id: 'graph',
        name: '成长教练'
      },
      {
        id: 'map',
        name: '成长空间'
      },
      {
        id: 'radar',
        name: '优势识别'
      },
      {
        id: 'tree',
        name: '成长树'
      }],
    chartsWithoutImg: [{
      id: 'lazyLoad',
      name: '延迟加载图表'
    }, {
      id: 'multiCharts',
      name: '一个页面中多个图表'
    }, {
      id: 'move',
      name: '页面不阻塞滚动'
    }, {
      id: 'saveCanvas',
      name: '保存 Canvas 到本地文件'
    }]
  },

  onReady() {
  },

  open: function (e) {
    wx.navigateTo({
      url: '../' + e.target.dataset.chart.id + '/index'
    });
  }
});
