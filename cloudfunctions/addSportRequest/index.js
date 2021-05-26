// 增加运动请求
// 传入参数：运动请求的全部属性

// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const req = db.collection("SPORT_REQUEST")
const booked = db.collection("BOOKED")

// 云函数入口函数
exports.main = async (event, context) => {
  return await req.add({
    data: event
  }).then((res)=>{
    booked.add({
      data: {
        sport_request_id: res._id,
        booked_openid: event.openid
      }
    })
  })
}