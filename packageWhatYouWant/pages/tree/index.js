import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, wants) {
  console.log('############## initChart ###################')
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var data1 = {
    "name": "你的需求",
    "children": [{
        "name": "生存",
        "children": []
      }, {
        "name": "爱与归属",
        "children": []
      }, {
        "name": "权利",
        "children": []
      }, {
        "name": "自由",
        "children": []
      }, {
        "name": "乐趣",
        "children": []
      }

    ]
  };
  //业务代码：构建对象数组信息 
  for (var i = 0, len = wants.length; i < len; i++) {
    //如果需求为用户选择的12项
    if (wants[i].isChoose) {

      var wantsType = wants[i].key.substring(0, 3)
       
      var child={"name":""}
      child.name = wants[i].value
      if (wantsType == 'ali') {
        data1.children[0].children.push(child)
      } else if (wantsType == 'lov') {
        data1.children[1].children.push(child)
      } else if (wantsType == 'pow') {
        data1.children[2].children.push(child)
      } else if (wantsType == 'fre') {
        data1.children[3].children.push(child)
      } else {
        data1.children[4].children.push(child)
      }
    }

  }
  
  

  var option = {
    series: [{
      type: 'tree',

      initialTreeDepth: -1,

      name: 'tree1',

      data: [data1],

      top: '5%',
      left: '20%',
      bottom: '2%',
      right: '15%',

      symbolSize: 10,
      symbol: 'circle',

      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          color: 'black'
        }
      }

    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function(res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function() {},
      fail: function() {}
    }
  },
  data: {

    wants: [], //未加工的用户需求数组对象
    ec: {
      // onInit: initChart
    }
  },

  onReady() {
    console.log('############## onReady ###################')

  },

  onLoad: function(options) {
    console.log('############## onLoad ###################')
    var list = JSON.parse(options.wants)
    this.data.wants = list
  },

  echartInit(e) {
    initChart(e.detail.canvas, e.detail.width, e.detail.height, this.data.wants)
  }



});