App({
  onLaunch: function () {
    //初始化
    if (wx.cloud) {
      wx.cloud.init({
        env: 'text-fc9vo',
        traceUser: true
      })
    } else {
      wx.showModal({
        content: '您的微信版本过低，可能会导致某些功能无法使用，请将微信更新至最新版本！',
        showCancel: false
      }).then(wx.updateWeChatApp())
    }
  },
  onShow (options) {
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
},
wx.cloud.init({
  env:'text-fc9vo',
  traceUser:true,
})
)