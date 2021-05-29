// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const req = db.collection("SPORT_REQUEST")
const booked = db.collection("BOOKED")

// 云函数入口函数
exports.main = async (event, context) => {
  return await booked.where({
    sport_request_id: event._id
  }).remove().then(() => {
    req.where({
      _id: event._id
    }).remove()
  })
}