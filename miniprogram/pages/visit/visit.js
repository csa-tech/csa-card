// miniprogram/pages/visit/visit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  }, 
  
  getQRCode : function() {
    var _this = this;

    // define database.
    const db = wx.cloud.database();
    
    // 二维码扫描。
    wx.scanCode({   
      // if 成功     
      success: function (res) {
        console.log(res);    //输出回调信息
        
        // 设置信息 (not necesseary) 会在html 出现，但是没有必要，因为会跳转到card 
        _this.setData({
          qRCodeMsg: res.result
        });

        // 把1. 时间 2. 商店名字 存入数据库 view
        db.collection('visit').add({
          data: {
            visit_date: new Date(),
            merchant: res.result
          },
          success: function(res) {
            // 显示成功
            wx.showToast({
              title: '成功',
              duration: 2000
            });

            // 跳转到card 页面
            wx.navigateTo({
              url: '/pages/card/card'
            });
          },
          fail: console.log,
        });
      }
    })
  }
  
})