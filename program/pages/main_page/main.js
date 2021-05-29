// program/pages/main_page/main.js

const app = getApp()

const backgroudColor_list =['rgba(18, 203, 196,.7)','rgba(153, 128, 250,.7)','rgba(247, 159, 31,.7)','rgba(234, 32, 39,.7)','rgba(223, 228, 234,1.0)','rgba(55, 66, 250,.5)','rgba(123, 237, 159,1.0)','rgba(255, 107, 129,1.0)']

const color_list =['#32ff7e','#fff200','#4b4b4b','#7158e2','#e84393','#2d3436','#0984e3']

const img_list =['https://i.loli.net/2021/05/28/BFqr7mkCAW3twNl.png','https://i.loli.net/2021/05/28/Ovr5gxRFm7EwcWo.png','https://i.loli.net/2021/05/28/lVH8QubEr5gPqN2.png']

// 处理时间只显示一个0
function handleZero(time) {
  let time_min = time.getMinutes()
  if (time_min === 0) {
  time_min = '00'
  }
  return time_min
}

// 处理展示list 的数据，处理时间和增加颜色和图片还有序号 ,返回处理后的数据
function showDataHandle(data) {
  // 增加序号
  let i = 0;
  for (const resDate of data) {
    // 过期删除
    resDate.show = true

    resDate.order = i
    i++ 

    let end_time =  resDate.end_time *1000
    let start_time = resDate.start_time *1000

    end_time = new Date(end_time)
    start_time = new Date(start_time)
    resDate.book_date = (start_time.getMonth()+1)+'月'+start_time.getDate()+'日'
    
    const now = new Date()

    resDate.lastDate =start_time.getDate() - now.getDate()

    if (resDate.lastDate < 0) {
      resDate.show = false
    }else{
      resDate.start_time = start_time.getHours()+':'+ handleZero(start_time)
      resDate.end_time = end_time.getHours()+':'+ handleZero(end_time)
  
      resDate.img_src = img_list[Math.floor(Math.random()*2)]
      resDate.background_color = backgroudColor_list[Math.floor(Math.random()*8)]
  
      resDate.color = color_list[Math.floor(Math.random()*7)]
    }
    }




  return data
}

