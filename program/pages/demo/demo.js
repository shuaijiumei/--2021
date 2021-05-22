// program/pages/demo/demo.js

const schools = ['电子科技大学']
const campuses = ['沙河校区','清水河校区','九里堤校区']
const grads = ['2020级','2019级','2018级','2017级']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:{
      user_name:'', //用微信接口直接获取
      short_info:'小程序设置多行超出进行隐藏 1、最近开发遇到需要在列表页显示一部分相关信息,但是可能涉及的信息比较长,所以想让它只显示两行,超出即用...显示,oksadasd',
      schools:schools,
      school:'电子科技大学',
      grads:grads,
      grad:'2019级',
      campuses:campuses,
      campus:'清水河校区',
      hobby:'',
      trust_score:91,
      value: [9999, 1, 1]
    },

    sport_list:[{}],
  },
  infoChange:function(e){
    const val = e.detail.value
    console.log(val);
    this.setData({
      'person.campus':this.data.person.campuses[Number(val[1])],
      'person.grad':this.data.person.grads[Number(val[2])]
    })
  
  },

//   loginForm: function(data) {
//     console.log(data.detail.value)//  {username: "hgj", password: "fsdfsd"}
//     var username = data.detail.value.username
//     var password = data.detail.value.password;

//     wx.cloud.callFunction({
//       name:'getSportList'
//       ,
//       data:{

//       },
//     }).then( res=>{
//      this.setData({
//        sport_list:res.result.data
//      })
//     }
//     ).catch(err=>{
//       console.log(err);
//     })

// },



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