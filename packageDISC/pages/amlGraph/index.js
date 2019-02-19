const app = getApp()
Page({
  data: {
    currentTab: 'isAGraph',
    isSave:true,
    discA: '',
    discM: '',
    discL: '',
    discType:'',
    x: 0,
    y: 0,
    hidden: true,
    windowWidth: 0,
    windowHeight: 0,
    pixelRatio: 0,
    bgWIDTH: 311,
    bgHEIGHT: 483,
    D: {
      x: 0,
      y: 0
    },
    I: {
      x: 0,
      y: 0
    },
    S: {
      x: 0,
      y: 0
    },
    C: {
      x: 0,
      y: 0
    },
    COORDS: {
      'D28': {
        x: 100,
        y: 115
      },
      'D27': {
        x: 100,
        y: 144
      },
      'D26': {
        x: 100,
        y: 173
      },
      'D25': {
        x: 100,
        y: 202
      },
      'D24': {
        x: 100,
        y: 231
      },
      'D23': {
        x: 100,
        y: 260
      },
      'D22': {
        x: 100,
        y: 289
      },
      'D21': {
        x: 100,
        y: 318
      },
      'D20': {
        x: 100,
        y: 347
      },
      'D19': {
        x: 100,
        y: 376
      },
      'D18': {
        x: 100,
        y: 405
      },
      'D17': {
        x: 100,
        y: 434
      },
      'D16': {
        x: 100,
        y: 463
      },
      'D15': {
        x: 100,
        y: 492
      },
      'D14': {
        x: 100,
        y: 521
      },
      'D13': {
        x: 100,
        y: 550
      },
      'D12': {
        x: 100,
        y: 579
      },
      'D11': {
        x: 100,
        y: 608
      },
      'D10': {
        x: 100,
        y: 637
      },
      'D9': {
        x: 100,
        y: 666
      },
      'D8': {
        x: 100,
        y: 695
      },
      'D7': {
        x: 100,
        y: 724
      },
      'D6': {
        x: 100,
        y: 753
      },
      'D5': {
        x: 100,
        y: 782
      },
      'D4': {
        x: 100,
        y: 811
      },
      'D3': {
        x: 100,
        y: 840
      },
      'D2': {
        x: 100,
        y: 869
      },
      'D1': {
        x: 100,
        y: 898
      },
      'I28': {
        x: 225,
        y: 115
      },
      'I27': {
        x: 225,
        y: 144
      },
      'I26': {
        x: 225,
        y: 173
      },
      'I25': {
        x: 225,
        y: 202
      },
      'I24': {
        x: 225,
        y: 231
      },
      'I23': {
        x: 225,
        y: 260
      },
      'I22': {
        x: 225,
        y: 289
      },
      'I21': {
        x: 225,
        y: 318
      },
      'I20': {
        x: 225,
        y: 347
      },
      'I19': {
        x: 225,
        y: 376
      },
      'I18': {
        x: 225,
        y: 405
      },
      'I17': {
        x: 225,
        y: 434
      },
      'I16': {
        x: 225,
        y: 463
      },
      'I15': {
        x: 225,
        y: 492
      },
      'I14': {
        x: 225,
        y: 521
      },
      'I13': {
        x: 225,
        y: 550
      },
      'I12': {
        x: 225,
        y: 579
      },
      'I11': {
        x: 225,
        y: 608
      },
      'I10': {
        x: 225,
        y: 637
      },
      'I9': {
        x: 225,
        y: 666
      },
      'I8': {
        x: 225,
        y: 695
      },
      'I7': {
        x: 225,
        y: 724
      },
      'I6': {
        x: 225,
        y: 753
      },
      'I5': {
        x: 225,
        y: 782
      },
      'I4': {
        x: 225,
        y: 811
      },
      'I3': {
        x: 225,
        y: 840
      },
      'I2': {
        x: 225,
        y: 869
      },
      'I1': {
        x: 225,
        y: 898
      },
      'S28': {
        x: 365,
        y: 115
      },
      'S27': {
        x: 365,
        y: 144
      },
      'S26': {
        x: 365,
        y: 173
      },
      'S25': {
        x: 365,
        y: 202
      },
      'S24': {
        x: 365,
        y: 231
      },
      'S23': {
        x: 365,
        y: 260
      },
      'S22': {
        x: 365,
        y: 289
      },
      'S21': {
        x: 365,
        y: 318
      },
      'S20': {
        x: 365,
        y: 347
      },
      'S19': {
        x: 365,
        y: 376
      },
      'S18': {
        x: 365,
        y: 405
      },
      'S17': {
        x: 365,
        y: 434
      },
      'S16': {
        x: 365,
        y: 463
      },
      'S15': {
        x: 365,
        y: 492
      },
      'S14': {
        x: 365,
        y: 521
      },
      'S13': {
        x: 365,
        y: 550
      },
      'S12': {
        x: 365,
        y: 579
      },
      'S11': {
        x: 365,
        y: 608
      },
      'S10': {
        x: 365,
        y: 637
      },
      'S9': {
        x: 365,
        y: 666
      },
      'S8': {
        x: 365,
        y: 695
      },
      'S7': {
        x: 365,
        y: 724
      },
      'S6': {
        x: 365,
        y: 753
      },
      'S5': {
        x: 365,
        y: 782
      },
      'S4': {
        x: 365,
        y: 811
      },
      'S3': {
        x: 365,
        y: 840
      },
      'S2': {
        x: 365,
        y: 869
      },
      'S1': {
        x: 365,
        y: 898
      },
      'C28': {
        x: 490,
        y: 115
      },
      'C27': {
        x: 490,
        y: 144
      },
      'C26': {
        x: 490,
        y: 173
      },
      'C25': {
        x: 490,
        y: 202
      },
      'C24': {
        x: 490,
        y: 231
      },
      'C23': {
        x: 490,
        y: 260
      },
      'C22': {
        x: 490,
        y: 289
      },
      'C21': {
        x: 490,
        y: 318
      },
      'C20': {
        x: 490,
        y: 347
      },
      'C19': {
        x: 490,
        y: 376
      },
      'C18': {
        x: 490,
        y: 405
      },
      'C17': {
        x: 490,
        y: 434
      },
      'C16': {
        x: 490,
        y: 463
      },
      'C15': {
        x: 490,
        y: 492
      },
      'C14': {
        x: 490,
        y: 521
      },
      'C13': {
        x: 490,
        y: 550
      },
      'C12': {
        x: 490,
        y: 579
      },
      'C11': {
        x: 490,
        y: 608
      },
      'C10': {
        x: 490,
        y: 637
      },
      'C9': {
        x: 490,
        y: 666
      },
      'C8': {
        x: 490,
        y: 695
      },
      'C7': {
        x: 490,
        y: 724
      },
      'C6': {
        x: 490,
        y: 753
      },
      'C5': {
        x: 490,
        y: 782
      },
      'C4': {
        x: 490,
        y: 811
      },
      'C3': {
        x: 490,
        y: 840
      },
      'C2': {
        x: 490,
        y: 869
      },
      'C1': {
        x: 490,
        y: 898
      },
    },

    COORDS_M: {
      'D28': {
        x: 100,
        y: 115
      },
      'D27': {
        x: 100,
        y: 144
      },
      'D26': {
        x: 100,
        y: 173
      },
      'D25': {
        x: 100,
        y: 202
      },
      'D24': {
        x: 100,
        y: 231
      },
      'D23': {
        x: 100,
        y: 260
      },
      'D22': {
        x: 100,
        y: 289
      },
      'D21': {
        x: 100,
        y: 318
      },
      'D20': {
        x: 100,
        y: 347
      },
      'D19': {
        x: 100,
        y: 376
      },
      'D18': {
        x: 100,
        y: 405
      },
      'D17': {
        x: 100,
        y: 434
      },
      'D16': {
        x: 100,
        y: 463
      },
      'D15': {
        x: 100,
        y: 492
      },
      'D14': {
        x: 100,
        y: 521
      },
      'D13': {
        x: 100,
        y: 550
      },
      'D12': {
        x: 100,
        y: 579
      },
      'D11': {
        x: 100,
        y: 608
      },
      'D10': {
        x: 100,
        y: 637
      },
      'D9': {
        x: 100,
        y: 666
      },
      'D8': {
        x: 100,
        y: 695
      },
      'D7': {
        x: 100,
        y: 724
      },
      'D6': {
        x: 100,
        y: 753
      },
      'D5': {
        x: 100,
        y: 782
      },
      'D4': {
        x: 100,
        y: 811
      },
      'D3': {
        x: 100,
        y: 840
      },
      'D2': {
        x: 100,
        y: 869
      },
      'D1': {
        x: 100,
        y: 898
      },
      'I28': {
        x: 225,
        y: 115
      },
      'I27': {
        x: 225,
        y: 144
      },
      'I26': {
        x: 225,
        y: 173
      },
      'I25': {
        x: 225,
        y: 202
      },
      'I24': {
        x: 225,
        y: 231
      },
      'I23': {
        x: 225,
        y: 260
      },
      'I22': {
        x: 225,
        y: 289
      },
      'I21': {
        x: 225,
        y: 318
      },
      'I20': {
        x: 225,
        y: 347
      },
      'I19': {
        x: 225,
        y: 376
      },
      'I18': {
        x: 225,
        y: 405
      },
      'I17': {
        x: 225,
        y: 434
      },
      'I16': {
        x: 225,
        y: 463
      },
      'I15': {
        x: 225,
        y: 492
      },
      'I14': {
        x: 225,
        y: 521
      },
      'I13': {
        x: 225,
        y: 550
      },
      'I12': {
        x: 225,
        y: 579
      },
      'I11': {
        x: 225,
        y: 608
      },
      'I10': {
        x: 225,
        y: 637
      },
      'I9': {
        x: 225,
        y: 666
      },
      'I8': {
        x: 225,
        y: 695
      },
      'I7': {
        x: 225,
        y: 724
      },
      'I6': {
        x: 225,
        y: 753
      },
      'I5': {
        x: 225,
        y: 782
      },
      'I4': {
        x: 225,
        y: 811
      },
      'I3': {
        x: 225,
        y: 840
      },
      'I2': {
        x: 225,
        y: 869
      },
      'I1': {
        x: 225,
        y: 898
      },
      'S28': {
        x: 365,
        y: 115
      },
      'S27': {
        x: 365,
        y: 144
      },
      'S26': {
        x: 365,
        y: 173
      },
      'S25': {
        x: 365,
        y: 202
      },
      'S24': {
        x: 365,
        y: 231
      },
      'S23': {
        x: 365,
        y: 260
      },
      'S22': {
        x: 365,
        y: 289
      },
      'S21': {
        x: 365,
        y: 318
      },
      'S20': {
        x: 365,
        y: 347
      },
      'S19': {
        x: 365,
        y: 376
      },
      'S18': {
        x: 365,
        y: 405
      },
      'S17': {
        x: 365,
        y: 434
      },
      'S16': {
        x: 365,
        y: 463
      },
      'S15': {
        x: 365,
        y: 492
      },
      'S14': {
        x: 365,
        y: 521
      },
      'S13': {
        x: 365,
        y: 550
      },
      'S12': {
        x: 365,
        y: 579
      },
      'S11': {
        x: 365,
        y: 608
      },
      'S10': {
        x: 365,
        y: 637
      },
      'S9': {
        x: 365,
        y: 666
      },
      'S8': {
        x: 365,
        y: 695
      },
      'S7': {
        x: 365,
        y: 724
      },
      'S6': {
        x: 365,
        y: 753
      },
      'S5': {
        x: 365,
        y: 782
      },
      'S4': {
        x: 365,
        y: 811
      },
      'S3': {
        x: 365,
        y: 840
      },
      'S2': {
        x: 365,
        y: 869
      },
      'S1': {
        x: 365,
        y: 898
      },
      'C28': {
        x: 490,
        y: 115
      },
      'C27': {
        x: 490,
        y: 144
      },
      'C26': {
        x: 490,
        y: 173
      },
      'C25': {
        x: 490,
        y: 202
      },
      'C24': {
        x: 490,
        y: 231
      },
      'C23': {
        x: 490,
        y: 260
      },
      'C22': {
        x: 490,
        y: 289
      },
      'C21': {
        x: 490,
        y: 318
      },
      'C20': {
        x: 490,
        y: 347
      },
      'C19': {
        x: 490,
        y: 376
      },
      'C18': {
        x: 490,
        y: 405
      },
      'C17': {
        x: 490,
        y: 434
      },
      'C16': {
        x: 490,
        y: 463
      },
      'C15': {
        x: 490,
        y: 492
      },
      'C14': {
        x: 490,
        y: 521
      },
      'C13': {
        x: 490,
        y: 550
      },
      'C12': {
        x: 490,
        y: 579
      },
      'C11': {
        x: 490,
        y: 608
      },
      'C10': {
        x: 490,
        y: 637
      },
      'C9': {
        x: 490,
        y: 666
      },
      'C8': {
        x: 490,
        y: 695
      },
      'C7': {
        x: 490,
        y: 724
      },
      'C6': {
        x: 490,
        y: 753
      },
      'C5': {
        x: 490,
        y: 782
      },
      'C4': {
        x: 490,
        y: 811
      },
      'C3': {
        x: 490,
        y: 840
      },
      'C2': {
        x: 490,
        y: 869
      },
      'C1': {
        x: 490,
        y: 898
      },
    },
    COORDS_L: {
      'D28': {
        x: 100,
        y: 115
      },
      'D27': {
        x: 100,
        y: 144
      },
      'D26': {
        x: 100,
        y: 173
      },
      'D25': {
        x: 100,
        y: 202
      },
      'D24': {
        x: 100,
        y: 231
      },
      'D23': {
        x: 100,
        y: 260
      },
      'D22': {
        x: 100,
        y: 289
      },
      'D21': {
        x: 100,
        y: 318
      },
      'D20': {
        x: 100,
        y: 347
      },
      'D19': {
        x: 100,
        y: 376
      },
      'D18': {
        x: 100,
        y: 405
      },
      'D17': {
        x: 100,
        y: 434
      },
      'D16': {
        x: 100,
        y: 463
      },
      'D15': {
        x: 100,
        y: 492
      },
      'D14': {
        x: 100,
        y: 521
      },
      'D13': {
        x: 100,
        y: 550
      },
      'D12': {
        x: 100,
        y: 579
      },
      'D11': {
        x: 100,
        y: 608
      },
      'D10': {
        x: 100,
        y: 637
      },
      'D9': {
        x: 100,
        y: 666
      },
      'D8': {
        x: 100,
        y: 695
      },
      'D7': {
        x: 100,
        y: 724
      },
      'D6': {
        x: 100,
        y: 753
      },
      'D5': {
        x: 100,
        y: 782
      },
      'D4': {
        x: 100,
        y: 811
      },
      'D3': {
        x: 100,
        y: 840
      },
      'D2': {
        x: 100,
        y: 869
      },
      'D1': {
        x: 100,
        y: 898
      },
      'I28': {
        x: 225,
        y: 115
      },
      'I27': {
        x: 225,
        y: 144
      },
      'I26': {
        x: 225,
        y: 173
      },
      'I25': {
        x: 225,
        y: 202
      },
      'I24': {
        x: 225,
        y: 231
      },
      'I23': {
        x: 225,
        y: 260
      },
      'I22': {
        x: 225,
        y: 289
      },
      'I21': {
        x: 225,
        y: 318
      },
      'I20': {
        x: 225,
        y: 347
      },
      'I19': {
        x: 225,
        y: 376
      },
      'I18': {
        x: 225,
        y: 405
      },
      'I17': {
        x: 225,
        y: 434
      },
      'I16': {
        x: 225,
        y: 463
      },
      'I15': {
        x: 225,
        y: 492
      },
      'I14': {
        x: 225,
        y: 521
      },
      'I13': {
        x: 225,
        y: 550
      },
      'I12': {
        x: 225,
        y: 579
      },
      'I11': {
        x: 225,
        y: 608
      },
      'I10': {
        x: 225,
        y: 637
      },
      'I9': {
        x: 225,
        y: 666
      },
      'I8': {
        x: 225,
        y: 695
      },
      'I7': {
        x: 225,
        y: 724
      },
      'I6': {
        x: 225,
        y: 753
      },
      'I5': {
        x: 225,
        y: 782
      },
      'I4': {
        x: 225,
        y: 811
      },
      'I3': {
        x: 225,
        y: 840
      },
      'I2': {
        x: 225,
        y: 869
      },
      'I1': {
        x: 225,
        y: 898
      },
      'S28': {
        x: 365,
        y: 115
      },
      'S27': {
        x: 365,
        y: 144
      },
      'S26': {
        x: 365,
        y: 173
      },
      'S25': {
        x: 365,
        y: 202
      },
      'S24': {
        x: 365,
        y: 231
      },
      'S23': {
        x: 365,
        y: 260
      },
      'S22': {
        x: 365,
        y: 289
      },
      'S21': {
        x: 365,
        y: 318
      },
      'S20': {
        x: 365,
        y: 347
      },
      'S19': {
        x: 365,
        y: 376
      },
      'S18': {
        x: 365,
        y: 405
      },
      'S17': {
        x: 365,
        y: 434
      },
      'S16': {
        x: 365,
        y: 463
      },
      'S15': {
        x: 365,
        y: 492
      },
      'S14': {
        x: 365,
        y: 521
      },
      'S13': {
        x: 365,
        y: 550
      },
      'S12': {
        x: 365,
        y: 579
      },
      'S11': {
        x: 365,
        y: 608
      },
      'S10': {
        x: 365,
        y: 637
      },
      'S9': {
        x: 365,
        y: 666
      },
      'S8': {
        x: 365,
        y: 695
      },
      'S7': {
        x: 365,
        y: 724
      },
      'S6': {
        x: 365,
        y: 753
      },
      'S5': {
        x: 365,
        y: 782
      },
      'S4': {
        x: 365,
        y: 811
      },
      'S3': {
        x: 365,
        y: 840
      },
      'S2': {
        x: 365,
        y: 869
      },
      'S1': {
        x: 365,
        y: 898
      },
      'C28': {
        x: 490,
        y: 115
      },
      'C27': {
        x: 490,
        y: 144
      },
      'C26': {
        x: 490,
        y: 173
      },
      'C25': {
        x: 490,
        y: 202
      },
      'C24': {
        x: 490,
        y: 231
      },
      'C23': {
        x: 490,
        y: 260
      },
      'C22': {
        x: 490,
        y: 289
      },
      'C21': {
        x: 490,
        y: 318
      },
      'C20': {
        x: 490,
        y: 347
      },
      'C19': {
        x: 490,
        y: 376
      },
      'C18': {
        x: 490,
        y: 405
      },
      'C17': {
        x: 490,
        y: 434
      },
      'C16': {
        x: 490,
        y: 463
      },
      'C15': {
        x: 490,
        y: 492
      },
      'C14': {
        x: 490,
        y: 521
      },
      'C13': {
        x: 490,
        y: 550
      },
      'C12': {
        x: 490,
        y: 579
      },
      'C11': {
        x: 490,
        y: 608
      },
      'C10': {
        x: 490,
        y: 637
      },
      'C9': {
        x: 490,
        y: 666
      },
      'C8': {
        x: 490,
        y: 695
      },
      'C7': {
        x: 490,
        y: 724
      },
      'C6': {
        x: 490,
        y: 753
      },
      'C5': {
        x: 490,
        y: 782
      },
      'C4': {
        x: 490,
        y: 811
      },
      'C3': {
        x: 490,
        y: 840
      },
      'C2': {
        x: 490,
        y: 869
      },
      'C1': {
        x: 490,
        y: 898
      },
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
         // windowWidth: res.windowWidth,
          windowWidth: that.data.bgWIDTH,
          //windowHeight: res.windowHeight,
          windowHeight: that.data.bgHEIGHT,
          pixelRatio: res.pixelRatio
        })

      },
    })

    console.log("开始绘制DISC测试结果图，用户的DISC数据为：" + options.A)

    //判断页面请求来源
    var isQueryResults = options.fromPage
    var isSave=true
    if (isQueryResults != null && isQueryResults != '' && isQueryResults != undefined) {
      isSave=false
    }
    that.setData({
      discA: options.A,
      discM: options.M,
      discL: options.L,
      isSave: isSave
    })
    this.getAGraph()
    //this.getMGraph()
    //this.getLGraph()

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 通过最不符合的DISC结果，绘制受压形象的DISC图
   * 
   */
  getLGraph: function() {
    const ctx = wx.createCanvasContext('myCanvas')
    var url = '../resource/bg-sm.jpg'
    ctx.drawImage(url, 0, 0, this.data.bgWIDTH, this.data.bgHEIGHT); // 直接使用图片路径

    var d = 0
    var i = 0
    var s = 0
    var c = 0

    var discTemp = this.data.discL.split(",")
    d = discTemp[0]
    i = discTemp[1]
    s = discTemp[2]
    c = discTemp[3]
    if (d == 0) this.data.D = this.data.COORDS_L['D28']
    if (d == 1) this.data.D = this.data.COORDS_L['D28']
    if (d == 2) this.data.D = this.data.COORDS_L['D27']
    if (d == 3) this.data.D = this.data.COORDS_L['D26']
    if (d == 4) this.data.D = this.data.COORDS_L['D25']
    if (d == 5) this.data.D = this.data.COORDS_L['D24']
    if (d == 6) this.data.D = this.data.COORDS_L['D22']
    if (d == 7) this.data.D = this.data.COORDS_L['D21']
    if (d == 8) this.data.D = this.data.COORDS_L['D19']
    if (d == 9) this.data.D = this.data.COORDS_L['D18']
    if (d == 10) this.data.D = this.data.COORDS_L['D14']
    if (d == 11) this.data.D = this.data.COORDS_L['D12']
    if (d == 12) this.data.D = this.data.COORDS_L['D11']
    if (d == 13) this.data.D = this.data.COORDS_L['D9']
    if (d == 14) this.data.D = this.data.COORDS_L['D7']
    if (d == 15) this.data.D = this.data.COORDS_L['D5']
    if (d == 16) this.data.D = this.data.COORDS_L['D4']
    if (d == 17) this.data.D = this.data.COORDS_L['D3']
    if (d > 17 && d < 27) this.data.D = this.data.COORDS_L['D2']
    if (d == 27) this.data.D = this.data.COORDS_L['D1']

    if (i == 0) this.data.I = this.data.COORDS_L['I28']
    if (i == 1) this.data.I = this.data.COORDS_L['I26']
    if (i == 2) this.data.I = this.data.COORDS_L['I25']
    if (i == 3) this.data.I = this.data.COORDS_L['I23']
    if (i == 4) this.data.I = this.data.COORDS_L['I20']
    if (i == 5) this.data.I = this.data.COORDS_L['I16']
    if (i == 6) this.data.I = this.data.COORDS_L['I12']
    if (i == 7) this.data.I = this.data.COORDS_L['I10']
    if (i == 8) this.data.I = this.data.COORDS_L['I7']
    if (i == 9) this.data.I = this.data.COORDS_L['I4']
    if (i == 10) this.data.I = this.data.COORDS_L['I3']
    if (i > 10 && d < 26) this.data.I = this.data.COORDS_L['I2']
    if (i >= 26) this.data.I = this.data.COORDS_L['I1']

    if (s == 0) this.data.S = this.data.COORDS_L['S28']
    if (s == 1) this.data.S = this.data.COORDS_L['S26']
    if (s == 2) this.data.S = this.data.COORDS_L['S22']
    if (s == 3) this.data.S = this.data.COORDS_L['S19']
    if (s == 4) this.data.S = this.data.COORDS_L['S15']
    if (s == 5) this.data.S = this.data.COORDS_L['S12']
    if (s == 6) this.data.S = this.data.COORDS_L['S9']
    if (s == 7) this.data.S = this.data.COORDS_L['S7']
    if (s == 8) this.data.S = this.data.COORDS_L['S5']
    if (s == 9) this.data.S = this.data.COORDS_L['S4']
    if (s == 10) this.data.S = this.data.COORDS_L['S3']
    if (s > 10 && d < 27) this.data.S = this.data.COORDS_L['S2']
    if (s >= 27) this.data.S = this.data.COORDS_L['S1']

    if (c == 0) this.data.C = this.data.COORDS_L['C28']
    if (c == 1) this.data.C = this.data.COORDS_L['C27']
    if (c == 2) this.data.C = this.data.COORDS_L['C26']
    if (c == 3) this.data.C = this.data.COORDS_L['C25']
    if (c == 4) this.data.C = this.data.COORDS_L['C24']
    if (c == 5) this.data.C = this.data.COORDS_L['C22']
    if (c == 6) this.data.C = this.data.COORDS_L['C20']
    if (c == 7) this.data.C = this.data.COORDS_L['C16']
    if (c == 8) this.data.C = this.data.COORDS_L['C14']
    if (c == 9) this.data.C = this.data.COORDS_L['C11']
    if (c == 10) this.data.C = this.data.COORDS_L['C8']
    if (c == 11) this.data.C = this.data.COORDS_L['C6']
    if (c == 12) this.data.C = this.data.COORDS_L['C4']
    if (c == 13) this.data.C = this.data.COORDS_L['C3']
    if (c > 13 && c < 26) this.data.C = this.data.COORDS_L['C2']
    if (c >= 26) this.data.C = this.data.COORDS_L['C1']




    ctx.moveTo(this.data.D.x / 2, this.data.D.y / 2)
    ctx.lineTo(this.data.I.x / 2, this.data.I.y / 2)
    ctx.lineTo(this.data.S.x / 2, this.data.S.y / 2)
    ctx.lineTo(this.data.C.x / 2, this.data.C.y / 2)
    ctx.stroke()
    ctx.draw()

  },

  /**
   * 通过最符合的DISC结果，绘制向外形象的DISC图
   * 
   */
  getMGraph: function() {
    const ctx = wx.createCanvasContext('myCanvas')
    var url = '../resource/bg-sm.jpg'
    ctx.drawImage(url, 0, 0, this.data.bgWIDTH, this.data.bgHEIGHT); // 直接使用图片路径

    var d = 0
    var i = 0
    var s = 0
    var c = 0

    var discTemp = this.data.discM.split(",")
    d = discTemp[0]
    i = discTemp[1]
    s = discTemp[2]
    c = discTemp[3]
    //获得D的坐标位置
    if (d == 0) this.data.D = this.data.COORDS_M['D3']
    if (d == 1) this.data.D = this.data.COORDS_M['D5']
    if (d == 2) this.data.D = this.data.COORDS_M['D9']
    if (d == 3) this.data.D = this.data.COORDS_M['D12']
    if (d == 4) this.data.D = this.data.COORDS_M['D14']
    if (d == 5) this.data.D = this.data.COORDS_M['D16']
    if (d == 6) this.data.D = this.data.COORDS_M['D19']
    if (d == 7) this.data.D = this.data.COORDS_M['D20']
    if (d == 8) this.data.D = this.data.COORDS_M['D22']
    if (d == 9) this.data.D = this.data.COORDS_M['D23']
    if (d == 10) this.data.D = this.data.COORDS_M['D24']
    if (d == 11) this.data.D = this.data.COORDS_M['D25']
    if (d == 12) this.data.D = this.data.COORDS_M['D26']
    if (d > 12 && d < 27) this.data.D = this.data.COORDS_M['D27']
    if (d == 27) this.data.D = this.data.COORDS_M['D28']
    //获得I的坐标位置
    if (i == 0) this.data.I = this.data.COORDS_M['I1']
    if (i == 1) this.data.I = this.data.COORDS_M['I2']
    if (i == 2) this.data.I = this.data.COORDS_M['I4']
    if (i == 3) this.data.I = this.data.COORDS_M['I5']
    if (i == 4) this.data.I = this.data.COORDS_M['I9']
    if (i == 5) this.data.I = this.data.COORDS_M['I12']
    if (i == 6) this.data.I = this.data.COORDS_M['I14']
    if (i == 7) this.data.I = this.data.COORDS_M['I16']
    if (i == 8) this.data.I = this.data.COORDS_M['I20']
    if (i == 9) this.data.I = this.data.COORDS_M['I22']
    if (i == 10) this.data.I = this.data.COORDS_M['I23']
    if (i == 11) this.data.I = this.data.COORDS_M['I25']
    if (i == 12) this.data.I = this.data.COORDS_M['I26']
    if (i > 12 && d < 28) this.data.I = this.data.COORDS_M['I27']
    if (i >= 28) this.data.I = this.data.COORDS_M['I28']
    //获得S的坐标位置
    if (s == 0) this.data.S = this.data.COORDS_M['S1']
    if (s == 1) this.data.S = this.data.COORDS_M['S2']
    if (s == 2) this.data.S = this.data.COORDS_M['S3']
    if (s == 3) this.data.S = this.data.COORDS_M['S4']
    if (s == 4) this.data.S = this.data.COORDS_M['S6']
    if (s == 5) this.data.S = this.data.COORDS_M['S10']
    if (s == 6) this.data.S = this.data.COORDS_M['S11']
    if (s == 7) this.data.S = this.data.COORDS_M['S13']
    if (s == 8) this.data.S = this.data.COORDS_M['S15']
    if (s == 9) this.data.S = this.data.COORDS_M['S17']
    if (s == 10) this.data.S = this.data.COORDS_M['S19']
    if (s == 11) this.data.S = this.data.COORDS_M['S21']
    if (s == 12) this.data.S = this.data.COORDS_M['S23']
    if (s == 13) this.data.S = this.data.COORDS_M['S25']
    if (s == 14) this.data.S = this.data.COORDS_M['S26']
    if (s > 14 && d < 26) this.data.S = this.data.COORDS_M['S27']
    if (s >= 26) this.data.S = this.data.COORDS_M['S28']
    //获得C的坐标位置
    if (c == 0) this.data.C = this.data.COORDS_M['C1']
    if (c == 1) this.data.C = this.data.COORDS_M['C2']
    if (c == 2) this.data.C = this.data.COORDS_M['C4']
    if (c == 3) this.data.C = this.data.COORDS_M['C7']
    if (c == 4) this.data.C = this.data.COORDS_M['C10']
    if (c == 5) this.data.C = this.data.COORDS_M['C13']
    if (c == 6) this.data.C = this.data.COORDS_M['C16']
    if (c == 7) this.data.C = this.data.COORDS_M['C19']
    if (c == 8) this.data.C = this.data.COORDS_M['C21']
    if (c == 9) this.data.C = this.data.COORDS_M['C23']
    if (c == 10) this.data.C = this.data.COORDS_M['C24']
    if (c == 11) this.data.C = this.data.COORDS_M['C26']
    if (c == 12) this.data.C = this.data.COORDS_M['C27']
    if (c > 12) this.data.C = this.data.COORDS_M['C28']



    ctx.moveTo(this.data.D.x / 2, this.data.D.y / 2)
    ctx.lineTo(this.data.I.x / 2, this.data.I.y / 2)
    ctx.lineTo(this.data.S.x / 2, this.data.S.y / 2)
    ctx.lineTo(this.data.C.x / 2, this.data.C.y / 2)
    ctx.stroke()
    ctx.draw()

  },



  /**
   * 通过A的DISC结果，绘制自我形象DISC图
   */
  getAGraph: function() {
    const ctx = wx.createCanvasContext('myCanvas')
    var url = '../resource/bg-sm.jpg'
    ctx.drawImage(url, 0, 0, this.data.bgWIDTH, this.data.bgHEIGHT); // 直接使用图片路径

    var d = 0
    var i = 0
    var s = 0
    var c = 0

    var discTemp = this.data.discA.split(",")
    d = discTemp[0]
    i = discTemp[1]
    s = discTemp[2]
    c = discTemp[3]


    if (d >= 27) this.data.D = this.data.COORDS['D28']
    if (d < 27 && d > 9) this.data.D = this.data.COORDS['D27']
    if (d == 9) this.data.D = this.data.COORDS['D26']
    if (d == 8) this.data.D = this.data.COORDS['D25']
    if (d == 7) this.data.D = this.data.COORDS['D25']
    if (d == 6) this.data.D = this.data.COORDS['D25']
    if (d == 5) this.data.D = this.data.COORDS['D24']
    if (d == 4) this.data.D = this.data.COORDS['D24']
    if (d == 3) this.data.D = this.data.COORDS['D23']
    if (d == 2) this.data.D = this.data.COORDS['D23']
    if (d == 1) this.data.D = this.data.COORDS['D22']
    if (d == 0) this.data.D = this.data.COORDS['D21']
    if (d == -1) this.data.D = this.data.COORDS['D20']
    if (d == -2) this.data.D = this.data.COORDS['D19']
    if (d == -3) this.data.D = this.data.COORDS['D18']
    if (d == -4) this.data.D = this.data.COORDS['D17']
    if (d == -5) this.data.D = this.data.COORDS['D16']
    if (d == -6) this.data.D = this.data.COORDS['D15']
    if (d == -7) this.data.D = this.data.COORDS['D14']
    if (d == -8) this.data.D = this.data.COORDS['D12']
    if (d == -9) this.data.D = this.data.COORDS['D11']
    if (d == -10) this.data.D = this.data.COORDS['D10']
    if (d == -11) this.data.D = this.data.COORDS['D9']
    if (d == -12) this.data.D = this.data.COORDS['D8']
    if (d == -13) this.data.D = this.data.COORDS['D7']
    if (d == -14) this.data.D = this.data.COORDS['D6']
    if (d == -15) this.data.D = this.data.COORDS['D4']
    if (d == -16) this.data.D = this.data.COORDS['D3']
    if (d < -16 && d > -27) this.data.D = this.data.COORDS['D2']
    if (d == -27) this.data.D = this.data.COORDS['D1']

    if (i >= 28) this.data.I = this.data.COORDS['I28']
    if (i < 28 && i > 9) this.data.I = this.data.COORDS['I27']
    if (i == 9) this.data.I = this.data.COORDS['I26']
    if (i == 8) this.data.I = this.data.COORDS['I25']
    if (i == 7) this.data.I = this.data.COORDS['I24']
    if (i == 6) this.data.I = this.data.COORDS['I22']
    if (i == 5) this.data.I = this.data.COORDS['I20']
    if (i == 4) this.data.I = this.data.COORDS['I19']
    if (i == 3) this.data.I = this.data.COORDS['I17']
    if (i == 2) this.data.I = this.data.COORDS['I16']
    if (i == 1) this.data.I = this.data.COORDS['I14']
    if (i == 0) this.data.I = this.data.COORDS['I12']
    if (i == -1) this.data.I = this.data.COORDS['I11']
    if (i == -2) this.data.I = this.data.COORDS['I10']
    if (i == -3) this.data.I = this.data.COORDS['I8']
    if (i == -4) this.data.I = this.data.COORDS['I7']
    if (i == -5) this.data.I = this.data.COORDS['I6']
    if (i == -6) this.data.I = this.data.COORDS['I4']
    if (i == -7) this.data.I = this.data.COORDS['I4']
    if (i == -8) this.data.I = this.data.COORDS['I3']
    if (i < -8 && d > -26) this.data.I = this.data.COORDS['I2']
    if (i <= -26) this.data.I = this.data.COORDS['I1']

    if (s >= 26) this.data.S = this.data.COORDS['S28']
    if (s < 26 && s >= 14) this.data.S = this.data.COORDS['S27']
    if (s == 13) this.data.S = this.data.COORDS['S26']
    if (s == 12) this.data.S = this.data.COORDS['S25']
    if (s == 11) this.data.S = this.data.COORDS['S24']
    if (s == 10) this.data.S = this.data.COORDS['S23']
    if (s == 9) this.data.S = this.data.COORDS['S21']
    if (s == 8) this.data.S = this.data.COORDS['S20']
    if (s == 7) this.data.S = this.data.COORDS['S19']
    if (s == 6) this.data.S = this.data.COORDS['S17']
    if (s == 5) this.data.S = this.data.COORDS['S15']
    if (s == 4) this.data.S = this.data.COORDS['S14']
    if (s == 3) this.data.S = this.data.COORDS['S13']
    if (s == 2) this.data.S = this.data.COORDS['S12']
    if (s == 1) this.data.S = this.data.COORDS['S11']
    if (s == 0) this.data.S = this.data.COORDS['S10']
    if (s == -1) this.data.S = this.data.COORDS['S8']
    if (s == -2) this.data.S = this.data.COORDS['S7']
    if (s == -3) this.data.S = this.data.COORDS['S6']
    if (s == -4) this.data.S = this.data.COORDS['S5']
    if (s == -5) this.data.S = this.data.COORDS['S4']
    if (s == -6) this.data.S = this.data.COORDS['S4']
    if (s == -7) this.data.S = this.data.COORDS['S3']
    if (s < -7 && d > -27) this.data.S = this.data.COORDS['S2']
    if (s <= -27) this.data.S = this.data.COORDS['S1']

    if (c == 24) this.data.C = this.data.COORDS['C28']
    if (c < 24 && c >= 18) this.data.C = this.data.COORDS['C27']
    if (c < 18 && c > 6) this.data.C = this.data.COORDS['C26']
    if (c == 6) this.data.C = this.data.COORDS['C25']
    if (c == 5) this.data.C = this.data.COORDS['C24']
    if (c == 4) this.data.C = this.data.COORDS['C23']
    if (c == 3) this.data.C = this.data.COORDS['C21']
    if (c == 2) this.data.C = this.data.COORDS['C20']
    if (c == 1) this.data.C = this.data.COORDS['C19']
    if (c == 0) this.data.C = this.data.COORDS['C18']
    if (c == -1) this.data.C = this.data.COORDS['C16']
    if (c == -2) this.data.C = this.data.COORDS['C15']
    if (c == -3) this.data.C = this.data.COORDS['C12']
    if (c == -4) this.data.C = this.data.COORDS['C11']
    if (c == -5) this.data.C = this.data.COORDS['C9']
    if (c == -6) this.data.C = this.data.COORDS['C8']
    if (c == -7) this.data.C = this.data.COORDS['C7']
    if (c == -8) this.data.C = this.data.COORDS['C5']
    if (c == -9) this.data.C = this.data.COORDS['C4']
    if (c == -10) this.data.C = this.data.COORDS['C3']
    if (c == -11) this.data.C = this.data.COORDS['C3']
    if (c < -11 && c > -26) this.data.C = this.data.COORDS['C2']
    if (c <= -26) this.data.C = this.data.COORDS['C1']




    ctx.moveTo(this.data.D.x / 2, this.data.D.y / 2)
    ctx.lineTo(this.data.I.x / 2, this.data.I.y / 2)
    ctx.lineTo(this.data.S.x / 2, this.data.S.y / 2)
    ctx.lineTo(this.data.C.x / 2, this.data.C.y / 2)
    ctx.stroke()
    ctx.draw()
  },
  /**
   * 当切换页面中的TAB页时：
   * 
   */
  tabshandleChange({ detail }) {
    this.setData({
      currentTab: detail.key
    });
    if (detail.key =="isAGraph"){
      this.getAGraph()
    } else if (detail.key == "isMGraph"){
      this.getMGraph()
    } else if (detail.key == "isLGraph"){
      this.getLGraph()
    }
  },
  goHomePage: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },


  /**
   * 保存某个用户的DISC测评结果
   */
  doSaveResult: function (e) {
     
      var serverUrl = app.serverUrl
      var user = app.getGlobalUserInfo()
      var userId = user.userId
    var username = user.username
      wx.showLoading({
        title: '请等待...',
      });
      wx.request({
        url: serverUrl + '/saveDiscResult',
        method: "POST",
        data: {
          userId: userId,
          username: username,
          mresult: this.data.discM,
          lresult:this.data.discL,
          aresult:this.data.discA,
          discType:this.data.discType
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data);
          wx.hideLoading();
          var status = res.data.status;
          if (status == 200) {
            wx.showToast({
              title: "DISC结果保存成功，可以在【个人中心】查看测试结果",
              icon: 'none',
              duration: 3000
            }) 
           } else if (status == 500) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 3000
            })
          }
        }
      })
    }
  
})