// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const booked = db.collection("BOOKED")
const user = db.collection("USER")

// 云函数入口函数
exports.main = async (event, context) => {
  let bookeds = await booked.where({
    sport_request_id: event.sport_request_id
  }).get()

  let users = []
  for (let b of bookeds.data) {
    let u = await user.where({
      openid: b.booked_openid
    }).get()
    users.push(u.data[0])
  }

  return users
}