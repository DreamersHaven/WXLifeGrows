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
    ]


  },
  /**
   * 页面加载
   * 1、将获得的需求信息显示在页面
   * 优先从本地缓存中加载数据
   * 如果本地缓存中找不到数据，再从后台服务器加载数据
   */
  onLoad: function(options) {
    var me = this;
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
    if (this.data.current == 2) {
      return
    }
    //如果要进入第二步，将页面输入框控件的内容，绑定到数组
    //遍历form中表单所有控件信息，如果输入的需求项不足于35项，给予用户提示，是否进行下一步
    //将输入的需求，绑定到数组

    if (this.data.current == 0) {

      var that = this

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


      that.setData({
        list: this.data.wants
      })



    }


    const addCurrent = this.data.current + 1;
    this.handleClick(addCurrent)
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
  }
});