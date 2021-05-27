// 增加用户
// 传入参数：用户的所有属性

// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const user = db.collection("USER")

// 云函数入口函数
exports.main = async (event, context) => {
  return await user.add({
    data: event
  })
}