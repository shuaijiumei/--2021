// 获取所有注册过的运动类型以及相关图片url
// 传入参数：无

// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const sport = db.collection("SPORT")

// 云函数入口函数
exports.main = async (event, context) => {
  return await sport.get()
}