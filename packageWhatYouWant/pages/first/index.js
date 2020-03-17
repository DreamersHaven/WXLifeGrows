Page({
  data: {

    //用于控制页面的遮罩是否显示
    showLeft1: false,
    showLeft2: false,
    showRight1: false,
    showRigh2: false,
    showLeft3: false,

    //用于记录目前处于第几步操作
    current: 0,

    //用控制在不同操作步骤时，页面的显示和隐藏区域
    isfirstShow: false,
    isSecondShow: true,
    isThirdShow: true,
    switch1: false,

    //定义需求数组
    wants: [{
        key: 'alive1',
        value: '',
        isChoose: false

      },
      {
        key: 'alive2',
        value: '',
        isChoose: false

      },
      {
        key: 'alive3',
        value: '',
        isChoose: false

      },
      {
        key: 'alive4',
        value: '',
        isChoose: false

      },
      {
        key: 'alive5',
        value: '',
        isChoose: false

      },
      {
        key: 'alive6',
        value: '',
        isChoose: false

      },
      {
        key: 'alive7',
        value: '',
        isChoose: false

      }, {
        key: 'love1',
        value: '',
        isChoose: false

      },
      {
        key: 'love2',
        value: '',
        isChoose: false

      },
      {
        key: 'love3',
        value: '',
        isChoose: false

      },
      {
        key: 'love4',
        value: '',
        isChoose: false

      },
      {
        key: 'love5',
        value: '',
        isChoose: false

      },
      {
        key: 'love6',
        value: '',
        isChoose: false

      },
      {
        key: 'love7',
        value: '',
        isChoose: false
      },
      {
        key: 'free1',
        value: '',
        isChoose: false

      },
      {
        key: 'free2',
        value: '',
        isChoose: false

      },
      {
        key: 'free3',
        value: '',
        isChoose: false

      },
      {
        key: 'free4',
        value: '',
        isChoose: false

      },
      {
        key: 'free5',
        value: '',
        isChoose: false

      },
      {
        key: 'free6',
        value: '',
        isChoose: false

      },
      {
        key: 'free7',
        value: '',
        isChoose: false

      }, {
        key: 'power1',
        value: '',
        isChoose: false

      },
      {
        key: 'power2',
        value: '',
        isChoose: false

      },
      {
        key: 'power3',
        value: '',
        isChoose: false

      },
      {
        key: 'power4',
        value: '',
        isChoose: false

      },
      {
        key: 'power5',
        value: '',
        isChoose: false

      },
      {
        key: 'power6',
        value: '',
        isChoose: false

      },
      {
        key: 'power7',
        value: '',
        isChoose: false

      },
      {
        key: 'fun1',
        value: '',
        isChoose: false

      },
      {
        key: 'fun2',
        value: '',
        isChoose: false

      },
      {
        key: 'fun3',
        value: '',
        isChoose: false

      },
      {
        key: 'fun4',
        value: '',
        isChoose: false

      },
      {
        key: 'fun5',
        value: '',
        isChoose: false

      },
      {
        key: 'fun6',
        value: '',
        isChoose: false

      },
      {
        key: 'fun7',
        value: '',
        isChoose: false

      }
    ],
    //第二步显示的数组（不显示空需求，随机打乱顺序）
    secondWants: []

  },
  /**
   * 页面加载
   * 1、将获得的需求信息显示在页面
   * 优先从本地缓存中加载数据
   * 如果本地缓存中找不到数据，再从后台服务器加载数据
   */
  onLoad: function(options) {
    var me = this;

    var collectioninfos = wx.getStorageSync("wantsInfo")
    if (collectioninfos) {
      this.data.wants = collectioninfos;
    }
    me.setData({
      list: this.data.wants
    })
  },


  /**
   * 用于控制页面遮罩（共5个函数）
   */
  toggleLeft1() {
    this.setData({
      showLeft1: !this.data.showLeft1
    });
  },
  toggleLeft2() {
    this.setData({
      showLeft2: !this.data.showLeft2
    });
  },
  toggleRight1() {
    this.setData({
      showRight1: !this.data.showRight1
    });
  },
  toggleRight2() {
    this.setData({
      showRight2: !this.data.showRight2
    });
  },
  toggleLeft3() {
    this.setData({
      showLeft3: !this.data.showLeft3
    });
  },

  /**
   * 页面中 【下一步】 按钮的点击事件
   */
  handleGoClick(e) {
    //判断要执行什么操作
    var buttonName = e.detail.target.id

    //如果执行暂存操作，依据页面中数据更新数组内容，将数组保存到本地缓存中
    if (buttonName == 'saveBut') {
      this.updateWants(e)
      wx.setStorageSync("wantsInfo", this.data.wants)
      wx.showToast({
        title: '操作成功',
        icon: 'none',
        duration: 2000
      })
      return
    }


    if (this.data.current == 2) {
      wx.showToast({
        title: '亲，这已经是最后一步啦~',
        icon: 'none',
        duration: 2000
      })
      return
    }

    //如果要进入第二步，将页面输入框控件的内容，绑定到数组
    //遍历form中表单所有控件信息，如果输入的需求项不足于35项，给予用户提示，是否进行下一步
    //将输入的需求，绑定到数组

    if (this.data.current == 0) {

      var that = this

      this.updateWants(e)

      //对生成的需求数组进行如下处理
      //1、如果用户输入的需求数不足35个，给予温馨提示，
      //不强行限制，允许用户在输入不满35条的时,仍可以进行后续的操作
      //2、随机打乱 需求顺序 并 去掉 value 为空的信息
      var list = this.data.wants
      //清空数组
      this.data.secondWants=[] 
      for (var i = 0, len = list.length; i < len; i++) {
        if (list[i].value != '') {
          var want = {
            key: '',
            value: '',
            isChoose: false,
            id: 0
          }
          want.key=list[i].key
          want.value=list[i].value
          want.isChoose=list[i].isChoose
          want.id = Math.floor(Math.random() * 50 + 50)
          this.data.secondWants.push(want)
          this.data.secondWants.sort(that.compare("id"))
          console.log(this.data.secondWants)

        }else{//如果需求数组的值为空，将选中状态也设置为初始状态
          list[i].isChoose=false
        }
      }

      that.setData({
        list: this.data.wants,
        secondWants: this.data.secondWants
      })
    }
    const addCurrent = this.data.current + 1;
    this.handleClick(addCurrent)
    //如果到了生成结果的步骤
    if (this.data.current == 2) {
      this.showWantResult()
    }
  },
  /**
   * 内部函数
   * 对数组进行排序
   */
  compare: function (property) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      return value2 - value1;
    }

  },


  /**
   * 内部使用函数
   * 为需求数组重新赋值
   */
  updateWants(e) {
    this.data.wants[0].value = e.detail.value.alive1
    this.data.wants[1].value = e.detail.value.alive2
    this.data.wants[2].value = e.detail.value.alive3
    this.data.wants[3].value = e.detail.value.alive4
    this.data.wants[4].value = e.detail.value.alive5
    this.data.wants[5].value = e.detail.value.alive6
    this.data.wants[6].value = e.detail.value.alive7

    this.data.wants[7].value = e.detail.value.love1
    this.data.wants[8].value = e.detail.value.love2
    this.data.wants[9].value = e.detail.value.love3
    this.data.wants[10].value = e.detail.value.love4
    this.data.wants[11].value = e.detail.value.love5
    this.data.wants[12].value = e.detail.value.love6
    this.data.wants[13].value = e.detail.value.love7

    this.data.wants[14].value = e.detail.value.power1
    this.data.wants[15].value = e.detail.value.power2
    this.data.wants[16].value = e.detail.value.power3
    this.data.wants[17].value = e.detail.value.power4
    this.data.wants[18].value = e.detail.value.power5
    this.data.wants[19].value = e.detail.value.power6
    this.data.wants[20].value = e.detail.value.power7

    this.data.wants[21].value = e.detail.value.free1
    this.data.wants[22].value = e.detail.value.free2
    this.data.wants[23].value = e.detail.value.free3
    this.data.wants[24].value = e.detail.value.free4
    this.data.wants[25].value = e.detail.value.free5
    this.data.wants[26].value = e.detail.value.free6
    this.data.wants[27].value = e.detail.value.free7

    this.data.wants[28].value = e.detail.value.fun1
    this.data.wants[29].value = e.detail.value.fun2
    this.data.wants[30].value = e.detail.value.fun3
    this.data.wants[31].value = e.detail.value.fun4
    this.data.wants[32].value = e.detail.value.fun5
    this.data.wants[33].value = e.detail.value.fun6
    this.data.wants[34].value = e.detail.value.fun7


  },
  /**
   * 页面中 【上一步】 按钮的点击事件
   */
  handleBackClick() {
    if (this.data.current == 0) {
      return
    }

    const addCurrent = this.data.current - 1;
    this.handleClick(addCurrent)
  },



  /**
   * 内部调用函数（用于控制上一步下一步操作，页面的显示和隐藏区域）
   */
  handleClick: function(addCurrent) {

    const current = addCurrent > 2 ? 0 : addCurrent;
    var isfirstShow = false
    var isSecondShow = true
    var isThirdShow = true
    if (addCurrent == 1) {
      isfirstShow = true
      isSecondShow = false
      isThirdShow = true
    }

    if (addCurrent == 0) {
      isfirstShow = false
      isSecondShow = true
      isThirdShow = true
    }

    if (addCurrent == 2) {
      isfirstShow = true
      isSecondShow = true
      isThirdShow = false
    }
    this.setData({
      'current': current,
      'isfirstShow': isfirstShow,
      'isSecondShow': isSecondShow,
      'isThirdShow': isThirdShow
    })
  },
  /**
   * 开关设置发生变化时，更改页面参数值
   * 并将更给结果提交给后台服务器
   */
  onChange(event) {
    var that = this
    const detail = event.detail;
    var keyValue = event.target.id
    var list = that.data.wants
    var secondWants = that.data.secondWants
    //依据系统开关的键值（开关英文名称），定位到List相关信息
   
   
    for (var i = 0, len = list.length; i < len; i++) {
      if (keyValue == list[i].key) {
        list[i].isChoose = detail.value
        break
      }
    }
    var currentSwitch = ""
    for (var i = 0, len = secondWants.length; i < len; i++) {
      if (keyValue == secondWants[i].key) {
        currentSwitch = "secondWants[" + i + "].isChoose"
        break
      }
    }

    that.setData({
      [currentSwitch]: detail.value
    })
  },

  showWantResult() {
    var wants = JSON.stringify(this.data.wants)
    wx.navigateTo({
      url: '/packageWhatYouWant/pages/tree/index?wants=' + wants,
    })
  }




});