function handleTimeOnly(data){
  let i = 0;
  for (const resDate of data) {
    // 删除过期数据
    resDate.show = true
    resDate.order = i
    i++ 

    // 处理时间
    let end_time =  resDate.end_time *1000
    let start_time = resDate.start_time *1000

    end_time = new Date(end_time)
    start_time = new Date(start_time)
    resDate.book_date = (start_time.getMonth()+1) +'月'+start_time.getDate()+'日'
    
    const now = new Date()

    resDate.lastDate =start_time.getDate() - now.getDate() 
    if (resDate.lastDate < 0) {
      resDate.show = false
    }else{
    // 增加颜色
    resDate.end_time = end_time.getHours()+':'+ handleZero(end_time)
    resDate.start_time = start_time.getHours()+':'+ handleZero(start_time)
    }


  }

  return data
}


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
        { text:'全部',value:6}
  
      ],
      option3: [
        { text: '沙河校区', value: '11' },
        { text: '清水河校区', value: '12' },
        { text: '九里堤校区', value: '13' },
        { text:'所有校区', value:'14'}
      ],
      value1:6,
      value2:'a',
      value3:'14',
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

        // console.log(app.user.user_img);

        // 每次登录后更新数据库
        wx.cloud.callFunction({
          name:'changeUserInfo',
          data:{
            openid:app.data.openid,
            user_name:app.user.user_name,
            user_img:app.user.user_img
          }
        })

        //获取预约数据
        if (app.user.user_img === '') {
          console.log('未知错误');
        }else{
          // 检测openid是否为空
          // console.log(app.data.openid);  
          wx.cloud.callFunction({
            name:'getBooked',
            data:{
              booked_openid:app.data.openid
            }
          }).then(res=>{
            // 处理时间
            res.result.data = handleTimeOnly(res.result.data)

            console.log(res.result.data);

            this.setData({
              booked:res.result.data
            })

            // console.log(res.result.data);
            console.log(this.data.booked);
            
            app.booked = res.result.data

          })
          //获取数据库内用户的信息
          wx.cloud.callFunction({
            name:'getUser',
            data:{
              openid:app.data.openid
            }
          }).then(res=>{
            // console.log(res);

            const personData = res.result.data[0]

            app.person = personData
            // console.log(app.person);

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

  // 更改运动类别调用
  type_change:function(value){

    let type = this.data.choose.option1[value.detail].text
    if (type === '全部') {
      wx.cloud.callFunction({
        name:'getSportRequest',
        data:{}
      }).then(res=>{
        console.log(res.result.data);
  
        // 处理展示的数据
        res.result.data = showDataHandle(res.result.data)
  
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
    }
    else{
      wx.cloud.callFunction({
        name:'getSportRequest',
        data:{
          sport_type:type
        }
      }).then(res=>{
        console.log(res.result.data);
  
        // 处理展示的数据
        res.result.data = showDataHandle(res.result.data)
  
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
    }

    

  },


  // 更改校区调用
  campus_change:function(value){

    let campus = this.data.choose.option3[value.detail -11].text

    if (campus === '所有校区') {
      wx.cloud.callFunction({
        name:'getSportRequest',
        data:{
        }
      }).then(res=>{
        // console.log(res.result.data);
  
        // 处理时间和添加颜色   随机色*2 针对展示页面
        res.result.data = showDataHandle(res.result.data)
  
        console.log(res.result.data);
  
        this.setData({
          show_list:res.result.data
        })
  
      }).catch(()=>{
        wx.showToast({
          title: '网络请求失败',
          icon:'loading'
        })
      })
    }
    else{

      wx.cloud.callFunction({
        name:'getSportRequest',
        data:{
          req_campus:campus
        }
      }).then(res=>{
        // console.log(res.result.data);
  
        // 处理时间和添加颜色   随机色*2 针对展示页面
        res.result.data = showDataHandle(res.result.data)
  
        console.log(res.result.data);
  
        this.setData({
          show_list:res.result.data
        })
  
      }).catch(()=>{
        wx.showToast({
          title: '网络请求失败',
          icon:'loading'
        })
      })
    }

  },

  
  showInfo:function(e){
    // let order = e.
    console.log(e);
    let order = e.currentTarget.dataset.order

    if (app.user.user_img === '') {
      wx.showToast({
        title: '请登录',
        icon:'loading'
      })
    }else{
      wx.redirectTo({
        url: '/pages/moreDetail/moreDetail?'+'order='+order ,
      })

    }

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 渲染随机展示的列表
    wx.cloud.callFunction({
      name:'getSportRequest',
      data: {}
    }).then(res=>{
      // console.log(res.result.data);
      // 处理数据
      res.result.data = showDataHandle(res.result.data)

      //局部数据
      this.setData({
        show_list:res.result.data
      })
      app.show_list = res.result.data

    }).catch(()=>{
      wx.showToast({
        title: '网络请求失败',
        icon:'loading'
      })
    })

    if ( !app.log) {
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
              app.log = true

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
    }
    else{

       //获取预约数据
       if (app.user.user_img === '') {
        console.log('未知错误');
      }else{
        // 检测openid是否为空
        // console.log(app.data.openid);  
        wx.cloud.callFunction({
          name:'getBooked',
          data:{
            booked_openid:app.data.openid
          }
        }).then(res=>{
          // 处理时间
          res.result.data = handleTimeOnly(res.result.data)

          console.log(res.result.data);

          this.setData({
            booked:res.result.data,
            user:app.user
          })

          // console.log(res.result.data);
          console.log(this.data.booked);
          
          app.booked = res.result.data

        })
    }

  }
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