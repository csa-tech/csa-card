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
    wx.cloud.init({
      env: "test1"
    })
    const db = wx.cloud.database()
    db.collection("activation").get({
      success: function (res) {
        if (res.data.length == 0) {
          //TODO: redirect -> activate
          wx.redirectTo({
            url: '/pages/activate/activate',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
          })
        } else {
          //TODO: redirect -> visit
          wx.redirectTo({
            url: '/pages/visit/visit',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
        console.log(res.data)
      },
      fail: function (res) {
        console.log(res.data)
      }

    })
  }
})
