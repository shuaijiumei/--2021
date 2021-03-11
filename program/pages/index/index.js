Page({
  data:{
    value:'',
    loading:true,

     //场地信息
     grounds:[
      {
      firstImgSrc: 'https://img.yzcdn.cn/vant/cat.jpeg',  //预览图地址
      groundSize:['五人制','七人制','十一人制'],  //场地规格
      title:'电子科大五人制球场',
      desc:'球场描述'
    },
    {
      firstImgSrc: 'https://img.yzcdn.cn/vant/cat.jpeg',  //预览图地址
      groundSize:['五人制','七人制','十一人制'],  //场地规格
      title:'电子科大五人制球场',
      desc:'球场描述'
    },

  ]
  },
  onChange(event){
    console.log(event.detail);
    
  },
  tap1:function(){
    console.log("点击一");
    
  },
  tap2:function(){
    console.log("点击二");
  }

})

module.exports=Page.data.grounds;