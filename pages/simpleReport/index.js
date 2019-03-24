import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height,d,i,s,c) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#f8f8f9",
    color: ["#19be6b", "#ed3f14", "#2d8cf0", "#ff9900"],
    series: [{
      label: {
        normal: {
          fontSize: 14,
          formatter: '{d}% \n {b}'

        }
      },
    
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: [{
        value: d,
        name: 'D支配性'
      }, {
        value: i,
        name: 'I影响性'
      }, {
        value: s,
        name: 'S稳定性'
      }, {
        value: c,
        name: 'C服从性'
      }, 
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: '刚测出我是天生的领袖、活泼的团队活动组织者，你也测测吧',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    dvalue:0,
    ivalue: 0,
    svalue: 0,
    cvalue: 0,
    discType:"",
    discText:'',
    discText: [
      {
        key: 'C',
        text: '追求完美的专业型人才'
      },
      {
        key: 'S',
        text: '温和主义者'
      },
      {
        key: 'D',
        text: '天生的领袖'
      },
      {
        key: 'I',
        text: '活泼的团队活动组织者'
      }
    ],
    ec: {
    }
    
  },

  onReady() {
  },

  goBack: function () {
    wx.redirectTo({
      url: '/pages/mine/mine',
    })
  },

  echartInit(e) {

    initChart(e.detail.canvas, e.detail.width, e.detail.height, this.data.dvalue, this.data.ivalue, this.data.svalue, this.data.cvalue);
  },
  /**页面加载，为饼状图的DISC数据赋值 */
  onLoad: function (params) {
    var me = this;
    var mvalue = params.M
    var disc = mvalue.split(",")
    me.data.dvalue = disc[0]
    me.data.ivalue = disc[1]
    me.data.svalue = disc[2]
    me.data.cvalue = disc[3]
    //将用户主导类型转换成描述
    var discTypes = params.discType.split("")
    var discTexts=me.data.discText
    var discText = '你是' + params.discType+'主导的'
    for (var i = 0, len = discTypes.length; i < len; i++) {
      var type = discTypes[i]
      for (var j = 0, len = discTexts.length; j < len; j++) {
        if (type == discTexts[j].key){
          discText = discText + discTexts[j].text+";"
          break
        }
      }
    }
    
    console.log("用户主导类型描述：" + discText)

    me.setData({
      discText: discText
    });

  }
});
