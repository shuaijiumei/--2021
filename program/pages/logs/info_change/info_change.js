
const schools = ['电子科技大学']
const campuses = ['沙河校区','清水河校区','九里堤校区']
const grads = ['2020级','2019级','2018级','2017级']

const app = getApp()

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
      college:'',
      value: [9999, 1, 1]
    },
    isShow: "none",

    sport_list:[{}],
  },
  infoChange:function(e){
    const val = e.detail.value
    this.setData({
      'person.campus':this.data.person.campuses[Number(val[1])],
      'person.grad':this.data.person.grads[Number(val[2])]
    })
  
  },


  loginForm: function(data) {
    console.log(data.detail.value)//  {username: "hgj", password: "fsdfsd"}
    var hobby = data.detail.value.hobby
    var short_info = data.detail.value.short_info;
    var college = data.detail.value.college

    this.setData({
      'person.hobby':hobby,
      'person.short_info':short_info,
      'person.college':college
    })

    wx.cloud.callFunction({
      name:'changeUserInfo',
      data:{
        openid:app.data.openid,
        user_profile:this.data.person.short_info,
        user_hobby:this.data.person.hobby,
        user_collage:this.data.person.college,
      }
    }).then(res=>{
      wx.switchTab({
        url: '/pages/logs/index',
      }).then(()=>{
        wx.showToast({
          title: '修改成功',
        })
      })

    }).catch(err=>{
      console.log(err);
    })
  }
,

  school_change:function(){
    wx.navigateTo({
      url: '/pages/logs/school_change/school_change',
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