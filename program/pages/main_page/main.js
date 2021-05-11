// program/pages/main_page/main.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose:{
      option1: [
        { text: '足球', value: 0 },
        { text: '篮球', value: 1 },
        { text: '乒乓球', value: 2 },
        { text: '羽毛球', value: 3 },
        { text: '保龄球', value: 4 },
        { text: '网球', value: 5 },
  
      ],
      option2: [
        { text: '今天', value: 'a' },
        { text: '明天', value: 'b' },
        { text: '后天', value: 'c' },
      ],
      option3: [
        { text: '沙河校区', value: 'A' },
        { text: '清水河校区', value: 'B' },
        { text: '九里堤校区', value: 'C' },
      ],
      value1:0,
      value2:'a',
      value3:'A',
    },


    show_list:[
      {
      user_name:'cnm',
      user_imag:'/images/1.jpg',
      trust_score:91,
      sport_type:'足球',
      time:'4月23日下午 4:00 - 6:00',
      title:'足球求约速来!!!',

      background_color:'#f7f9e1',
      color:'#a9b88d'
     

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
    booked:[
      {
        sport_type:'足球',
        book_data:'4月23日',
        start_time:'16:00',
        end_time:'18:00',
        
        color:'green',
        background_color:'#fdd33c',
        bar_color:'#46e6a3'
      },
      {
        sport_type:'篮球',
        book_data:'4月23日',
        start_time:'16:00',
        end_time:'18:00',
        color:'#f76d2f',
        background_color:'#09d0b2',
        bar_color:'#ff0056'
      },
      {
        sport_type:'保龄球',
        book_data:'4月23日',
        start_time:'16:00',
        end_time:'18:00',
        color:'#355fc5',
        background_color:'#f38ab9',
        bar_color:'#ffc803'
      }
    ]

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