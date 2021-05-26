// program/pages/ground/bookPage/bookPage.js

const app = getApp()



Page({
  data: {
    show: false,
    type_show:false,
    campus_show:false,

    start_time:0,
    end_time:31,
    time_option1:[
      {text:'8：00',value:0},
      {text:'8：30',value:1},
      {text:'9：00',value:2},
      {text:'9：30',value:3},
      {text:'10：00',value:4},
      {text:'10：30',value:5},
      {text:'11：00',value:6},
      {text:'11：30',value:7},
      {text:'12：00',value:8},
      {text:'12：30',value:9},
      {text:'13：00',value:10},
      {text:'13：30',value:11},
      {text:'14：00',value:12},
      {text:'14：30',value:13},
      {text:'15：00',value:14},
      {text:'15：30',value:15},
      {text:'16：00',value:16},
      {text:'16：30',value:17},
      {text:'17：00',value:18},
      {text:'17：30',value:19},
      {text:'18：00',value:20},
      {text:'18：30',value:21},
      {text:'19：00',value:22},
      {text:'19：30',value:23},
      {text:'20：00',value:24},
      {text:'20：30',value:25},
      {text:'21：00',value:26},
      {text:'21：30',value:27},
    ],
    time_option2:[
     
      {text:'8：30',value:31},
      {text:'9：00',value:32},
      {text:'9：30',value:33},
      {text:'10：00',value:34},
      {text:'10：30',value:35},
      {text:'11：00',value:36},
      {text:'11：30',value:37},
      {text:'12：00',value:38},
      {text:'12：30',value:39},
      {text:'13：00',value:40},
      {text:'13：30',value:41},
      {text:'14：00',value:42},
      {text:'14：30',value:43},
      {text:'15：00',value:44},
      {text:'15：30',value:45},
      {text:'16：00',value:46},
      {text:'16：30',value:47},
      {text:'17：00',value:48},
      {text:'17：30',value:49},
      {text:'18：00',value:50},
      {text:'18：30',value:51},
      {text:'19：00',value:52},
      {text:'19：30',value:53},
      {text:'20：00',value:54},
      {text:'20：30',value:55},
      {text:'21：00',value:56},
      {text:'21：30',value:57},
      {text:'22：00',value:58},
    ],

    maxDate:1,
    bookDate:0,
    columns: ['足球', '篮球', '乒乓球', '羽毛球', '网球','健身'],
    campus_columns:['清水河校区','沙河校区','九里堤校区'],
    sport_type:'足球',
    sport_title:'默默默认标题!!!!',
    campus:'沙河校区',
    user_name:'',
    user_img:'',
    position:'',
    intend_person_num:2,
    remark:''
  },

  time_start_choose:function(value){
    console.log(value.detail);
    this.setData({
      start_time:value.detail
    })
  },
  time_end_choose:function(value){
    console.log(value.detail);
    this.setData({
      end_time:value.detail
    })
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
    if(this.data.bookDate === 0 ){
      wx.showToast({
        title: '请选择日期',
        icon:'loading'
      })
    }
    else if (this.data.position === ''){
      wx.showToast({
        title: '请填写地点',
        icon:'loading'
      })
    }
    else{
        //转换时间
        console.log(this.data.bookDate);
        let start_day = this.data.bookDate; //date对象,应该使用深拷贝


        //start_time 数组，分别存了hour和min
        let start_time = this.data.time_option1[this.data.start_time].text.split("：")
        let start_hour = start_time[0]
        let start_min = start_time[1]
        let end_time = this.data.time_option2[this.data.end_time - 31].text.split("：")
        start_day.setHours(start_time[0])
        start_day.setMinutes(start_time[1])
        console.log(end_time);
        start_time = start_day.getTime()
        end_time = start_time + (parseInt(end_time[0])-start_hour) *3600*1000 + (parseInt(end_time[1])-start_min) *60*1000
        start_time = start_time/1000
        end_time = end_time/1000

        console.log(start_time);
        console.log(end_time);

        console.log(this.data);

        wx.cloud.callFunction({
          naem:'addSportRequest',
          data:{
            openid:app.data.openid,
            req_title:this.data.sport_title,
            sport_type:this.data.sport_type,
            start_time:start_time,
            end_time:end_time,
            intend_person_num:this.data.intend_person_num,
            signed_person_num:1,
            req_campus:this.data.campus,
            sport_position:this.data.position,
            req_remark:this.data.remark,
            // err 提示有name没有传
          }
        }).then(()=>{
          wx.showToast({
            title: '发起成功！',
          })
          wx.switchTab({
            url: '/pages/main_page/main',
          })
        })
    }
    

  },

  





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let time = new Date()
    time = time.getTime() + 3600*1000*24*7
    this.setData({
      maxDate:time,
      user_name:app.user.user_name,
      user_img:app.user.user_img
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