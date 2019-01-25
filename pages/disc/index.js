// pages/disc/disc.js
//const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,
    topicsNum:28,
    M:'',
    L:'',
    A:'',
    questions: [
      {
        key: 'Q1',
        most: '',
        lease: '',
        choices: [{
          key: 'Q1C1',
          text: '敢作敢为',
          label: 'D',
          m:false,
          l:false
        }, {
          key: 'Q1C2',
          text: '兴致勃勃',
          label: 'I',
           m: false,
           l: false
        }, {
          key: 'Q1C3',
          text: '交往得体',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q1C4',
          text: '满足',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q2',
        most: '',
        lease: '',
        choices: [{
          key: 'Q2C1',
          text: '有决心',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q2C2',
          text: '得人信任',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q2C3',
          text: '性情温和',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q2C4',
          text: '谨慎',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q3',
        most: '',
        lease: '',
        choices: [{
          key: 'Q3C1',
          text: '坦率',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q3C2',
          text: '友善',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q3C3',
          text: '冷静',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q3C4',
          text: '精密准确',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q4',
        most: '',
        lease: '',
        choices: [{
          key: 'Q4C1',
          text: '果断',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q4C2',
          text: '健谈',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q4C3',
          text: '自制力强',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q4C4',
          text: '循规蹈矩',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q5',
        most: '',
        lease: '',
        choices: [{
          key: 'Q5C1',
          text: '有冒险精神',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q5C2',
          text: '善交朋友',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q5C3',
          text: '适中',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q5C4',
          text: '有洞察力',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q6',
        most: '',
        lease: '',
        choices: [{
          key: 'Q6C1',
          text: '善于创新',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q6C2',
          text: '有说服力',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q6C3',
          text: '谦虚',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q6C4',
          text: '温和',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q7',
        most: '',
        lease: '',
        choices: [{
          key: 'Q7C1',
          text: '控制大局',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q7C2',
          text: '善于表达',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q7C3',
          text: '反应积极',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q7C4',
          text: '考虑周详',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q8',
        most: '',
        lease: '',
        choices: [{
          key: 'Q8C1',
          text: '性急',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q8C2',
          text: '泰然自若',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q8C3',
          text: '谦虚',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q8C4',
          text: '观察细致',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q9',
        most: '',
        lease: '',
        choices: [{
          key: 'Q9C1',
          text: '坚持己见',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q9C2',
          text: '有魅力',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q9C3',
          text: '随和',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q9C4',
          text: '委婉',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q10',
        most: '',
        lease: '',
        choices: [{
          key: 'Q10C1',
          text: '勇敢',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q10C2',
          text: '鼓舞别人',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q10C3',
          text: '乐意服从',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q10C4',
          text: '怯懦',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q11',
        most: '',
        lease: '',
        choices: [{
          key: 'Q11C1',
          text: '意志坚定',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q11C2',
          text: '活泼',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q11C3',
          text: '乐于助人',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q11C4',
          text: '含蓄',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q12',
        most: '',
        lease: '',
        choices: [{
          key: 'Q12C1',
          text: '好胜',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q12C2',
          text: '乐观',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q12C3',
          text: '体贴人',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q12C4',
          text: '隐秘的',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q13',
        most: '',
        lease: '',
        choices: [{
          key: 'Q13C1',
          text: '坚定',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q13C2',
          text: '调皮',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q13C3',
          text: '顺从',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q13C4',
          text: '挑剔',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q14',
        most: '',
        lease: '',
        choices: [{
          key: 'Q14C1',
          text: '独立',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q14C2',
          text: '激发人',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q14C3',
          text: '友善',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q14C4',
          text: '有洞察力',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q15',
        most: '',
        lease: '',
        choices: [{
          key: 'Q15C1',
          text: '自我省察',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q15C2',
          text: '有吸引力',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q15C3',
          text: '可预测的',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q15C4',
          text: '固执',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q16',
        most: '',
        lease: '',
        choices: [{
          key: 'Q16C1',
          text: '大胆',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q16C2',
          text: '迷人',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q16C3',
          text: '忠诚',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q16C4',
          text: '有逻辑性',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q17',
        most: '',
        lease: '',
        choices: [{
          key: 'Q17C1',
          text: '自信',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q17C2',
          text: '爱社交',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q17C3',
          text: '有耐心',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q17C4',
          text: '语气温和',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q18',
        most: '',
        lease: '',
        choices: [{
          key: 'Q18C1',
          text: '情绪高昂',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q18C2',
          text: '热切渴望',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q18C3',
          text: '心甘情愿',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q18C4',
          text: '彻底',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q19',
        most: '',
        lease: '',
        choices: [{
          key: 'Q19C1',
          text: '积极进取',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q19C2',
          text: '外向',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q19C3',
          text: '和蔼可亲',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q19C4',
          text: '瞻前顾后',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q20',
        most: '',
        lease: '',
        choices: [{
          key: 'Q20C1',
          text: '肯定的',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q20C2',
          text: '有同情心',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q20C3',
          text: '充满信心',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q20C4',
          text: '公正',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q21',
        most: '',
        lease: '',
        choices: [{
          key: 'Q21C1',
          text: '执着',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q21C2',
          text: '生气勃勃',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q21C3',
          text: '慷慨',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q21C4',
          text: '自律',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q22',
        most: '',
        lease: '',
        choices: [{
          key: 'Q22C1',
          text: '强有力',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q22C2',
          text: '感情用事',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q22C3',
          text: '随和',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q22C4',
          text: '内向',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q23',
        most: '',
        lease: '',
        choices: [{
          key: 'Q23C1',
          text: '精力充沛',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q23C2',
          text: '善交际',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q23C3',
          text: '宽容',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q23C4',
          text: '优雅',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q24',
        most: '',
        lease: '',
        choices: [{
          key: 'Q24C1',
          text: '苛求',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q24C2',
          text: '掳获人心',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q24C3',
          text: '安于现状',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q24C4',
          text: '循规蹈矩',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q25',
        most: '',
        lease: '',
        choices: [{
          key: 'Q25C1',
          text: '好辩论',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q25C2',
          text: '心情开朗',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q25C3',
          text: '愿意合作',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q25C4',
          text: '有条理',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q26',
        most: '',
        lease: '',
        choices: [{
          key: 'Q26C1',
          text: '直截了当',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q26C2',
          text: '快乐逍遥',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q26C3',
          text: '脾气温和',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q26C4',
          text: '精益求精',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q27',
        most: '',
        lease: '',
        choices: [{
          key: 'Q27C1',
          text: '坐立不安',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q27C2',
          text: '有感染力',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q27C3',
          text: '友善',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q27C4',
          text: '小心翼翼',
            label: 'C',
            m: false,
            l: false
        }]
      },
      {
        key: 'Q28',
        most: '',
        lease: '',
        choices: [{
          key: 'Q28C1',
          text: '有开创精神',
          label: 'D',
          m: false,
          l: false
        }, {
          key: 'Q28C2',
          text: '乐观',
            label: 'I',
            m: false,
            l: false
        }, {
          key: 'Q28C3',
          text: '乐于助人',
            label: 'S',
            m: false,
            l: false
        }, {
          key: 'Q28C4',
          text: '尊重别人',
            label: 'C',
            m: false,
            l: false
        }]
        ,
        
      },
       
      
      
      ]
  },


  handleChange({ detail }) {
    const type = detail.type;
    if (type === 'next') {
      this.setData({
        current: this.data.current + 1
        
      });
    
    
    } else if (type === 'prev') {
      this.setData({
        current: this.data.current - 1
        
      });
    }
  },
  /**
   * 当用户点击最符合或者最不符合
   * 1、获得当前点击radio的ID，格式如下：选项的key-most/lease
   * 2、通过当前题目的序号，修改相应问题的最符合（most）or 最不符合（lease）值
   * 3、遍历页面中所有的radio控件，除了当前点击radio的checked状态为true，其余均为false
   */
  onSwitChChange(event) {
    const detail = event.detail;
    var targetId = event.currentTarget.id;
    var targetIds = targetId.split("-")
    var current=this.data.current-1
   
    var mORL = "m"
    if (targetIds[1] == "lease") {
      mORL = "l"
    } else {
      mORL = "m"
    }
    //2
    var currentQuestion = "questions[" + current + "]." + targetIds[1]
    
    this.setData({
      [currentQuestion]: targetIds[2]
      
    })
    //3
    var currentQuestionchoices = this.data.questions[current].choices
    for (var i = 0, len = currentQuestionchoices.length; i < len; i++) {
      
      var choice = "questions[" + current + "].choices[" + i + "]." + mORL  
      if (currentQuestionchoices[i].key == targetIds[0]){
         

        this.setData({
          [choice]:true
        })
         
      }else{
        this.setData({
          [choice]: false
        })
      }
    }
    console.log(this.data.questions[current])
  },

  /**
   * 用户点击完成，进行如下操作
   * 1、计算DISC结果。分别计算最符合和最不符合中的DISC的数目
   * 2、计算A（最符合-最不符合）的DISC数目
   * 3、将MLA的值存储到数据库
   * 4、将MLA中值传递给绘图页面，进行绘图操作
   */
  completeClick(event){
    console.log("##########用户完成DISC测试，生成DISC分析图表所用数据##########")
    var questions= this.data.questions
    var mD=0
    var mI = 0
    var mS = 0
    var mC = 0
    var lD = 0
    var lI = 0
    var lS = 0
    var lC = 0
    for (var i = 0, len = questions.length; i < len; i++) {
      if (questions[i].most=='D'){
        mD = mD+1
      } else if ( questions[i].most == 'I'){
        mI = mI + 1
      } else if (questions[i].most == 'S') {
        mS = mS + 1
      } else if (questions[i].most == 'C') {
        mC = mC + 1
      }
      if (questions[i].lease == 'D') {
        lD = lD + 1
      } else if (questions[i].lease == 'I') {
        lI = lI + 1
      } else if (questions[i].lease == 'S') {
        lS = lS + 1
      } else if (questions[i].lease == 'C') {
        lC = lC + 1
      }

    }
    this.data.M = mD + ',' + mI + ',' + mS + ',' + mC
    console.log('统计结果如下：最符合DISC [D:'+mD+',I:'+mI+',S:'+mS+',C:'+mC)
    console.log('M：最符合' + this.data.M)
    this.data.L = lD + ',' + lI + ',' + lS + ',' + lC
    console.log('统计结果如下：最不符合DISC [D:' + lD + ',I:' + mI + ',S:' + lS + ',C:' + lC)
    console.log('L：最不符合' + this.data.L)
    this.data.A = (mD - lD) + ',' + (mI - lI) + ',' + (mS - lS) + ',' + (mC- lC)
    console.log('A：M-L' + this.data.A)

    //将MLA的值存储到服务器

    //跳转到绘图页面
    wx.navigateTo({
      url: '../amlGraph/index?M='+this.data.M+'&L='+this.data.L+'&A='+this.data.A,

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  }
})