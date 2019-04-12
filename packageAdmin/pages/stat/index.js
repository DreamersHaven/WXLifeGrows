import * as echarts from '../../../ec-canvas/echarts';
var util = require('../../../utils/util.js')
const app = getApp();
let chart = null;

function initChart(canvas, width, height, yAxisdata, seriesdata) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    color: ['#37a2da', '#32c5e9', '#67e0e3'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true
    },
    legend: {
      data: ['数量']
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: yAxisdata,
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    series: [
      {
        name: '数量',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: seriesdata,
        itemStyle: {
          // emphasis: {
          //   color: '#37a2da'
          // }
        }
      } 
    ]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    
  },
  data: {
    yAxisdata:null,
    seriesdata:null,

    ec: {
      
    }
  },
  echartInit(e) {

    initChart(e.detail.canvas, e.detail.width, e.detail.height,this.data.yAxisdata,this.data.seriesdata);
  },
  /**页面加载，为柱状图的DISC统计数据赋值 */
  onLoad: function (params) {
    var me=this
    var yAxisdata=[]
    var seriesdata=[]
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
      for (var i = 0, len = discTypes.length; i < len; i++) {
        yAxisdata.push(discTypes[i].discType)
        seriesdata.push(discTypes[i].num)
      }

      me.setData({
        yAxisdata: yAxisdata,
        seriesdata: seriesdata
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

  onReady() {
    // setTimeout(function () {
    //   // 获取 chart 实例的方式
    //   console.log(chart)
    // }, 500);
  }
});
