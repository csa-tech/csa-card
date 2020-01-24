//index.js
//获取应用实例


Page({
  data: {
    cardNum: '',
  },
  cardNumInput: function (e) {
    this.setData({
      cardNum: e.detail.value
    })
  },
  registerOnClick: function (e) {
    console.log("card number: " + this.data.cardNum),
    console.log(e)
  }
})
