// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const booked = db.collection("BOOKED")
const req = db.collection("SPORT_REQUEST")

// 云函数入口函数
exports.main = async (event, context) => {
  booked.where({
    _id: event._id
  }).remove()
  
  let temp = await req.where({
    _id: event.sport_request_id
  }).get()
  num = temp.data[0].signed_person_num
  req.where({
    _id: event.sport_request_id
  }).update({
    data: {
      signed_person_num: num - 1
    }
  }).finally(res => {
    return res
  })
}