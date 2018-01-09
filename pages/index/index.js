//index.js
//获取应用实例
const app = getApp()
var order = ['sq1','sq2','sq3','sq4']
Page({
  data: {
    lunbo:{
    imgUrls: [
      'http://source.apichiyu.xyz/jinyinyueqi/banner1.png',
      'http://source.apichiyu.xyz/jinyinyueqi/banner2.png',
      'http://source.apichiyu.xyz/jinyinyueqi/banner3.png'
      ],
    },
    open: false,
    telView: {
      x: 250,
      y: 0
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toMap: function () {
    wx.navigateTo({
      url: '/pages/map/index',
    })
  },
  toTel: function () {
    wx.makePhoneCall({
      phoneNumber: '13582161227',
    })
  },
  showitem: function () {
    this.setData({
      open: !this.data.open
    })
  },
  tap: function (e) {
    console.log("in function tap")
    if (this.data.telView.x == 0) {
      this.setData({
        telView: {
          x: 250,
          y: 0
        }
      })
    } else {
      this.setData({
        telView: {
          x: 0,
          y: 0
        }
      });
    }
  },
  toMason: function () {
    wx.navigateTo({
      url: '/pages/mason/index',
    })
  },
  toWillian: function () {
    wx.navigateTo({
      url: '/pages/willian/index',
    })
  },
  toBojue: function () {
    wx.navigateTo({
      url: '/pages/bojue/index',
    })
  },
 toShouquan:function(){
   wx.navigateTo({
     url: '/pages/shouquan/index',
   })
 },
})
