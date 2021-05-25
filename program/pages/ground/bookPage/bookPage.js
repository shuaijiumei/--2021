// program/pages/ground/bookPage/bookPage.js


Page({
  data: {
    show: false,
    type_show:false,
    campus_show:false,
    maxDate:1,
    bookDate:0,
    columns: ['足球', '篮球', '乒乓球', '羽毛球', '网球','健身'],
    campus_columns:['清水河校区','沙河校区','九里堤校区'],
    sport_type:'',
    sport_title:'',
    campus:''
  },


  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
    
    });

    let year = new Date()
    year = year.getFullYear()
    const time = (year+'/'+ this.formatDate(event.detail)).replace(/\//g, "-")
    let date = new Date(time)
    date = date.getTime()

    this.setData({
      bookDate:date
    })
    console.log(this.data.bookDate);


  },

  onPlay:function(){
    this.setData({
      type_show:true
    })
  },

  type_confirm(event) {

    const type_choose = this.selectComponent('.pop')

    const sport = type_choose.getValues()

    this.setData({ 
      type_show: false ,
      sport_type:sport[0]
    });

    // console.log(this.data.sport_type);

  },

  type_cancel:function(){
    this.setData({ 
      type_show: false
    });
  },

  close_campus:function(){
    this.setData({
      campus_show:false
    })
  },
  campus_cancel:function(){
    this.setData({ 
      campus_show: false
    });
  },
  campus_confirm(event) {

    const campus_choose = this.selectComponent('.campus')

    const campus_choosed = campus_choose.getValues()

    this.setData({ 
      campus_show: false ,
      campus:campus_choosed[0]
    });

    // console.log(this.data.campus);

  },
  onPlay_campus:function(){
    this.setData({
      campus_show:true,
    })
  },

  


  gameBegin:function(){
    console.log(this.data);
  },

  





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let time = new Date()
    time = time.getTime() + 3600*1000*24*7
    this.setData({
      maxDate:time
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