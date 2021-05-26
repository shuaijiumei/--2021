// program/pages/main_page/main.js

const app = getApp()

const backgroudColor_list =['rgba(18, 203, 196,.7)','rgba(153, 128, 250,.7)','rgba(247, 159, 31,.7)','rgba(234, 32, 39,.7)','rgba(223, 228, 234,1.0)','rgba(55, 66, 250,.5)','rgba(123, 237, 159,1.0)','rgba(255, 107, 129,1.0)']

const color_list =['#32ff7e','#fff200','#4b4b4b','#7158e2','#e84393','#2d3436','#0984e3']


Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_list:[],
    openid:'',
    choose:{
      option1: [
        { text: '足球', value: 0 },
        { text: '篮球', value: 1 },
        { text: '乒乓球', value: 2 },
        { text: '羽毛球', value: 3 },
        { text: '保龄球', value: 4 },
        { text: '网球', value: 5 },
  
      ],
      option3: [
        { text: '沙河校区', value: '11' },
        { text: '清水河校区', value: '12' },
        { text: '九里堤校区', value: '13' },
      ],
      value1:0,
      value2:'a',
      value3:'11',
    },


    booked:app.booked,

    user:app.user

  },
  logIn:function(){

    wx.getUserProfile({
      lang:'zh_CN',
      withCredentials: true,
      desc:'获取您的昵称和头像',
      success: (result) => {
        // console.log(result.userInfo);
        this.setData({
          'user.user_name':result.userInfo.nickName,
          'user.user_img':result.userInfo.avatarUrl
        })
        app.user.user_name = result.userInfo.nickName,
        app.user.user_img = result.userInfo.avatarUrl

        console.log(app.user.user_img);

        wx.cloud.callFunction({
          name:'changeUserInfo',
          data:{
            openid:app.data.openid,
            user_name:app.user.user_name,
            user_imag:app.data.user_img
          }
        })



        if (app.user.user_img === '') {
          console.log('未知错误');
        }else{
    
          wx.cloud.callFunction({
            name:'getBooked',
            data:{
              openid:app.data.openid
            }
          }).then(res=>{
            console.log(res);
            for (const resDate of res.result.data) {
              let end_time =  resDate.end_time *1000
              let start_time = resDate.start_time *1000
  
              end_time = new Date(end_time)
              start_time = new Date(start_time)
              resDate.book_date = (start_time.getMonth()+1) +'月'+start_time.getDate()+'日'
              
              const now = new Date()
  
              resDate.lastDate = start_time.getDate() - now.getDate() 

              resDate.end_time = end_time.getHours()+':'+end_time.getMinutes()
              resDate.start_time = start_time.getHours()+':'+start_time.getMinutes()

              resDate.bar_color = color_list[Math.floor(Math.random()*7)]
            }

            this.setData({
              booked:res.result.data
            })
            
            app.booked = res.result.data

          })
          //获取数据库内用户的信息
          wx.cloud.callFunction({
            name:'getUser',
            data:{
              openid:app.data.openid
            }
          }).then(res=>{
            console.log(res);

            const personData = res.result.data[0]

            app.person = personData
            console.log(app.person);

          })
         
    
        }
      },
      fail: (res) => {
        wx.showToast({
          title: '获取失败',
          icon:'none'
        })
      },
    })
    

  },
  
  type_change:function(value){

    let type = this.data.choose.option1[value.detail].text

    wx.cloud.callFunction({
      name:'getSportRequest',
      data:{
        sport_type:type
      }
    }).then(res=>{
      console.log(res.result.data);


      for (const resDate of res.result.data) {
        let end_time =  resDate.end_time *1000
        let start_time = resDate.start_time *1000

        end_time = new Date(end_time)
        start_time = new Date(start_time)
        resDate.book_date = start_time.getMonth()+'月'+start_time.getDate()+'日'
        
        const now = new Date()

        resDate.lastDate = now.getDate() - start_time.getDate()

        resDate.end_time = end_time.getHours()+':'+end_time.getMinutes()
        resDate.start_time = start_time.getHours()+':'+start_time.getMinutes()

        resDate.background_color = backgroudColor_list[Math.floor(Math.random()*8)]

        resDate.color = color_list[Math.floor(Math.random()*7)]
      }

      // console.log(res.result.data);

      // 随机设置颜色




      this.setData({
        show_list:res.result.data
      })




    }).catch(()=>{
      wx.showToast({
        title: '网络请求失败',
        icon:'loading'
      })
    })

  },

  campus_change:function(value){

    let campus = this.data.choose.option3[value.detail -11].text

    wx.cloud.callFunction({
      name:'getSportRequest',
      data:{
        req_campus:campus
      }
    }).then(res=>{
      // console.log(res.result.data);


      for (const resDate of res.result.data) {
        let end_time =  resDate.end_time *1000
        let start_time = resDate.start_time *1000

        end_time = new Date(end_time)
        start_time = new Date(start_time)
        resDate.book_date = (start_time.getMonth()+1) +'月'+start_time.getDate()+'日'
        
        const now = new Date()

        resDate.lastDate = start_time.getDate() - now.getDate()

        resDate.end_time = end_time.getHours()+':'+end_time.getMinutes()
        resDate.start_time = start_time.getHours()+':'+start_time.getMinutes()

        resDate.background_color = backgroudColor_list[Math.floor(Math.random()*8)]

        resDate.color = color_list[Math.floor(Math.random()*7)]
      }

      console.log(res.result.data);

      // 随机设置颜色




      this.setData({
        show_list:res.result.data
      })




    }).catch(()=>{
      wx.showToast({
        title: '网络请求失败',
        icon:'loading'
      })
    })
  },

  
  showInfo:function(){
    wx.navigateTo({
      url: '/pages/moreDetail/moreDetail',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 渲染随机展示的列表
    wx.cloud.callFunction({
      name:'getSportRequest',
      data:{}
    }).then(res=>{
      // 打印获取到的随机预约信息
      console.log(res.result.data);  

      for (const resDate of res.result.data) {

        console.log(resDate.end_time);

        let end_time =  resDate.end_time *1000
        let start_time = resDate.start_time *1000

        end_time = new Date(end_time)
        start_time = new Date(start_time)

        // console.log(start_time); 还是5月份
        console.log(start_time.getMonth());
        resDate.book_date = (start_time.getMonth()+1) +'月'+start_time.getDate()+'日'
        
        const now = new Date()

        resDate.lastDate = start_time.getDate() - now.getDate()


        resDate.end_time = end_time.getHours()+':'+end_time.getMinutes()
        resDate.start_time = start_time.getHours()+':'+start_time.getMinutes()

        // 随机选取颜色进行设置
        resDate.background_color = backgroudColor_list[Math.floor(Math.random()*8)]

        resDate.color = color_list[Math.floor(Math.random()*7)]
      }

      console.log(res.result.data);

      // 随机设置颜色




      this.setData({
        show_list:res.result.data
      })




    }).catch(()=>{
      wx.showToast({
        title: '网络请求失败',
        icon:'loading'
      })
    })


   
    wx.showModal({
      title:'登录',
      content:'是否授权小程序',
      cancelText:'否',
      cancelColor: '#a4b0be',
      confirmText:'是',
      confirmColor:'#2ed573',
      success: res=>{
        if(res.cancel){
          wx.showToast({
            title: '登录失败，无法正常使用',
            icon:'none'
          })

        }else{
          wx.cloud.callFunction({
            name:'getUserOpenid',
          }).then(res=>{
            this.setData({

              //获取用户id，得到id
              openid:res.result.openid
            })
            app.data.openid = this.data.openid;
            // console.log(app.data.openid);

            wx.cloud.callFunction({
              name:'getUser',
              data:{
                openid:this.data.openid
              }
            }).then(res=>{
              if (res.result.data.length === 0) {
                wx.showModal({
                  title:'用户未注册',
                  content:'请前往注册页面',
                  confirmText:'确认',
                  confirmColor:'#2ed573'
                }).then((res)=>{
                  if(res.cancel){
                    wx.showToast({
                      title: '登录失败，无法正常使用',
                      icon:'none'
                    })
                  }else{
                    wx.navigateTo({
                      url: '/pages/addInfo/addInfo',
                    })
                  }
              
                }).catch(err=>{
                  console.log(err);
                })
              
               
              }else{
                wx.showToast({
                  title: '成功，请登录',
                })
              }
            }).catch(err=>{
              wx.showToast({
                title: '获取用户信息失败',
                icon:'none'
              })
            })

      

          }).catch(err=>{
            wx.showToast({
              title: '获取id失败',
              icon:'none'
            })
          })
        }
      }

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