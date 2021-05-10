// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const user = db.collection("USER")

// 云函数入口函数
exports.main = async (event, context) => {
  return user.add({
    data: event
  })
}