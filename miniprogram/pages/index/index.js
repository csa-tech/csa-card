// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  Enter: function () {
    try {
      var value = wx.getStorageSync('card number')
      if (value) {
        // Do something with return value
        wx.redirectTo({
          url: '/pages/visit/visit'
        })
      } else {
        const db = wx.cloud.database()
        db.collection("activation").get({
          success: function (res) {
            if (res.data.length == 0) {
              wx.redirectTo({
                url: '/pages/activate/activate'
              })
            } else {
              wx.setStorage({
                key: 'card number',
                data: res.data[0].card_number
              }),
              wx.redirectTo({
                url: '/pages/visit/visit'
              })
            }
            console.log(res.data)
          },
          fail: function (res) {
            console.log(res)
            console.log(res.data)
          }

        })
      }
    } catch (e) {
      // Do something when catch error
      console.log("Error")
    }  
  }
})
