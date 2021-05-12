// program/pages/logs/info_change/info_change.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:{
      user_name:'',
      short_info:'小程序设置多行超出进行隐藏 1、最近开发遇到需要在列表页显示一部分相关信息,但是可能涉及的信息比较长,所以想让它只显示两行,超出即用...显示,oksadasd',
      college:'',
      grad:'',
      campus:'',
      hobby:'',
      trust_score:91
    },
    isBorder:true

  },

  infoChange:function(){
    console.log(this.data.person);
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