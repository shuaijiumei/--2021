App({
  onLaunch (options) {
    // Do something initial when launch.
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
  globalData: {
   
  },

},
wx.cloud.init({
  env:'text-fc9vo',
  traceUser:true,
})
)