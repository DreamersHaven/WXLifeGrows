// pages/disc/disc.js
//const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,
    topicsNum:28,
    
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
          label: 'D'
        }, {
          key: 'Q8C2',
          text: '泰然自若',
          label: 'I'
        }, {
          key: 'Q8C3',
          text: '谦虚',
          label: 'S'
        }, {
          key: 'Q8C4',
          text: '观察细致',
          label: 'C'
        }]
      },
      {
        key: 'Q9',
        most: '',
        lease: '',
        choices: [{
          key: 'Q9C1',
          text: '坚持己见',
          label: 'D'
        }, {
          key: 'Q9C2',
          text: '有魅力',
          label: 'I'
        }, {
          key: 'Q9C3',
          text: '随和',
          label: 'S'
        }, {
          key: 'Q9C4',
          text: '委婉',
          label: 'C'
        }]
      },
      {
        key: 'Q10',
        most: '',
        lease: '',
        choices: [{
          key: 'Q10C1',
          text: '勇敢',
          label: 'D'
        }, {
          key: 'Q10C2',
          text: '鼓舞别人',
          label: 'I'
        }, {
          key: 'Q10C3',
          text: '乐意服从',
          label: 'S'
        }, {
          key: 'Q10C4',
          text: '怯懦',
          label: 'C'
        }]
      },
      {
        key: 'Q11',
        most: '',
        lease: '',
        choices: [{
          key: 'Q11C1',
          text: '意志坚定',
          label: 'D'
        }, {
          key: 'Q11C2',
          text: '活泼',
          label: 'I'
        }, {
          key: 'Q11C3',
          text: '乐于助人',
          label: 'S'
        }, {
          key: 'Q11C4',
          text: '含蓄',
          label: 'C'
        }]
      },
      {
        key: 'Q12',
        most: '',
        lease: '',
        choices: [{
          key: 'Q12C1',
          text: '好胜',
          label: 'D'
        }, {
          key: 'Q12C2',
          text: '乐观',
          label: 'I'
        }, {
          key: 'Q12C3',
          text: '体贴人',
          label: 'S'
        }, {
          key: 'Q12C4',
          text: '隐秘的',
          label: 'C'
        }]
      },
      {
        key: 'Q13',
        most: '',
        lease: '',
        choices: [{
          key: 'Q13C1',
          text: '坚定',
          label: 'D'
        }, {
          key: 'Q13C2',
          text: '调皮',
          label: 'I'
        }, {
          key: 'Q13C3',
          text: '顺从',
          label: 'S'
        }, {
          key: 'Q13C4',
          text: '挑剔',
          label: 'C'
        }]
      },
      {
        key: 'Q14',
        most: '',
        lease: '',
        choices: [{
          key: 'Q14C1',
          text: '独立',
          label: 'D'
        }, {
          key: 'Q14C2',
          text: '激发人',
          label: 'I'
        }, {
          key: 'Q14C3',
          text: '友善',
          label: 'S'
        }, {
          key: 'Q14C4',
          text: '有洞察力',
          label: 'C'
        }]
      },
      {
        key: 'Q15',
        most: '',
        lease: '',
        choices: [{
          key: 'Q15C1',
          text: '自我省察',
          label: 'D'
        }, {
          key: 'Q15C2',
          text: '有吸引力',
          label: 'I'
        }, {
          key: 'Q15C3',
          text: '可预测的',
          label: 'S'
        }, {
          key: 'Q15C4',
          text: '固执',
          label: 'C'
        }]
      },
      {
        key: 'Q16',
        most: '',
        lease: '',
        choices: [{
          key: 'Q16C1',
          text: '大胆',
          label: 'D'
        }, {
          key: 'Q16C2',
          text: '迷人',
          label: 'I'
        }, {
          key: 'Q16C3',
          text: '忠诚',
          label: 'S'
        }, {
          key: 'Q16C4',
          text: '有逻辑性',
          label: 'C'
        }]
      },
      {
        key: 'Q17',
        most: '',
        lease: '',
        choices: [{
          key: 'Q17C1',
          text: '自信',
          label: 'D'
        }, {
          key: 'Q17C2',
          text: '爱社交',
          label: 'I'
        }, {
          key: 'Q17C3',
          text: '有耐心',
          label: 'S'
        }, {
          key: 'Q17C4',
          text: '语气温和',
          label: 'C'
        }]
      },
      {
        key: 'Q18',
        most: '',
        lease: '',
        choices: [{
          key: 'Q18C1',
          text: '情绪高昂',
          label: 'D'
        }, {
          key: 'Q18C2',
          text: '热切渴望',
          label: 'I'
        }, {
          key: 'Q18C3',
          text: '心甘情愿',
          label: 'S'
        }, {
          key: 'Q18C4',
          text: '彻底',
          label: 'C'
        }]
      },
      {
        key: 'Q19',
        most: '',
        lease: '',
        choices: [{
          key: 'Q19C1',
          text: '积极进取',
          label: 'D'
        }, {
          key: 'Q19C2',
          text: '外向',
          label: 'I'
        }, {
          key: 'Q19C3',
          text: '和蔼可亲',
          label: 'S'
        }, {
          key: 'Q19C4',
          text: '瞻前顾后',
          label: 'C'
        }]
      },
      {
        key: 'Q20',
        most: '',
        lease: '',
        choices: [{
          key: 'Q20C1',
          text: '肯定的',
          label: 'D'
        }, {
          key: 'Q20C2',
          text: '有同情心',
          label: 'I'
        }, {
          key: 'Q20C3',
          text: '充满信心',
          label: 'S'
        }, {
          key: 'Q20C4',
          text: '公正',
          label: 'C'
        }]
      },
      {
        key: 'Q21',
        most: '',
        lease: '',
        choices: [{
          key: 'Q21C1',
          text: '执着',
          label: 'D'
        }, {
          key: 'Q21C2',
          text: '生气勃勃',
          label: 'I'
        }, {
          key: 'Q21C3',
          text: '慷慨',
          label: 'S'
        }, {
          key: 'Q21C4',
          text: '自律',
          label: 'C'
        }]
      },
      {
        key: 'Q22',
        most: '',
        lease: '',
        choices: [{
          key: 'Q22C1',
          text: '强有力',
          label: 'D'
        }, {
          key: 'Q22C2',
          text: '感情用事',
          label: 'I'
        }, {
          key: 'Q22C3',
          text: '随和',
          label: 'S'
        }, {
          key: 'Q22C4',
          text: '内向',
          label: 'C'
        }]
      },
      {
        key: 'Q23',
        most: '',
        lease: '',
        choices: [{
          key: 'Q23C1',
          text: '精力充沛',
          label: 'D'
        }, {
          key: 'Q23C2',
          text: '善交际',
          label: 'I'
        }, {
          key: 'Q23C3',
          text: '宽容',
          label: 'S'
        }, {
          key: 'Q23C4',
          text: '优雅',
          label: 'C'
        }]
      },
      {
        key: 'Q24',
        most: '',
        lease: '',
        choices: [{
          key: 'Q24C1',
          text: '苛求',
          label: 'D'
        }, {
          key: 'Q24C2',
          text: '掳获人心',
          label: 'I'
        }, {
          key: 'Q24C3',
          text: '安于现状',
          label: 'S'
        }, {
          key: 'Q24C4',
          text: '循规蹈矩',
          label: 'C'
        }]
      },
      {
        key: 'Q25',
        most: '',
        lease: '',
        choices: [{
          key: 'Q25C1',
          text: '好辩论',
          label: 'D'
        }, {
          key: 'Q25C2',
          text: '心情开朗',
          label: 'I'
        }, {
          key: 'Q25C3',
          text: '愿意合作',
          label: 'S'
        }, {
          key: 'Q25C4',
          text: '有条理',
          label: 'C'
        }]
      },
      {
        key: 'Q26',
        most: '',
        lease: '',
        choices: [{
          key: 'Q26C1',
          text: '直截了当',
          label: 'D'
        }, {
          key: 'Q26C2',
          text: '快乐逍遥',
          label: 'I'
        }, {
          key: 'Q26C3',
          text: '脾气温和',
          label: 'S'
        }, {
          key: 'Q26C4',
          text: '精益求精',
          label: 'C'
        }]
      },
      {
        key: 'Q27',
        most: '',
        lease: '',
        choices: [{
          key: 'Q27C1',
          text: '坐立不安',
          label: 'D'
        }, {
          key: 'Q27C2',
          text: '有感染力',
          label: 'I'
        }, {
          key: 'Q27C3',
          text: '友善',
          label: 'S'
        }, {
          key: 'Q27C4',
          text: '小心翼翼',
          label: 'C'
        }]
      },
      {
        key: 'Q28',
        most: '',
        lease: '',
        choices: [{
          key: 'Q28C1',
          text: '有开创精神',
          label: 'D'
        }, {
          key: 'Q28C2',
          text: '乐观',
          label: 'I'
        }, {
          key: 'Q28C3',
          text: '乐于助人',
          label: 'S'
        }, {
          key: 'Q28C4',
          text: '尊重别人',
          label: 'C'
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
      [currentQuestion]: targetIds[0]
      
    })
    //3
    var currentQuestionchoices = this.data.questions[current].choices
    for (var i = 0, len = currentQuestionchoices.length; i < len; i++) {
      console.log(currentQuestionchoices[i].key);//遍历输出
      var choice = "questions[" + current + "].choices[" + i + "]." + mORL  
      if (currentQuestionchoices[i].key == targetIds[0]){
        console.log("当前的选项是："+currentQuestionchoices[i].key)

        this.setData({
          [choice]:true
        })
         
      }else{
        this.setData({
          [choice]: false
        })
      }
    }
    console.log(currentQuestionchoices)
     

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