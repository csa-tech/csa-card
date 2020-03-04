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
    var that = this
    const db = wx.cloud.database()
    db.collection("card").where({
      card_number: that.data.cardNum
    })
    .get({
      success: function(res){
        if (res.data.length == 0){
          wx.showToast({
            title: 'Invalid',
            icon: 'none',
            duration: 2000
          })
          return
        }
      }
    }),
    db.collection("used").where({
      card_number: that.data.cardNum
    })
    .get({
      success: function(res){
        console.log(res.data)
        if (res.data.length == 1){
          wx.showToast({
            title: 'Used',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: 'Activated',
            duration: 2000
          })
          wx.setStorage({
            key: 'card number',
            data: that.data.cardNum
          }),
          db.collection("activation").add({
            data: {
              card_number: that.data.cardNum,
              activation_date: new Date()
            }
          })
          .then(res => {
            console.log(res)
          }),
          db.collection("used").add({
            data: {
              card_num: that.data.cardNum
            }
          })
          .then(res => {
            console.log(res)
          })
        }
      },
      fail: function(res){
        console.log(res.data)
      }
    })
  }
})
