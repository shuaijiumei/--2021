// 增加运动类型
// 传入参数：运动的全部参数

// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const sport = db.collection('SPORT')

// 云函数入口函数
exports.main = async (event, context) => {
  return await sport.add({
    data: event
  })
}