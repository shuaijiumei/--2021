Page({
  data:{
    value:'',
    loading:true
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