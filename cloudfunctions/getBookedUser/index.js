// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const booked = db.collection("BOOKED")

// 云函数入口函数
exports.main = async (event, context) => {
  let bookeds = await booked.where({
    sport_request_id: event.sport_request_id
  }).get()

  let openids = [] 
  for (let b = 0; b < bookeds.data.length; ++b) {
    openids.push(bookeds.data[b]["booked_openid"])
  }

  return openids
}