Page({
  data: {
    showLeft1: false,
    showLeft2: false,
    showRight1: false,
    showRigh2: false,
    showLeft3: false,

    current: 2,
    verticalCurrent: 2
  },
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
   handleClick() {
    const addCurrent = this.data.current + 1;
    const current = addCurrent > 2 ? 0 : addCurrent;
    this.setData({
      'current': current
    })
  }
});