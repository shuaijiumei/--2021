// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const req = db.collection("SPORT_REQUEST")

// 云函数入口函数
exports.main = async (event, context) => {
  return await req.where(event).orderBy("start_time", "asc").get()
}