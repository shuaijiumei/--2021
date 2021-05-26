// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const booked = db.collection("BOOKED")

// 云函数入口函数
exports.main = async (event, context) => {
  return await booked.add({
    data: event
  })
}