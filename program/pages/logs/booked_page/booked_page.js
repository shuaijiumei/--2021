
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sport_request_id:'',
    person_joined:[],
    person_joined_length:1,
    intend_person_num:11,
    sport_info:{},
    order:0,

  },
  quitGame:function(){
    console.log(this.data.sport_request_id);
    console.log(app.booked[this.data.order]._id)
    //调用云函数加入Game
    wx.cloud.callFunction({
      name:'exitBooked',
      data:{
        _id:app.booked[this.data.order]._id,
        sport_request_id:this.data.sport_request_id
      }
    }).then(()=>{
      wx.showToast({
        title: '取消成功',
      }).then(()=>{
        wx.cloud.callFunction({
          name:'getBooked',
          data:{
            booked_openid:app.data.openid
          }
        }).then(res=>{
          console.log(res.result.data);
          app.booked = res.result.data
        }).catch(err=>{
          console.log(err);
        })

        wx.switchTab({
          url: '/pages/logs/index',
        })
      })
    }).catch(err=>{
      console.log(err);
    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let order = options.order
    this.setData({
      order:order
    })
    console.log(order);

      // 设置运动的id，便于加入
    this.setData({
      sport_request_id:app.booked[order].sport_request_id
    })

    // console.log(app.show_list[order]);
    
    // 渲染预定的全部用户，包括name和img
    wx.cloud.callFunction({
      name:'getBookedUser',
      data:{
        sport_request_id:app.booked[order].sport_request_id
      }
    }).then(res=>{
      // console.log(res);
      
      // console.log(res.result);

      this.setData({
        person_joined:res.result
      })
      // 重新设置参与人数
      let length = this.data.person_joined.length
      this.setData({
        person_joined_length:length
      })


    }).catch(err=>{
      console.log(err);
    })

    wx.cloud.callFunction({
      name:'getSportRequest',
      data:{
        _id:this.data.sport_request_id
      }
    }).then(res=>{
      // 处理得到的运动信息，如title
      if (res.result.data[0].req_remark === '') {
        res.result.data[0].req_remark = '默认备注鸭！'
      }
      this.setData({
        sport_info:res.result.data[0]
      })

      // console.log(res);
    }).catch(err=>{
      console.log(err);
    })

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