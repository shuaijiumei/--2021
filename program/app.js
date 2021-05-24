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

    let code = ''

    wx.login({
      timeout: 2000,
    }).then(res =>{
      if(res.code){
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
          data:{
            code:res.code
          }
        })
      }else{
        wx.showToast({
          title: '登录失败',
          mask:true,
          duration:2000
        })
      }
    })

    wx.getUserInfo({
      lang: zh_CN,
      desc:'用户登录'
    })
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