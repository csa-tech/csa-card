//index.js
const app = getApp()

Page({
  data: {
  },
  
  viewDB: function() {
    wx.cloud.init({
      env: 'test-esbju'
    })
    const db = wx.cloud.database()
    db.collection('co').add({
      data: {
        w: 1
      },
      success: console.log,
      fail: console.log,
    })
  } 
})
