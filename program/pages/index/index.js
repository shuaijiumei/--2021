
Page({
  data:{
    value:'',
    loading:true,

    //  场地信息,一次最多传十个值
    grounds:[
      {
      firstImgSrc: '/images/诺坎普.jpg',  //预览图地址
      groundSize:['五人制','七人制','十一人制'],  //场地规格
      title:'诺坎普',
      desc:'球场描述j就是看了角动量喀什觉得愧疚ask劳动节快乐肯德基萨福克',   //场地描述不超过30个字
    },

    {
      firstImgSrc: '/images/pic.jpg',  //预览图地址
      groundSize:['五人制','七人制','十一人制'],  //场地规格
      title:'电科球场',
      desc:'球场描述'
    },
    {
      firstImgSrc: '/images/pic2.jpg',  //预览图地址
      groundSize:['五人制','七人制','十一人制'],  //场地规格
      title:'电子科大五人制球场',
      desc:'球场描述'
    },
    {
      firstImgSrc: '/images/pic3.jpg',  //预览图地址
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
    {
      firstImgSrc: 'https://img.yzcdn.cn/vant/cat.jpeg',  //预览图地址
      groundSize:['五人制','七人制','十一人制'],  //场地规格
      title:'电子科大五人制球场',
      desc:'球场描述'
    },
    {
      firstImgSrc: '/images/1.jpg',  //预览图地址
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
