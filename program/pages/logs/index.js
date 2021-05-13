// pages/logs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:{
      user_name:'tby',
      short_info:'小程序设置多行超出进行隐藏 1、最近开发遇到需要在列表页显示一部分相关信息,但是可能涉及的信息比较长,所以想让它只显示两行,超出即用...显示,oksadasd',
      college:'信软学院',
      nianji:'2019级',
      campus:'沙河校区',
      hobby:'足球、篮球',
      trust_score:91
    },
    show_list:[
      {
      user_name:'cnm',
      user_imag:'/images/1.jpg',
      trust_score:91,
      sport_type:'足球',
      time:'4月23日下午 4:00 - 6:00',
      background_color:'#f7f9e1',
      color:'#a9b88d',
      title:'足球求约速来!!!'

    },
    {
      user_name:'ctm',
      user_imag:'/images/诺坎普.jpg',
      trust_score:85,
      sport_type:'足球',
      time:'4月23日下午 4:00 - 6:00',
      background_color:'#fff2e8',
      color:'#a9b88d',
      title:'快来打篮球！！！'
    },
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

    },

    changeInfo:function(){
      wx.navigateTo({
        url: '/pages/logs/info_change/info_change',
      })

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

  }
})