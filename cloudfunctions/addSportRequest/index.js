// 增加运动请求
// 传入参数：运动请求的全部属性

// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const req = db.collection("SPORT_REQUEST")

function timeToTimestamp(time) {
  var date = new Date((time).replace(/-/g, "/")).getTime() / 1000
  date = date - 8 * 60 * 60   //转为UTC时间戳
  return date
}

// 云函数入口函数
exports.main = async (event, context) => {
  return await req.add({
    data: event
  })
}