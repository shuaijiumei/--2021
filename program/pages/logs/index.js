// pages/logs/index.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:{
    },

    show_list:[
    {
      user_name:'qnmd',
      user_imag:'/images/person_icon.png',
      trust_score:60,
      sport_type:'足球',
      time:'4月23日下午 4:00 - 6:00',
      background_color:'#e8f6f7',
      color:'#6a96ee',
      title:'乒乓球求虐'
    },
  ],
    user:{}

    },

    warnLogin:function(){
      if(app.user.user_img === ''){
        wx.showToast({
          title: '请前往首页登录',
          icon:'loading'
        })
      }else{
        wx.showToast({
          title: '您好',
        })
      }
      
    },
    

    changeInfo:function(){

      wx.redirectTo({
        url: '/pages/logs/info_change/info_change',
      })

    },

    getMoreDetail:function(e){
      let order = e.currentTarget.dataset.order

      if (app.user.user_img === '') {
        wx.showToast({
          title: '请登录',
          icon:'loading'
        })
      }else{

        wx.redirectTo({
          url: '/pages/logs/booked_page/booked_page?'+'order='+order,
        })

    }
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      user:app.user
    })

    this.setData({
      person:app.person
    })

    this.setData({
      show_list:app.booked
    })

    console.log(this.data.show_list);
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
    this.setData({
      user:app.user
    })

    this.setData({
      person:app.person
    })

    this.setData({
      show_list:app.booked
    })


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      user:app.user
    })

    this.setData({
      person:app.person
    })

    this.setData({
      show_list:app.booked
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.setData({
      user:app.user
    })
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

  }
})